const { ipcMain } = require("electron");
const fs = require("fs");
const ip = require("ip");
const _cloneDeep = require("lodash/cloneDeep");

const storage = require("electron-json-storage");
const SETTINGS = require("../../settings/system.json");
const STARTER_JSON = require("../../utils/json/starter.json");

const createMobileProfile = require("../../utils/starterUtils");

const setIpAddress = json => {
  const data = _cloneDeep(json);
  data.settings.md.ipAddress = ip.address();
  data.settings.md.port = data.settings.md.port || SETTINGS.DEFAULT_PORT;
  return data;
};

const database = io => {
  ipcMain.on("database", (event, data) => {
    const actions = {
      loadAppData: () => {
        try {
          storage.get("md", (error, theJson) => {
            const useJson =
              !error && theJson.hasOwnProperty("settings")
                ? theJson
                : STARTER_JSON;

            event.reply("database:return", setIpAddress(useJson));
            if (error) {
              throw error;
            }
          });
        } catch (err) {
          console.error(err);
        }
      },

      saveAppData: () => {
        console.log("save");
        try {
          storage.set("md", data.data, error => {
            if (error) throw error;
            console.log("file updated = / = written successfully");
          });
        } catch (err) {
          console.error(err);
        }
      },

      updateMobileDevice: () => {
        console.log("send mobile update");
        const sendData = createMobileProfile(data.data);

        io.emit("macroDeckerSocketAutoUpdate", {
          action: "system",
          subAction: "dbUpdate",
          profiles: sendData
        });
      }
    };

    actions[data.action] && setTimeout(() => actions[data.action](), 100);
  });
};

module.exports = database;
