/* istanbul ignore file */

// import { IpcRenderer, Remote } from "electron";

export interface IntWindow extends Window {
  electron?: any;
}

const appWindow: IntWindow = window;
export { appWindow as window };
