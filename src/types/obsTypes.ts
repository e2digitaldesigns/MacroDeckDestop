export interface IntObsSceneDataScenesSources {
  alignment: number;
  cx: number;
  cy: number;
  id: number;
  locked: boolean;
  muted: boolean;
  name: string;
  render: false;
  source_cx: number;
  source_cy: number;
  type: string;
  volume: number;
  x: number;
  y: number;
}

export interface IntObsSceneDataScenes {
  name: string;
  sources: IntObsSceneDataScenesSources[];
}

// export interface IntObsScenesData {
//   "current-scene": string;
//   currentScene?: string;
//   "message-id"?: string;
//   messageId: string;
//   scenes: IntObsSceneDataScenes[];
//   status: string;
// }

export interface IntObsScenesResponse {
  "current-scene"?: unknown;
  currentScene?: unknown;
  "message-id"?: unknown;
  messageId?: unknown;
  scenes?: unknown[];
  status?: unknown;
}

// export interface IntObsSource {
//   item: string;
//   sceneName: string;
// }

export interface IntObsScene {
  name: string;
}

export interface IntObsSource {
  parentScene?: string;
  scene: string;
  sceneItemId: number;
  sourceName: string;
}
