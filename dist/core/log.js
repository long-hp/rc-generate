"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function log(str, color) {
    if (color === void 0) { color = 36; }
    return console.log("\u001B[" + color + "m" + str + "\u001B[0m");
}
exports.default = log;
