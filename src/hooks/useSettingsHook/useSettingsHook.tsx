import _cloneDeep from "lodash/cloneDeep";
import { useGlobalData } from "..";
import { IntSettings } from "../../types";

type TGetSettings = () => any;
type TUpdateSettings = (settings: IntSettings) => void;

export interface IntUseSettingsHook {
  getSettings: TGetSettings;
  updateSettings: TUpdateSettings;
}

const useSettingsHook = (): IntUseSettingsHook => {
  const globalData = useGlobalData();

  const getSettings: TGetSettings = () => {
    return _cloneDeep(globalData.state.settings);
  };

  const updateSettings: TUpdateSettings = settings => {
    const state = _cloneDeep(globalData.state);
    state.settings = settings;
    globalData.setState(state);
  };

  return {
    getSettings,
    updateSettings
  };
};

export default useSettingsHook;
