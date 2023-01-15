import { createGlobalStyle } from "styled-components";

const calculateFontSize = (test: any) => {
  const WIDTH = 1090,
    HEIGHT = 785,
    domWidth = document.body.clientWidth,
    domHeight = document.body.clientHeight;

  const ratio = 16 / WIDTH;

  console.log(9, document.body.clientWidth, test);

  return domWidth * (16 / 1090) + "px";
};

export const GlobalStyle = createGlobalStyle`
html,
body {
  color: ${props => props.theme.modules.body.colors.font.normal};
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  font-size: calc(100vw * (16/1090));
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
