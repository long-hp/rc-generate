"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCLI = exports.config = void 0;
var commander_1 = require("commander");
var isDev = process.env.NODE_ENV === 'dev';
var config = {
    appDir: 'src',
    typescript: true,
    reactNative: false,
};
exports.config = config;
if (!isDev) {
    // eslint-disable-next-line
    exports.config = config = require('../../../../package.json')['rc-generate'];
}
function createCLI() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    commander_1.program.version(require('../../package.json').version);
    commander_1.program
        .option('-d, --appDir <string>', 'The name of the application directory')
        .option('-c:type, --component:type <function | class>', 'Generate a component type', 'function')
        .option('-c:name, --component:name <string>', 'Generate a component name', 'ComponentName')
        .option('-s, --style <css | scss>', 'Generate a style')
        .option('-r, --redux <thunk | saga>', 'Generate a redux state management');
    commander_1.program.parse(process.argv);
    return commander_1.program;
}
exports.createCLI = createCLI;
