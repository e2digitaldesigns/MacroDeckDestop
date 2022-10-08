import { DefaultTheme } from "styled-components";
import { sizes } from "./sizes";

const remMaker = (data: string[]): string => {
  const total = data.reduce(
    (prevValue: number, currentValue: string) =>
      prevValue + parseFloat(currentValue),
    0
  );

  return total + "rem";
};

const headerHeight = "2.1875rem";
const subHeaderHeight = "2.8125rem";
const footerHeight = "1.5625rem";

const bodyBg = "#1c1e23";
const primaryBg = "#2a2d34";
const secondaryBg = "#2a2d34";

const primaryFont = "#ffffff";
const secondaryFont = "#7f8178";

const primaryAccent = "#8498d2";

export const themeLight: DefaultTheme = {
  modules: {
    body: {
      colors: {
        bg: "#1c1e23",
        font: {
          normal: primaryFont
        }
      }
    },

    header: {
      sizes: {
        width: "100%",
        height: headerHeight
      },
      colors: {
        bg: "#2a2d34",
        link: {
          bg: { normal: "#2a2d34", active: "#33373f" },
          icon: { normal: "#7f8185", active: "#8498d2" },
          font: { normal: "#7f8185", active: primaryFont },
          hover: { bg: "#33373f", font: primaryFont }
        }
      }
    },

    subHeader: {
      sizes: {
        width: "100%",
        height: subHeaderHeight
      },
      position: { top: "2.1875rem" },
      colors: {
        bg: "#33373f"
      },
      zIndex: "1000"
    },

    breadCrumb: {
      colors: {
        bg: { normal: "transparent", hover: secondaryBg },
        label: { font: { normal: secondaryFont } },
        caretHolder: { normal: secondaryFont }
      }
    },

    breadCrumbMenuItem: {
      colors: {
        bg: {
          normal: { normal: "#414650", active: "#496954" },
          hover: { normal: "#424d62", active: "#496954" }
        }
      }
    },

    sidebarLeft: {
      sizes: {
        width: "13.75rem",
        height:
          " calc( 100vh - " +
          remMaker([headerHeight, subHeaderHeight, footerHeight]) +
          ")"
      },
      position: { top: "5rem" },
      colors: {
        bg: "#272a31",
        borderTop: "#131418",
        borderRight: "#131418"
      },
      zIndex: 999,
      navigationItems: {
        colors: {
          bg: { normal: "#32363f", active: "#25334f" },
          font: { normal: "#7d7f85", hover: "" },
          count: { border: "#42464e", font: "#8498d2" },
          drag: { border: "#444444" },
          remove: { border: "#42464e", font: "#8498d2" }
        }
      },
      newProfileButton: {
        colors: {
          border: "#42464e",
          font: { normal: "#7d7f85", hover: primaryFont }
        }
      },
      profileSearch: {
        colors: {
          wrapper: { bg: "#3d424d" },
          stats: { font: secondaryFont },
          count: { font: "#8498d2" },
          showAll: { font: "#8498d2" },
          searchBox: { bg: "#31353e", border: "#41454d", font: secondaryFont }
        }
      },
      styleHeader: {
        colors: {
          wrapper: {
            bg: "#3d424d",
            border: { normal: "#3d424d", active: "blue" }
          },
          icon: { border: "#4444" },
          svg: { font: { normal: primaryFont, active: "#8498d2" } },
          count: { font: "#8498d2" }
        }
      }
    },
    scrollerDiv: {
      track: { bg: { normal: "#32363f" } },
      thumb: {
        bg: { normal: "#3d424d" },
        border: { normal: "#6e92b9" }
      }
    },
    buttonPadParser: {
      colors: {
        wrapper: {
          bg: primaryBg
        },
        buttonPad: {
          bg: primaryBg,
          border: primaryBg,
          borderBottom: { active: primaryAccent, normal: primaryBg }
        },

        buttonPadOptionIcon: {
          bg: { normal: "rgba(0, 0, 0, 0.5)", hover: "rgba(0, 0, 0, 0.55)" },
          font: { normal: primaryFont, hover: "#ffffff" }
        },
        buttonPadText: { font: { normal: primaryFont } },
        buttonPadIcon: { font: { normal: primaryFont } },
        buttonPadIconPlus: { font: { normal: "#999999" } }
      }
    },
    footer: {
      sizes: {
        width: "100%",
        height: footerHeight
      },
      colors: {
        bg: "#32363f",
        border: "#212121",
        font: {
          normal: "#fff"
        }
      },
      zIndex: 999
    },
    formFields: {
      default: {
        bg: { normal: "#1e1f22" },
        border: {
          normal: "#55565a",
          hover: "#55565a"
        },
        text: {
          normal: "#fff",
          focus: "#fff"
        }
      },
      submit: {
        bg: {
          normal: bodyBg,
          hover: bodyBg,
          focus: bodyBg,
          active: bodyBg,
          disabled: bodyBg
        },
        border: {
          normal: "transparent",
          hover: "#8498d2",
          focus: "none",
          active: "none",
          disabled: "none"
        },
        text: {
          normal: "#fff",
          hover: "#fff",
          focus: "#fff",
          active: "#fff",
          disabled: "#bbb"
        }
      },
      selectField: {
        text: {
          normal: "#fff"
        },
        border: {
          normal: "#55565a"
        },
        bg: {
          normal: "#1e1f22"
        }
      },
      textField: {
        text: {
          normal: "#fff",
          focus: "#fff"
        }
      }
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
