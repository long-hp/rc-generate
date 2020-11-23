"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createClassComponent_1 = __importDefault(require("../templates/createClassComponent"));
var createFuncComponent_1 = __importDefault(require("../templates/createFuncComponent"));
var getStyle_1 = __importDefault(require("./getStyle"));
function checkComponent(cliOption, config) {
    var options = {
        name: cliOption['component:name'].replace(/^.*\//g, ''),
        rn: config.reactNative,
        ts: config.typescript,
        style: getStyle_1.default(cliOption.style),
    };
    switch (cliOption['component:type']) {
        case 'function':
            return createFuncComponent_1.default(__assign(__assign({}, options), { componentContent: config.templates.componentContent }));
        case 'class':
        default:
            return createClassComponent_1.default(__assign(__assign({}, options), { componentContent: config.templates.componentContent }));
    }
}
exports.default = checkComponent;
