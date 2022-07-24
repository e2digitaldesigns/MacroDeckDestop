import { IpcRendererTypes, IpcRendererTypesAction } from "./../../types";
import { window } from "../../utils/window";

type TIPCRender = (
  name: IpcRendererTypes,
  data: IpcRendererTypesAction | object
) => void;

type TLoadAppData = () => void;
type SaveAppData = (data: any) => void;

export interface IntElectronHook {
  ipcRender: TIPCRender;
  loadAppData: TLoadAppData;
  saveAppData: SaveAppData;
}

const ipcRenderParser = () => {
  let ipcRender: any = null;

  if (window.electron && window.electron.ipcRenderer) {
    ipcRender = window.electron.ipcRenderer;
  }

  return ipcRender;
};

const useElectronHook = (): IntElectronHook => {
  const ipcRenderer = ipcRenderParser();

  const ipcRender: TIPCRender = (name, data) => {
    ipcRenderer && ipcRenderer.send(name, data);
  };

  const loadAppData: TLoadAppData = () => {
    ipcRenderer &&
      ipcRenderer.send(IpcRendererTypes.database, {
        action: IpcRendererTypesAction.loadAppData
      });
  };

  const saveAppData: SaveAppData = data => {
    ipcRenderer &&
      ipcRenderer.send(IpcRendererTypes.database, {
        action: IpcRendererTypesAction.saveAppData,
        data
      });
  };

  return {
    ipcRender,
    loadAppData,
    saveAppData
  };
};

export default useElectronHook;
