export enum ButtonPadNums {
  bpn06 = 6,
  bpn08 = 8,
  bpn12 = 12,
  bpn15 = 15,
  bpn24 = 24,
  bpn32 = 32
}

export enum ButtonPadGridSize {
  BPGS32 = 32,
  BPGS36 = 36
}

export const AdjustGridButtonPadNums: ButtonPadNums[] = [
  ButtonPadNums.bpn06,
  ButtonPadNums.bpn15
];

export enum SectionRoutes {
  Home = "home",
  MacroDeck = "macroDeck",
  Settings = "settings",
  SettingsMacroDeck = "settings/macroDeck",
  SettingsObs = "settings/obs",
  SettingsServer = "settings/server",
  SettingsTwitch = "settings/twitch",
  Splash = "/splash"
}
