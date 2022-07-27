const exec = require("child_process").execFile;
const _filter = require("lodash/filter");
const _findIndex = require("lodash/findIndex");
const _sortBy = require("lodash/sortBy");
const axios = require("axios");
// const robot = require("robotjs");
const storage = require("electron-json-storage");
const OBSWebSocket = require("obs-websocket-js");

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
      this.mainWindow.webContents.send("MD:playSound", this.action.path);
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
    await obs
      .connect({ address: "10.0.0.91:4444", password: "" })
      .then(() => console.log("connected..."))
      .catch(err => {
        console.log(err);
      });
  }

  async obsToggler(obs, source, visible) {
    await obs.send("SetSceneItemRender", {
      source: source,
      render: visible
    });
  }

  async obs() {
    try {
      const obs = new OBSWebSocket();
      await this.obsConnection(obs);

      switch (this.action.subAction) {
        case "obsLayerToggle":
          const { visible } = await obs.send("GetSceneItemProperties", {
            item: this.action.layer
          });
          await this.obsToggler(obs, this.action.layer, !visible);
          break;

        case "obsLayerHide":
          await this.obsToggler(obs, this.action.layer, false);
          break;

        case "obsLayerShow":
          await this.obsToggler(obs, this.action.layer, true);
          break;

        case "obsSceneChange":
          await obs.send("SetCurrentScene", {
            "scene-name": this.action.scene
          });
          break;

        case "obsRecordToggle":
          await obs.send("StartStopRecording");
          break;

        case "obsRecordStart":
          await obs.send("StartRecording");
          break;

        case "obsRecordStop":
          await obs.send("StopRecording");
          break;

        case "obsRecordPause":
          await obs.send("PauseRecording");
          break;

        case "obsRecordResume":
          await obs.send("ResumeRecording");
          break;

        case "obsStreamToggle":
          await obs.send("StartStopStreaming");
          break;

        case "obsStreamStart":
          await obs.send("StartStreaming");
          break;

        case "obsStreamStop":
          await obs.send("StopStreaming");
          break;
      }
    } catch (error) {
      console.log(112, error);
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
      console.log(181, action);
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
