const electron = require("electron");
const path = require("path");
const getApplicationUrl = require("./utils/getApplicationUrl");
const menuTemplate = require("./menu");
const server = require("./server/server");
const listners = require("./listeners/");
const storage = require("electron-json-storage");

const SETTINGS = require("./settings/system.json");

console.log(11, storage.getDataPath());
// const isDev = process?.env?.APP_DEV ? true : false;
const isDev = true;
console.log(13, { isDev });

const { app: electronApp, BrowserWindow, ipcMain, Menu, Tray } = electron;

let mainWindow;
let tray = null;
const width = SETTINGS.APPLICATION.SIZE.WIDTH;
const height = SETTINGS.APPLICATION.SIZE.HEIGHT;

electronApp.on("ready", () => {
  tray = new Tray(__dirname + SETTINGS.LOGOS.SMALL);
  tray.setToolTip(SETTINGS.TRAY.TOOLTIP);

  mainWindow = new BrowserWindow({
    width: width,
    minWidth: width,
    height: height,
    minHeight: height,
    resizable: true,
    frame: true,
    backgroundColor: SETTINGS.APPLICATION.COLORS.BG,
    movable: true,
    minimizable: true,
    maximizable: true,
    // icon: __dirname + SETTINGS.LOGOS.SMALL,
    show: false,
    webPreferences: {
      contextIsolation: false,
      devTools: isDev,
      nodeIntegration: true,
      preload: __dirname + SETTINGS.SCRIPTS.PRELOAD,
      webSecurity: false
    }
  });

  mainWindow.setAspectRatio(width / height);
  // mainWindow.loadFile(`${__dirname}/build/index.html`);

  if (isDev) {
    mainWindow.loadURL(SETTINGS.LOAD_URL.LOCAL);
  } else {
    mainWindow.loadFile(`${__dirname}${SETTINGS.LOAD_URL.BUILD}`);
  }

  mainWindow.once("ready-to-show", () => mainWindow.show());

  mainWindow.on("minimize", event => {
    event.preventDefault();

    const template = [
      {
        label: SETTINGS.TRAY.TOOLTIP,
        // icon: __dirname + SETTINGS.LOGOS.SMALL,
        enabled: false
      },
      {
        type: "separator"
      },
      {
        label: "Show App",
        click: () => {
          mainWindow.show();
        }
      },
      {
        label: "Quit",
        click: () => {
          electronApp.quit();
          mainWindow = null;
        }
      }
    ];

    const contextMenu = Menu.buildFromTemplate(template);
    tray.setContextMenu(contextMenu);
    mainWindow.hide();
  });

  mainWindow.on("closed", () => {
    electronApp.quit();
    mainWindow = null;
  });

  // listners.listeners(mainWindow);

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);

  server(mainWindow);
});
