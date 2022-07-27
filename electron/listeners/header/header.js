const electron = require("electron");
const { app, ipcMain } = electron;

const header = mainWindow => {
  ipcMain.on("header", (e, data) => {
    const actions = {
      close: () => app.quit(),
      fsToggle: () => {
        return mainWindow.setFullScreen(!mainWindow.isFullScreen());
      },
      minimize: () => mainWindow.minimize()
    };

    actions[data] && actions[data]();
  });
};

module.exports = header;
