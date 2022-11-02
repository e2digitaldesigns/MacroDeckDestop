const cors = require("cors");
const storage = require("electron-json-storage");
const SETTINGS = require("../settings/system.json");
const actionParser = require("./macroActions/macroActions");
const listners = require("../listeners");

const service = mainWindow => {
  const app = require("express")();
  const server = require("http").createServer(app);
  const io = require("socket.io")(server);

  app.use(cors());
  app.set("socketio", io);
  app.set("mainWindow", mainWindow);
  require("./routes")(app);

  app.get("/", (req, res) => {
    res.send("MACRO DECK API server is running...");
  });

  io.on("connection", socket => {
    socket.on("macroDeckerSocket", data => {
      actionParser(io, data);
      console.log(23);
    });

    socket.on("disconnect", reason => {
      console.log({ disconnected: reason });
    });
  });

  require("./twitch")();

  listners.listeners(io, mainWindow);
  /////////////////////////////////////
  /////////////////////////////////////
  /////////////////////////////////////

  try {
    storage.get("md", (error, data) => {
      if (error) throw error;
      server.listen(data.settings.md.port || SETTINGS.DEFAULT_PORT);
    });
  } catch (error) {
    console.log(45, error);
  }
};

module.exports = service;
