import { DefaultTheme } from "styled-components";
import { sizes } from "./sizes";

export const themeDark: DefaultTheme = {
  modules: {
    body: {
      colors: {
        bg: "#1c1e23",
        font: {
          normal: "#fff"
        }
      }
    },

    header: {
      sizes: {
        width: "100%",
        height: "2.1875rem"
      },
      colors: {
        bg: "#2a2d34",
        link: {
          bg: { normal: "#2a2d34", active: "#33373f" },
          icon: { normal: "#7f8185", active: "#8498d2" },
          font: { normal: "#7f8185", active: "#ffffff" },
          hover: { bg: "#33373f", font: "#ffffff" }
        }
      }
    },

    subHeader: {
      sizes: {
        width: "100%",
        height: "2.8125rem"
      },
      position: { top: "2.1875rem" },
      colors: {
        bg: "#33373f"
      },
      zIndex: "1000"
    },

    breadCrumb: {
      colors: {
        bg: { hover: "#2a2d34" },
        label: { normal: "#7f8178", hover: "#7f8178" },
        caretHolder: { normal: "#7f8178", hover: "#7f8178" }
      }
    },

    footer: {
      sizes: {
        width: "100%",
        height: "1.5625rem"
      },
      colors: {
        bg: "#32363f",
        border: "#212121",
        font: {
          normal: "#fff"
        }
      },
      zIndex: 999
    }
  },
  colors: {
    bodyBg: "#1c1e23",
    border: {
      accent: "#4c515b",
      default: "#131418"
    },
    font: { normal: "white", active: "#7f8185" },
    panel: {
      accent: "#3d424d",
      fg: "#32363f",
      bg: "#272a31"
    }
  },
  sizes: { ...sizes }
};
