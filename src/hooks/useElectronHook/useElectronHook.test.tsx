import "@testing-library/jest-dom";
import useElectron from "./useElectronHook";
import { window } from "../../utils/window";
import initState from "./../__mocks__/mockState.json";

import { IpcRendererTypes, IpcRendererTypesAction } from "./../../types";

const mock = { ipcRendererSender: jest.fn() };

jest.mock("../../utils/window", () => ({
  window: {
    electron: {
      ipcRenderer: {
        send: (name: string, data: string | object) =>
          mock.ipcRendererSender(name, data)
      }
    }
  }
}));

describe("Use Electron Hook", () => {
  const { ipcRender, loadAppData, saveAppData } = useElectron();

  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  afterEach(() => {});

  it("Should send message", () => {
    ipcRender(IpcRendererTypes.database, IpcRendererTypesAction.close);
    expect(mock.ipcRendererSender).toHaveBeenCalledTimes(1);
    expect(mock.ipcRendererSender).toHaveBeenCalledWith("database", "close");
  });

  it("Should NOT send message", () => {
    jest
      .spyOn(window.electron.ipcRenderer, "send")
      .mockImplementation(() => null);
    loadAppData();
    ipcRender(IpcRendererTypes.database, IpcRendererTypesAction.close);
    expect(mock.ipcRendererSender).toHaveBeenCalledTimes(0);
  });

  it("Should load app data", () => {
    loadAppData();
    expect(mock.ipcRendererSender).toHaveBeenCalledTimes(1);
    expect(mock.ipcRendererSender).toHaveBeenCalledWith("database", {
      action: "loadAppData"
    });
  });

  it("Should NOT load app data", () => {
    jest
      .spyOn(window.electron.ipcRenderer, "send")
      .mockImplementation(() => null);
    loadAppData();
    expect(mock.ipcRendererSender).toHaveBeenCalledTimes(0);
  });

  it("Should save app data", () => {
    saveAppData(initState.state);
    expect(mock.ipcRendererSender).toHaveBeenCalledTimes(1);
    expect(mock.ipcRendererSender).toHaveBeenCalledWith("database", {
      action: "saveAppData",
      data: { ...initState.state }
    });
  });

  it("Should NOT save app data", () => {
    jest
      .spyOn(window.electron.ipcRenderer, "send")
      .mockImplementation(() => null);
    saveAppData(initState.state);
    expect(mock.ipcRendererSender).toHaveBeenCalledTimes(0);
  });
});
