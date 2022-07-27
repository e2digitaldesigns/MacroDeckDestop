const ping = require("ping");

const getApplicationUrl = async path => {
  const LocalUrl = "http://localhost:9001";
  const buildUrl = `${path}\\build\\index.html`;

  const { alive } = await ping.promise.probe(LocalUrl);
  await console.log(7, alive);
  return alive ? LocalUrl : buildUrl;
};

module.exports = getApplicationUrl;
