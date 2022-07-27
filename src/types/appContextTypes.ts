export interface IntbreadCrumbMenus {
  profileId: boolean;
  pageId: boolean;
  buttonPadId: boolean;
  actionId: boolean;
}

export interface IntAppDataIconSelector {
  icon: string;
  isVisible: boolean;
}

export interface IntAppDataActive {
  actionId: string;
  buttonPadId: string;
  pageId: string;
  profileId: string;
}

export interface IntDropZones {
  actionList: boolean;
  buttonPads: boolean;
  sideBarProfiles: boolean;
  sideBarStyles: boolean;
  styleHeader: boolean;
}

export interface IntAppContextInterface {
  active: IntAppDataActive;
  breadCrumbMenus: any;
  dropZones: IntDropZones;
  iconSelector: IntAppDataIconSelector;
}

export interface IntAppContextStateInterface {
  appState: IntAppContextInterface;
  setAppState: React.Dispatch<React.SetStateAction<any>>;
}

export type IntAppData = IntAppContextStateInterface;

export enum AppStateActive {
  ProfileId = "profileId",
  PageId = "pageId",
  ButtonPadId = "buttonPadId",
  ActionId = "actionId"
}
