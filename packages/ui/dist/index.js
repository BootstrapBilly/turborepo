"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Button: () => Button_default,
  Header: () => Header_default
});
module.exports = __toCommonJS(src_exports);

// src/components/button/Button.tsx
var import_styled_components = __toESM(require("styled-components"));
var import_jsx_runtime = require("react/jsx-runtime");
var ButtonContainer = import_styled_components.default.button`
  padding: 1rem;
  background-color: blue;
`;
var Button = ({ label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonContainer, {
  children: label
});
var Button_default = Button;

// src/components/header/Header.tsx
var import_styled_components2 = __toESM(require("styled-components"));
var import_jsx_runtime = require("react/jsx-runtime");
var HeaderContainer = import_styled_components2.default.div`
  display: flex;
  background-color: white;
  padding: 11px 0;
`;
var Header = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderContainer, {
  children
});
var Header_default = Header;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Header
});
