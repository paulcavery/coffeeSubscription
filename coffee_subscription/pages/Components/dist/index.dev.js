"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _footer = require("./footer");

Object.keys(_footer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _footer[key];
    }
  });
});

var _header = require("./header");

Object.keys(_header).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _header[key];
    }
  });
});