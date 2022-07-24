const electron = require("electron");
const { ipcMain } = electron;

const listeners = mainWindow => {
  ipcMain.on("ping", (e, data) => console.log(5, data));
};

module.exports.listeners = listeners;
