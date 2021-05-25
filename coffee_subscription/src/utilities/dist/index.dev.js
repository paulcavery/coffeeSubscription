"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BreakPoints = require("./BreakPoints");

Object.keys(_BreakPoints).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _BreakPoints[key];
    }
  });
});

var _colors = require("./colors");

Object.keys(_colors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _colors[key];
    }
  });
});

var _font = require("./font");

Object.keys(_font).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _font[key];
    }
  });
});