import React from "react";
import { useTemplate, useTheme } from "../../../hooks";
import * as Styled from "./mainContent.style";
import * as themes from "../../../context/themeContext/themes";

const MainContent: React.FC = () => {
  const { templateState, setTemplateState } = useTemplate();
  const { setThemeState } = useTheme();

  return (
    <Styled.MainContent>
      <h2>Main</h2>
      <h3 onClick={() => setThemeState(themes.themeLight)}>Light</h3>
      <h3 onClick={() => setThemeState(themes.themeDark)}>Dark</h3>
      <h3 onClick={() => setTemplateState({ hello: "pop" })}>Dark</h3>
      <h4>{templateState.hello}</h4>{" "}
    </Styled.MainContent>
  );
};

export default MainContent;
