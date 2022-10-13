const _filter = require("lodash/filter");
const _sortBy = require("lodash/sortBy");

const getPages = (data, profileId) => {
  return _filter(data, f => f.profileId === profileId);
};

const getButtons = (data, pageId) => {
  return _filter(data, f => f.pageId === pageId);
};

const createMobileProfile = data => {
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
};

module.exports = createMobileProfile;
