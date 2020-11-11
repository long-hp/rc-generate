"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const commander_1 = require("commander");
const createFuncComponent_1 = __importDefault(require("./templates/createFuncComponent"));
const createClassComponent_1 = __importDefault(require("./templates/createClassComponent"));
const isDev = process.env.NODE_ENV === 'dev';
let config = {
    rootPath: 'src',
    typescript: true,
    'react-native': false,
};
if (!isDev) {
    // eslint-disable-next-line
    config = require('../../../package.json')['react-generate'];
}
commander_1.program
    .option('-p, --path <string>', 'Path', '')
    .option('-c:type, --component:type <function | class>', 'Component type', 'function')
    .option('-c:name, --component:name <string>', 'Component name', 'ComponentName')
    .option('-s, --style <css | scss>', 'Style')
    .option('-r, --redux <thunk | saga>', 'Redux state management');
commander_1.program.parse(process.argv);
function getStyle() {
    switch (commander_1.program.style) {
        case 'css':
            return 'css';
        case 'scss':
            return 'scss';
        default:
            return '';
    }
}
function createComponent() {
    const options = {
        name: commander_1.program['component:name'],
        rn: config['react-native'],
        ts: config.typescript,
        style: getStyle(),
    };
    switch (commander_1.program['component:type']) {
        case 'function':
            return createFuncComponent_1.default(options);
        case 'class':
        default:
            return createClassComponent_1.default(options);
    }
}
// eslint-disable-next-line
const folderComponent = path_1.default.resolve(config.rootPath, commander_1.program.path, commander_1.program['component:name']);
function writeFileClassComponent() {
    try {
        fs_extra_1.default.outputFile(path_1.default.resolve(folderComponent, `${commander_1.program['component:name'].replace(/^.*\//g, '')}.${config.typescript ? 'tsx' : 'jsx'}`), createComponent(), err => {
            console.log(err);
        });
    }
    catch (err) {
        console.log(err);
    }
}
function writeFileStyle() {
    try {
        if (commander_1.program.style === 'scss') {
            fs_extra_1.default.outputFile(path_1.default.resolve(folderComponent, `${commander_1.program['component:name'].replace(/^.*\//g, '')}.module.scss`), '');
            return;
        }
        if (commander_1.program.style === 'css') {
            fs_extra_1.default.outputFile(path_1.default.resolve(folderComponent, `${commander_1.program['component:name'].replace(/^.*\//g, '')}.module.css`), '');
        }
    }
    catch (err) {
        console.log(err);
    }
}
function writeFileRedux() {
    const dotFile = config.typescript ? 'ts' : 'js';
    const actionFile = path_1.default.resolve(folderComponent, 'actions', `actions.${dotFile}`);
    const reducerFile = path_1.default.resolve(folderComponent, 'reducers', `reducers.${dotFile}`);
    const sagaFile = path_1.default.resolve(folderComponent, 'sagas', `sagas.${dotFile}`);
    const thunkFile = path_1.default.resolve(folderComponent, 'thunks', `thunks.${dotFile}`);
    try {
        if (!!commander_1.program.redux) {
            fs_extra_1.default.outputFile(actionFile, '');
            fs_extra_1.default.outputFile(reducerFile, '');
        }
        if (commander_1.program.redux === 'saga') {
            fs_extra_1.default.outputFile(sagaFile, '');
            return;
        }
        if (commander_1.program.redux === 'thunk') {
            fs_extra_1.default.outputFile(thunkFile, '');
        }
    }
    catch (err) {
        console.log(err);
    }
}
writeFileClassComponent();
writeFileStyle();
writeFileRedux();
