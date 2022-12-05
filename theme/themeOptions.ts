import { THEME } from "../utils/constants";
import { ThemeOptions } from "@mui/material/styles";

interface THEME_OPTIONS {
  name: string;
  option: ThemeOptions;
}

export const themeOptions: THEME_OPTIONS[] = [
  {
    name: THEME.LIGHT,
    option: {
      palette: {
        mode: "light",
      },
    },
  },
  {
    name: THEME.DARK,
    option: {
      palette: {
        mode: "dark",
      },
    },
  },
];
