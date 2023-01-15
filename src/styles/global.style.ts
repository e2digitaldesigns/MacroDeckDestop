import { createGlobalStyle } from "styled-components";

const ratio = 875 / 1090;
const widthRem = 16 / 1090;
const heightRem = 16 / 875;

export const GlobalStyle = createGlobalStyle`
html,
body {
  color: ${props => props.theme.modules.body.colors.font.normal};
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  font-size: calc( 100vw * ${widthRem} );
  white-space: nowrap;
  background-color: ${props => props.theme.modules.body.colors.bg};
  overflow: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
}


@font-face {
  font-family: "Bebas Neue";
  src: url("./assets/fonts/BebasNeue.woff2") format("woff2"),
    url("./assets/fonts/BebasNeue.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
`;
