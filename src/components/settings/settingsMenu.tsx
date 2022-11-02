import * as React from "react";
import * as Styled from "./settingsMenu.styles";

const SettingsMenu: React.FC = () => {
  return (
    <Styled.SettingsMenuWrapper>
      <Styled.MenuUL>
        <Styled.ListItem>MacroDeck</Styled.ListItem>
        <Styled.ListItem>OBS</Styled.ListItem>
        <Styled.ListItem>Twitch (coming soon)</Styled.ListItem>
        <Styled.ListItem>Twitter (coming soon)</Styled.ListItem>
        <Styled.ListItem></Styled.ListItem>
      </Styled.MenuUL>
    </Styled.SettingsMenuWrapper>
  );
};

export default SettingsMenu;
