import path from 'path';
import fs from 'fs-extra';
import { program } from 'commander';
import createFuncComponent from './templates/createFuncComponent';
import { ComponentOptions } from './types/ComponentOptions';
import createClassComponent from './templates/createClassComponent';

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

program
  .option('-p, --path <string>', 'Path', '')
  .option('-c:type, --component:type <function | class>', 'Component type', 'function')
  .option('-c:name, --component:name <string>', 'Component name', 'ComponentName')
  .option('-s, --style <css | scss>', 'Style')
  .option('-r, --redux <thunk | saga>', 'Redux state management');

program.parse(process.argv);

function getStyle() {
  switch (program.style) {
    case 'css':
      return 'css';
    case 'scss':
      return 'scss';
    default:
      return '';
  }
}

function createComponent() {
  const options: ComponentOptions = {
    name: program['component:name'],
    rn: config['react-native'],
    ts: config.typescript,
    style: getStyle(),
  };
  switch (program['component:type']) {
    case 'function':
      return createFuncComponent(options);
    case 'class':
    default:
      return createClassComponent(options);
  }
}

// eslint-disable-next-line
const folderComponent = path.resolve(config.rootPath, program.path, program['component:name']);

function writeFileClassComponent() {
  try {
    fs.outputFile(
      path.resolve(folderComponent, `${program['component:name'].replace(/^.*\//g, '')}.${config.typescript ? 'tsx' : 'jsx'}`),
      createComponent(),
      err => {
        console.log(err);
      },
    );
  } catch (err) {
    console.log(err);
  }
}

function writeFileStyle() {
  try {
    if (program.style === 'scss') {
      fs.outputFile(path.resolve(folderComponent, `${program['component:name'].replace(/^.*\//g, '')}.module.scss`), '');
      return;
    }
    if (program.style === 'css') {
      fs.outputFile(path.resolve(folderComponent, `${program['component:name'].replace(/^.*\//g, '')}.module.css`), '');
    }
  } catch (err) {
    console.log(err);
  }
}

function writeFileRedux() {
  const dotFile = config.typescript ? 'ts' : 'js';
  const actionFile = path.resolve(folderComponent, 'actions', `actions.${dotFile}`);
  const reducerFile = path.resolve(folderComponent, 'reducers', `reducers.${dotFile}`);
  const sagaFile = path.resolve(folderComponent, 'sagas', `sagas.${dotFile}`);
  const thunkFile = path.resolve(folderComponent, 'thunks', `thunks.${dotFile}`);
  try {
    if (!!program.redux) {
      fs.outputFile(actionFile, '');
      fs.outputFile(reducerFile, '');
    }
    if (program.redux === 'saga') {
      fs.outputFile(sagaFile, '');
      return;
    }
    if (program.redux === 'thunk') {
      fs.outputFile(thunkFile, '');
    }
  } catch (err) {
    console.log(err);
  }
}

function init() {
  writeFileClassComponent();
  writeFileStyle();
  writeFileRedux();
}

init();
