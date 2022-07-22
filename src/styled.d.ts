import "styled-components";

declare module "styled-components" {
  export interface DefaultThemeSizes {
    footer: {
      height: string;
    };
    header: {
      height: string;
    };
    sidebarLeft?: any;
  }
  export interface DefaultTheme {
    colors: {
      bodyBg: string;
      border: {
        accent: string;
        default: string;
      };
      font: string;
      panel: {
        accent: string;
        fg: string;
        bg: string;
      };
    };
    sizes: DefaultThemeSizes;
  }
}
