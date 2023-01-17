const exec = require("child_process").execFile;
const _filter = require("lodash/filter");
const _findIndex = require("lodash/findIndex");
const _sortBy = require("lodash/sortBy");
const axios = require("axios");
// const robot = require("robotjs");
const storage = require("electron-json-storage");

const OBSWebSocket = require("obs-websocket-js").default;
const obs = new OBSWebSocket();

class ActionClass {
  constructor(action, database, deviceId, ioSocket, mainWindow) {
    this.action = action;
    this.database = database;
    this.deviceId = deviceId;
    this.ioSocket = ioSocket;
    this.mainWindow = mainWindow;
  }

  async api() {
    return new Promise(resolve => {
      axios.get(this.action.url);
      resolve();
    });
  }

  async delay() {
    return new Promise(resolve => setTimeout(resolve, this.action.seconds));
  }

  async exe() {
    return new Promise(resolve => {
      exec(this.action.path);
      resolve();
    });
  }

  async sound() {
    return new Promise(resolve => {
      this.mainWindow.webContents.send("MacroDeck:playSound", {
        path: this.action.path,
        volume: this.action.volume
      });
      resolve();
    });
  }

  async keyTap() {
    return new Promise(resolve => {
      // robot.keyTap(this.action.text);
      resolve();
    });
  }

  mdActions = {
    mdHome: () => {
      return { subAction: "mdHome" };
    },

    mdPage: () => {
      const pages = _filter(
        this.database.pages,
        f => f.profileId === this.action.profileId
      );
      const pageIndex = _findIndex(
        _sortBy(pages, "order"),
        f => f._id === this.action.page
      );

      return { subAction: "mdPage", pageIndex };
    },

    mdProfile: () => {
      return { subAction: "mdProfile", profile: this.action.profile };
    },

    mdProfileSelector: () => {
      return { subAction: "mdProfileSelector" };
    },

    mdReset: () => {
      return { subAction: "mdReset" };
    },

    mdSettings: () => {
      return { subAction: "mdSettings" };
    }
  };

  async md() {
    return new Promise(resolve => {
      const data = this.mdActions[this.action.subAction];

      this.ioSocket.emit("macroDeckerSocket", {
        action: "md",
        deviceId: this.deviceId,
        ...data()
      });

      resolve();
    });
  }

  async obsConnection(obs) {
    await obs.connect("ws://10.0.0.91:4444", "igHIw4ftNAXRHmVA");
  }

  async obs() {
    try {
      const obs = new OBSWebSocket();
      await this.obsConnection(obs);

      switch (this.action.subAction) {
        case "obsLayerToggle":
          const layer = JSON.parse(this.action.layer);
          const sceneName = layer.scene;
          const sceneItemId = layer.sceneItemId;

          console.log({ sceneName, sceneItemId });

          const { sceneItemEnabled } = await obs.call("GetSceneItemEnabled", {
            sceneName,
            sceneItemId
          });

          await obs.call("SetSceneItemEnabled", {
            sceneName,
            sceneItemId,
            sceneItemEnabled: !sceneItemEnabled
          });

          break;

        case "obsLayerHide":
          const obsLayerHideProps = JSON.parse(this.action.layer);

          await obs.call("SetSceneItemEnabled", {
            sceneName: obsLayerHideProps.scene,
            sceneItemId: obsLayerHideProps.sceneItemId,
            sceneItemEnabled: false
          });
          break;

        case "obsLayerShow":
          const obsLayerShowProps = JSON.parse(this.action.layer);

          await obs.call("SetSceneItemEnabled", {
            sceneName: obsLayerShowProps.scene,
            sceneItemId: obsLayerShowProps.sceneItemId,
            sceneItemEnabled: true
          });
          break;

        case "obsSceneChange": //WORKS WORKS WORKS WORKS WORKS WORKS WORKS WORKS
          await obs.call("SetCurrentProgramScene", {
            sceneName: this.action.scene
          });
          break;

        case "obsRecordToggle":
          await obs.call("ToggleRecord");
          break;

        case "obsRecordStart":
          await obs.call("StartRecord");
          break;

        case "obsRecordStop":
          await obs.call("StopRecord");
          break;

        case "obsRecordPause":
          await obs.call("PauseRecord");
          break;

        case "obsRecordResume":
          await obs.call("ResumeRecord");
          break;

        case "obsStreamToggle":
          await obs.call("ToggleStream");
          break;

        case "obsStreamStart":
          await obs.call("StartStream");
          break;

        case "obsStreamStop":
          await obs.call("StopStream");
          break;
      }

      await obs.disconnect();
    } catch (error) {
      console.log(112, error);
      await obs.disconnect();
    }
  }
}

const actionParser = (io, data, mainWindow) => {
  const parsedData =
    typeof data !== "object" && typeof data === "string"
      ? JSON.parse(data)
      : data;

  storage.get("md", async (error, db) => {
    if (error) throw err;

    const actionArray = _filter(
      db.actions,
      f => f.buttonPadId === parsedData._id
    );
    if (!actionArray) return;

    for (let action of actionArray) {
      const actionClass = await new ActionClass(
        action,
        db,
        parsedData.deviceId,
        io,
        mainWindow
      );

      await actionClass[action.action]();
    }
  });
};

module.exports = actionParser;
