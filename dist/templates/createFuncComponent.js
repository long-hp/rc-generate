"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var importStyles_1 = require("./importStyles");
var createFuncComponent = function (_a) {
    var name = _a.name, _b = _a.ts, ts = _b === void 0 ? false : _b, _c = _a.rn, rn = _c === void 0 ? false : _c, _d = _a.style, style = _d === void 0 ? '' : _d, _e = _a.componentContent, componentContent = _e === void 0 ? '' : _e;
    return ("\nimport React, { FC } from 'react';" + (rn ? "\nimport { View, Text } from 'react-native';" : '') + importStyles_1.importStyles({ name: name, rn: rn, style: style }) + (ts ? "\n\nexport interface " + name + "Props {}" : '') + "\n\nconst " + name + (ts ? ": FC<" + name + "Props>" : '') + " = () => {\n  return (\n    " + (!!componentContent ? componentContent : rn ? "<View><Text>" + name + "</Text></View>" : "<div>" + name + "</div>") + "\n  )\n}\n\nexport default " + name + ";\n").trim();
};
exports.default = createFuncComponent;
