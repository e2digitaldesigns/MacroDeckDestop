import { useGlobalData } from "..";

type TGetSettings = () => any;
type TUpdateSettings = () => void;

export interface IntUseSettingsHook {
  getSettings: TGetSettings;
  updateSettings: TUpdateSettings;
}

const useSettingsHook = (): IntUseSettingsHook => {
  const globalData = useGlobalData();

  const getSettings: TGetSettings = () => {
    return globalData.state.settings;
  };

  const updateSettings: TUpdateSettings = () => {};

  return {
    getSettings,
    updateSettings
  };
};

export default useSettingsHook;
