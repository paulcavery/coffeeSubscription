"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonOne = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utilities = require("../utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tcolor: #fff;\n\tfont: 18px ", ";\n\tfont-weight: 900;\n\tbackground-color: ", ";\n\twidth: 217px;\n\theight: 56px;\n\tborder-radius: 6px;\n\tborder: 1px solid ", ";\n\t&:hover {\n\t\tbackground-color: ", ";\n\t}\n\t&:disabled {\n\t\tbackground-color: ", ";\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonOne = _styledComponents["default"].button(_templateObject(), _utilities.FrauncesFont, _utilities.MainColors.darkCyan, _utilities.MainColors.darkCyan, _utilities.ButtonColorHover, _utilities.ButtonColorDisabled);

exports.ButtonOne = ButtonOne;