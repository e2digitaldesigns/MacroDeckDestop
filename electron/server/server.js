const cors = require("cors");
const storage = require("electron-json-storage");
const SETTINGS = require("../settings/system.json");
const actionParser = require("./macroActions/macroActions");

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
    });

    socket.on("disconnect", reason => {
      console.log({ disconnected: reason });
    });
  });

  require("./twitch")();

  /////////////////////////////////////
  /////////////////////////////////////
  /////////////////////////////////////

  try {
    storage.get("md", (error, data) => {
      if (error) throw error;
      // const PORT = data?.settings?.port || SETTINGS.DEFAULT_PORT;
      const PORT = SETTINGS.DEFAULT_PORT;
      server.listen(PORT);
    });
  } catch (error) {
    console.log(45, error);
  }
};

module.exports = service;
