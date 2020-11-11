"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createClassComponent_1 = __importDefault(require("../templates/createClassComponent"));
var createFuncComponent_1 = __importDefault(require("../templates/createFuncComponent"));
var getStyle_1 = __importDefault(require("./getStyle"));
function checkComponent(cliOption, config) {
    var options = {
        name: cliOption['component:name'],
        rn: config.reactNative,
        ts: config.typescript,
        style: getStyle_1.default(cliOption.style),
    };
    switch (cliOption['component:type']) {
        case 'function':
            return createFuncComponent_1.default(options);
        case 'class':
        default:
            return createClassComponent_1.default(options);
    }
}
exports.default = checkComponent;
