const { ipcMain, ipcRenderer } = require("electron");
const fs = require("fs");
const storage = require("electron-json-storage");

const settingsKeys = [
  "userInformation",
  "templateInformation",
  "settings",
  "active",
  "profiles",
  "pages",
  "buttonPads",
  "styles"
];

const hasKey = (arr, obj) => {
  return arr.every(item => obj.hasOwnProperty(item));
};

const settings = mainWindow => {
  ipcMain.on("importSettings", (event, data) => {
    try {
      const rawdata = fs.readFileSync(data.filePath, "utf8");

      if (data.importType === "local") {
        const settings = JSON.parse(rawdata);

        if (!hasKey(settingsKeys, settings))
          throw "Sorry, there was an error... please try later...";

        storage.set("md", JSON.parse(rawdata), error => {
          if (error) throw error;
          console.log("import file written successfully");
        });
      }
    } catch (err) {
      console.error(err);
      event.reply("importSettings:return", { err });
    }
  });
};

module.exports = settings;
