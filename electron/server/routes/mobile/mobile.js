const express = require("express");
const router = express.Router();
const _filter = require("lodash/filter");
const _sortBy = require("lodash/sortBy");
const storage = require("electron-json-storage");

const actionParser = require("../../macroActions/macroActions");

const getPages = (data, profileId) => {
  return _filter(data, f => f.profileId === profileId);
};

const getButtons = (data, pageId) => {
  return _filter(data, f => f.pageId === pageId);
};

router.get("/start", async (req, res) => {
  try {
    const db = [];
    storage.get("md", (error, data) => {
      if (error) throw error;

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

      res.json(db);
    });
  } catch (error) {
    res.send(error);
  }
});

router.post("/actions", async (req, res) => {
  const io = req.app.get("socketio");
  const mainWindow = req.app.get("mainWindow");

  actionParser(io, req.body, mainWindow);
  res.send("hello");
});

module.exports = router;
