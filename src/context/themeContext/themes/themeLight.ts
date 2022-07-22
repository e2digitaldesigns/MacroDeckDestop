import { DefaultTheme } from "styled-components";
import { sizes } from "./sizes";

export const themeLight: DefaultTheme = {
  colors: {
    bodyBg: "#ccc",
    border: {
      accent: "#4c515b",
      default: "#e6e6e6"
    },
    font: "black",
    panel: {
      accent: "#3d424d",
      fg: "#32363f",
      bg: "#272a31"
    }
  },
  sizes: { ...sizes }
};
