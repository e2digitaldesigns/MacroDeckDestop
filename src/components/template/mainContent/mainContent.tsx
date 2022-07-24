import React from "react";
import { useElectron, useTemplate, useTheme } from "../../../hooks";
import * as Styled from "./mainContent.style";
import * as themes from "../../../context/themeContext/themes";
import { IpcRendererTypes } from "../../../types";

export const TemplateMainContent: React.FC = () => {
  const { templateState, setTemplateState } = useTemplate();
  const { setThemeState } = useTheme();
  const { ipcRender } = useElectron();

  const handleIpc = () => {
    ipcRender(IpcRendererTypes.Ping, { data: "data" });
  };

  return (
    <Styled.MainContent>
      <h2>Main</h2>
      <br />
      <h3 onClick={() => setThemeState(themes.themeLight)}>Light</h3>
      <br />
      <h3 onClick={() => setThemeState(themes.themeDark)}>Dark</h3>
      <br />
      <h3 onClick={() => setTemplateState({ hello: "pop" })}>Template</h3>
      <br />
      <h3>{templateState.hello}</h3>
      <br />
      <h3 onClick={() => handleIpc()}>IPC Render</h3>
      <br />
      <span>"🌙" : "🌞"</span>
    </Styled.MainContent>
  );
};
