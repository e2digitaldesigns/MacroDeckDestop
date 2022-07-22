import { DefaultTheme } from "styled-components";
import { sizes } from "./sizes";

export const themeDark: DefaultTheme = {
  colors: {
    bodyBg: "#1c1e23",
    border: {
      accent: "#4c515b",
      default: "#131418"
    },
    font: "white",
    panel: {
      accent: "#3d424d",
      fg: "#32363f",
      bg: "#272a31"
    }
  },
  sizes: { ...sizes }
};
