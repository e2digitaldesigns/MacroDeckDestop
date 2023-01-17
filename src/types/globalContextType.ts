export interface IntUserInformation {
  _id: string;
  name: string;
}

export interface IntTemplateInformation {
  sideBarState: string;
}

export interface ISettingsFeaturesObs {
  ipAddress: string;
  port: string;
  password: string;
  status?: boolean;
}

export interface ISettingsFeatures {
  obs: ISettingsFeaturesObs;
}

export interface IMDSettings {
  ipAddress: string;
  port: string;
}
export interface IntSettings {
  md: IMDSettings;
  features: ISettingsFeatures;
}

export interface IntIdIndex {
  _id: string | undefined;
  index: number | undefined;
}
export interface IntActive {
  profileId: string;
  pageId: string;
  buttonPadId: string;
  actionId: string;
}

export interface IntProfile {
  _id: string;
  profileName: string;
  buttonPads: number;
}
export interface IntPages {
  profileId: string;
  _id: string;
  order: number;
  number?: number;
}
export interface IntButtonPads {
  profileId: string;
  pageId: string;
  _id: string;
  buttonPadNum: number;
  text: string;
  textColor: string;
  icon: string;
  iconColor: string;
  image: string;
  bgColor: string;
}
export interface IntActions {
  profileId: string;
  pageId: string;
  buttonPadId: string;
  _id: string;
  order: number;
  action: string;
  subAction: string;
  seconds: number;
  url: string;
  text: string;
  scene: string;
  layer: string;
  page: string;
  path: string;
  profile: string;
  volume: number;
}

export interface IntStyles {
  _id: string;
  textColor: string;
  icon: string;
  iconColor: string;
  image: string;
  bgColor: string;
}

export interface IntGlobalContextInterface {
  userInformation?: IntUserInformation;
  settings: IntSettings;
  profiles: IntProfile[];
  pages: IntPages[];
  buttonPads: IntButtonPads[];
  actions: IntActions[];
  styles: IntStyles[];
}

export interface IntGlobalContextStateInterface {
  state: IntGlobalContextInterface;
  setState: React.Dispatch<React.SetStateAction<IntGlobalContextInterface>>;
}

export type IntGlobalData = IntGlobalContextStateInterface;

export type TUpdateSettingsValue = ISettingsFeaturesObs;
