export enum ApplicationActions {
  API = "api",
  DELAY = "delay",
  EXE = "exe",
  KEYTAP = "keyTap",
  MD = "md",
  OBS = "obs",
  SOUND = "sound",
  SPO = "spotify",
  TW = "twitter"
}

export enum ApplicationSubAction {
  obsLayerHide,
  obsLayerShow,
  obsLayerToggle,
  obsRecordStart,
  obsRecordStop,
  obsRecordToggle,
  obsRecordPause,
  obsRecordResume,
  obsSceneChange,
  obsStreamStart,
  obsStreamStop,
  obsStreamToggle,
  spotifyNext,
  spotifyPause,
  spotifyPrevious,
  spotifyStart,
  spotifyStop
}

export interface IntActionTypes {
  name: string;
  display: string;
  active: boolean;
  subActions?: string[];
}

export enum FormFieldFileTypes {
  MDFileFieldExe = "mdFileFieldExe",
  MDFileFieldSound = "mdFileFieldSound",
  FileField = "fileField"
}

// interface actions {
//   _id: string;
//   order: number;
//   action?: Action;
//   subAction?: SubAction | undefined;
//   seconds?: number;
//   url?: string;
//   text?: string;
//   scene?: string;
//   layer?: string;
//   path?: string;
//   page?: string;
//   profile?: string;
// }

// const actionable = {
//   api: () => {},
//   delay: () => {},
//   exe: () => {},
//   md: () => {},
//   obs: () => {},
//   spotify: () => {},
//   twitter: () => {}
// };
