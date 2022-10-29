import * as React from "react";
import SettingsForms from "./settingsForms";
import * as Styled from "./settingsWrapper.styles";

const SettingsWrapper: React.FC = () => {
  return (
    <Styled.SettingsWrapper>
      <div>
        <ul>
          <li>MacroDeck</li>
          <li>OBS</li>
          <li>Twitch</li>
          <li>Twitter</li>
          <li></li>
        </ul>
      </div>
      <div>
        <SettingsForms />
      </div>
    </Styled.SettingsWrapper>
  );
};

export default SettingsWrapper;
