"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createClassComponent = function (_a) {
    var name = _a.name, _b = _a.ts, ts = _b === void 0 ? false : _b, _c = _a.rn, rn = _c === void 0 ? false : _c, _d = _a.style, style = _d === void 0 ? '' : _d;
    return "import React, { Component } from 'react';" + (rn ? "\nimport { View, Text } from 'react-native';" : '') + (!!style ? "\nimport styles from './" + name + ".module." + style + "';" : '') + (ts ? "\n\nexport interface " + name + "Props {}" : '') + "\n\nexport default class " + name + " extends Component" + (ts ? "<" + name + "Props>" : '') + " {\n  constructor(props" + (ts ? ": " + name + "Props" : '') + ") {\n    super(props);\n    this.state = {}\n  }\n\n  " + (ts ? 'public' : '') + " render() {\n    return (\n      " + (rn ? "<View><Text>" + name + "</Text></View>" : "<div>" + name + "</div>") + "\n    )\n  }\n}\n";
};
exports.default = createClassComponent;
