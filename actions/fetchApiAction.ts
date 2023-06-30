export const getTokenFromLocalStorage = () => {
  return null;
};

const encodeComponent = (str: any) =>
  encodeURIComponent(str).replace(
    /[!'()*]/g,
    (x) => `%${x.charCodeAt(0).toString(16).toUpperCase()}`
  );

export const buildQuery = (params: any) =>
  Object.keys(params)
    .map((key) => `${encodeComponent(key)}=${encodeComponent(params[key])}`)
    .join("&");

const getApiUrl = (path: any, query: any) => {
  // let apiUrl = `${process.env.NEXT_PUBLIC_APIURL}api`;
  let apiUrl = `http://49.204.73.222:5003/api/v1`;

  if (path) {
    if (path[0] !== "/") {
      apiUrl += "/";
    }
    apiUrl += path;
  }

  if (query) {
    const queryStr = buildQuery(query);

    if (queryStr) {
      if (!/[&?]$/.test(apiUrl)) {
        apiUrl += !apiUrl.includes("?") ? "?" : "&";
      }
      apiUrl += queryStr;
    }
  }

  return apiUrl;
};

const getOptions = async (options: any, token?: string) => {
  let { body, optionalHeaders, ...opts } = options;
  const defaultHeaders: any = {};

  // const userToken = token || getTokenFromLocalStorage();
  // if (userToken) {
  //   defaultHeaders.Authorization = `Bearer ${userToken}`;
  // }

 defaultHeaders.credentials = "include"; // for sent cookie on request 

  const isJSON =
    body !== null && typeof body === "object" && !(body instanceof FormData);

  if (isJSON) {
    defaultHeaders["Content-Type"] = "application/json";
    body = JSON.stringify(body);
  }

  return {
    ...opts,
    body,
    headers: {
      ...defaultHeaders,
      ...optionalHeaders,
    },
  };
};

export interface RESPONSE_TYPE {
  status: boolean;
  data: any;
}

const fetchApi = async (
  path: any,
  options: any = {},
  token?: string
): Promise<RESPONSE_TYPE> => {
  try {
    const { query, ...opts } = options;
    const fetchOptions = await getOptions(opts, token);
    const response = await fetch(getApiUrl(path, query), fetchOptions);
    const body: any = await response.json();

    if (response.status < 200 || response.status >= 300) {
      const error: any = new Error(body?.message || response.statusText);
      error.message = body?.message || "Failed to fetch";
      error.status = response.status;
      return Promise.resolve({
        status: false,
        data: error,
      });
    }

    return Promise.resolve({
      status: true,
      data: body,
    });
  } catch (err) {
    return Promise.resolve({
      status: false,
      data: null,
    });
  }
};

const API = {
  fetch: fetchApi,

  delete: async (path: any, options = {}, query: any, token?: string) =>
    await fetchApi(path, { query, ...options, method: "DELETE" }, token),

  get: async (path: any, options = {}, query?: any, token?: string) =>
    await fetchApi(path, { query, ...options, method: "GET" }, token),

  post: async (path: any, body: any, options = {}, token?: string) =>
    await fetchApi(path, { body, ...options, method: "POST" }, token),
};

export default API;