import { DefaultTheme } from "styled-components";
import { sizes } from "./sizes";

export const themeLight: any = {
  colors: {
    bodyBg: "#ccc",
    border: {
      accent: "#4c515b",
      default: "#e6e6e6"
    },
    font: { normal: "black", active: '"#7f8185"' },
    panel: {
      accent: "#3d424d",
      fg: "#32363f",
      bg: "#272a31"
    }
  },
  sizes: { ...sizes }
};
