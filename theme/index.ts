import { createTheme, Theme } from "@mui/material";
import { themeOptions } from "./themeOptions";

const create_Theme = (mode: string): Theme => {
  const options = themeOptions.find((elem) => elem.name === mode);
  let newTheme;

  if (options) {
    newTheme = createTheme({
      ...options.option,
    });
  } else {
    newTheme = createTheme({
      palette: {
        mode: "light",
      },
    });
  }

  return newTheme;
};

export default create_Theme;
