import * as React from "react";
import SettingsForms from "./settingsForms";
import SettingsMenu from "./settingsMenu";
import * as Styled from "./settingsWrapper.styles";

const SettingsWrapper: React.FC = () => {
  return (
    <Styled.SettingsWrapper>
      <SettingsMenu />

      <SettingsForms />
    </Styled.SettingsWrapper>
  );
};

export default SettingsWrapper;
