import "../styles/globals.scss";
import type { AppProps } from "next/app";
import wrapper from "../redux/stores";
import { Provider } from "react-redux";
import create_Theme from "../theme";
import { THEME } from "../utils/constants";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../utils/createEmotionCache";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AuthProvider } from "../context/authContext";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();
const theme = create_Theme(THEME.LIGHT);

function App({ Component, ...rest }: MyAppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  const { pageProps, emotionCache = clientSideEmotionCache } = props;

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <CssBaseline />
            <Component {...pageProps} />
          </AuthProvider>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

export default App;
