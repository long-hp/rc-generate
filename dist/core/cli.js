"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCLI = exports.createConfig = void 0;
var path_1 = __importDefault(require("path"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var commander_1 = require("commander");
var isDev = process.env.NODE_ENV === 'dev';
var projectPackageJson = path_1.default.resolve(process.cwd(), 'package.json');
var projectConfigFile = path_1.default.resolve(process.cwd(), 'rc-generate.config.js');
// eslint-disable-next-line
if (!require(projectPackageJson)['rc-generate'] && !fs_extra_1.default.existsSync(projectConfigFile) && !isDev) {
    throw new Error('You have not created a config rc-generate for the project. Please see here https://github.com/wiloke1/rc-generate');
}
function createConfig() {
    var config;
    if (isDev) {
        config = {
            baseUrl: '',
            typescript: true,
            reactNative: false,
            createIndexFile: false,
            templates: {
                styles: '',
                actions: '',
                reducers: '',
                sagas: '',
                thunks: '',
                componentContent: '',
            },
        };
    }
    else {
        // eslint-disable-next-line
        config = require(path_1.default.resolve(process.cwd(), 'rc-generate.config.js'));
        if (!config) {
            // eslint-disable-next-line
            config = require(path_1.default.resolve(process.cwd(), 'package.json'))['rc-generate'];
        }
    }
    return config;
}
exports.createConfig = createConfig;
function createCLI() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    commander_1.program.version(require('../../package.json').version);
    commander_1.program
        .option('-c:type, --component:type <function | class>', 'Generate a component type', 'function')
        .option('-c:name, --component:name <string>', 'Generate a component name', 'ComponentName')
        .option('-s, --style <css | scss | react-native>', 'Generate a style')
        .option('-r, --redux <thunk | saga>', 'Generate a redux state management');
    commander_1.program.parse(process.argv);
    return commander_1.program;
}
exports.createCLI = createCLI;
