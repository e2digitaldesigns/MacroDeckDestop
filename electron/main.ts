const electron = require("electron");

const { app: electronApp, BrowserWindow } = electron;

let mainWindow;
const width = 1600;
const height = 1200;

electronApp.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: width,
    minWidth: width,
    height: height,
    minHeight: height,
    resizable: true,
    frame: true,
    backgroundColor: "white",
    movable: true,
    minimizable: true,
    maximizable: true,
    show: false,
    webPreferences: {
      contextIsolation: false,
      devTools: true,
      nodeIntegration: true,
      preload: __dirname + "/preload.js",
      webSecurity: false
    }
  });

  mainWindow.setAspectRatio(width / height);

  mainWindow.loadURL(__dirname + "/build/index.html");

  mainWindow.loadURL("http://localhost:3000");

  mainWindow.once("ready-to-show", () => mainWindow.show());

  mainWindow.on("closed", () => {
    electronApp.quit();
    mainWindow = null;
  });
});
