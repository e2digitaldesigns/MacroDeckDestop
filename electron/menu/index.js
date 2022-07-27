const electron = require("electron");
const { app } = electron;

const platform = process.platform === "darwin" ? "mac" : "win";
const ENV = process.env.NODE_ENV;

const accelerators = {
  quit: { mac: "Command+Q", win: "Ctrl+Q" },
  devTools: { mac: "Command+Alt+I", win: "Ctrl+Shift+I" }
};

const menuTemplate = [
  {
    label: "File",
    submenu: [
      { label: "New Profile" },
      {
        label: "Quit",
        accelerator: accelerators.quit[platform],
        click() {
          app.quit();
        }
      }
    ]
  }
];

if (platform === "mac") {
  menuTemplate.unshift({});
}

if (ENV !== "production") {
  menuTemplate.push({
    label: "DEVELOPER",
    submenu: [
      { role: "reload" },
      {
        label: "Toggle Developer Tools",
        accelerator: accelerators.devTools[platform],
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      }
    ]
  });
}

module.exports = menuTemplate;
