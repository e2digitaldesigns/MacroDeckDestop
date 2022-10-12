const { ipcMain } = require("electron");
const fs = require("fs");
const ip = require("ip");
const _cloneDeep = require("lodash/cloneDeep");
const _filter = require("lodash/filter");
const _sortBy = require("lodash/sortBy");

const storage = require("electron-json-storage");
const SETTINGS = require("../../settings/system.json");
const STARTER_JSON = require("../../utils/json/starter.json");

const setIpAddress = json => {
  const data = _cloneDeep(json);
  data.settings.ipAddress = ip.address();
  // data.settings.port = data?.md?.settings?.port || SETTINGS.DEFAULT_PORT;
  data.settings.port = SETTINGS.DEFAULT_PORT;
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

            const sendData = createMobileProfile(data.data);

            io.emit("macroDeckerSocket", {
              action: "system",
              subAction: "dbUpdate",
              data: sendData
            });
          });
        } catch (err) {
          console.error(err);
        }
      }
    };

    actions[data.action] && setTimeout(() => actions[data.action](), 100);
  });
};

module.exports = database;

function createMobileProfile(data) {
  const db = [];

  for (let i = 0; i < data.profiles.length; i++) {
    data.profiles[i].pages = getPages(data.pages, data.profiles[i]._id);
    data.profiles[i].pages = _sortBy(data.profiles[i].pages, "order");

    for (let x = 0; x < data.profiles[i].pages.length; x++) {
      data.profiles[i].pages[x].buttonPads = getButtons(
        data.buttonPads,
        data.profiles[i].pages[x]._id
      );
    }

    db.push(data.profiles[i]);
  }

  return db;
}

function getPages(data, profileId) {
  return _filter(data, f => f.profileId === profileId);
}

function getButtons(data, pageId) {
  return _filter(data, f => f.pageId === pageId);
}
