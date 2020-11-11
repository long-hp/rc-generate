"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createFuncComponent = function (_a) {
    var name = _a.name, _b = _a.ts, ts = _b === void 0 ? false : _b, _c = _a.rn, rn = _c === void 0 ? false : _c, _d = _a.style, style = _d === void 0 ? '' : _d;
    return "import React, { FC } from 'react';" + (rn ? "\nimport { View, Text } from 'react-native';" : '') + (!!style ? "\nimport styles from './" + name + ".module." + style + "';" : '') + (ts ? "\n\nexport interface " + name + "Props {}" : '') + "\n\nconst " + name + (ts ? ": FC<" + name + "Props>" : '') + " = () => {\n  return (\n    " + (rn ? "<View><Text>" + name + "</Text></View>" : "<div>" + name + "</div>") + "\n  )\n}\n\nexport default " + name + ";\n";
};
exports.default = createFuncComponent;
