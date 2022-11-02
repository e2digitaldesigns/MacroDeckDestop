import _cloneDeep from "lodash/cloneDeep";
import { useGlobalData } from "..";
import {
  IntSettings,
  IMDSettings,
  ISettingsFeatures,
  TUpdateSettingsValue,
  SettingsUpdaters
} from "../../types";

type TGetSettings = () => IntSettings;
type TUpdateSettings = (settings: IMDSettings) => void;
type TUpdateFeature = (
  setting: SettingsUpdaters,
  values: TUpdateSettingsValue
) => void;

export interface IntUseSettingsHook {
  getSettings: TGetSettings;
  updateSettings: TUpdateSettings;
  updateFeature: TUpdateFeature;
}

const useSettingsHook = (): IntUseSettingsHook => {
  const globalData = useGlobalData();

  const getSettings: TGetSettings = () => {
    return _cloneDeep(globalData.state.settings);
  };

  const updateSettings: TUpdateSettings = settings => {
    const state = _cloneDeep(globalData.state);
    state.settings.md.ipAddress = settings.ipAddress;
    state.settings.md.port = settings.port;
    globalData.setState(state);
  };

  const updateFeature: TUpdateFeature = (setting, values) => {
    const state = _cloneDeep(globalData.state);
    state.settings.features[setting as keyof ISettingsFeatures] = values;
    globalData.setState(state);
  };

  return {
    getSettings,
    updateSettings,
    updateFeature
  };
};

export default useSettingsHook;
