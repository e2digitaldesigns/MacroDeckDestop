import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bodyBg: string;
      font: string;
    };
  }
}
