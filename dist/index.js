"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var writeFileStyle_1 = __importDefault(require("./core/writeFileStyle"));
var writeFileClassComponent_1 = __importDefault(require("./core/writeFileClassComponent"));
var writeFileRedux_1 = __importDefault(require("./core/writeFileRedux"));
var cli_1 = require("./core/cli");
var log_1 = __importDefault(require("./core/log"));
var cliOption = cli_1.createCLI();
var folderComponent = path_1.default.resolve('src', cliOption['component:name']);
function init() {
    log_1.default('\n 🚀  Generating...\n');
    writeFileClassComponent_1.default(cliOption, folderComponent, cli_1.config);
    writeFileStyle_1.default(cliOption, folderComponent);
    writeFileRedux_1.default(cliOption, folderComponent, cli_1.config);
    log_1.default(" \u2705  " + cliOption['component:name'] + " generate successfully", 32);
}
init();
