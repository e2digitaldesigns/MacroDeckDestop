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
    modules: any;
    colors: {
      bodyBg: string;
      border: {
        accent: string;
        default: string;
      };
      font: any;
      panel: {
        accent: string;
        fg: string;
        bg: string;
      };
    };
    sizes: DefaultThemeSizes;
  }
}
