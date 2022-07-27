const express = require("express");
const mobile = require("./mobile/mobile");

module.exports = function (app) {
  const prefix = "/api/v1/";

  app.use(express.json());
  app.use(`${prefix}mobile`, mobile);
};
