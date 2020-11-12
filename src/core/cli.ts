import path from 'path';
import fs from 'fs-extra';
import { program } from 'commander';
import { CLIOptions } from '../types/CLIOptions';
import { Config } from '../types/Config';

const isDev = process.env.NODE_ENV === 'dev';
const projectPackageJson = path.resolve(process.cwd(), 'package.json');
const projectConfigFile = path.resolve(process.cwd(), 'rc-generate.config.js');

// eslint-disable-next-line
if ((!require(projectPackageJson)['rc-generate'] || fs.existsSync(projectConfigFile)) && !isDev) {
  throw new Error('You have not created a config rc-generate for the project. Please see here https://github.com/wiloke1/rc-generate');
}

function createConfig() {
  let config: Config;

  if (isDev) {
    config = {
      baseUrl: '',
      typescript: true,
      reactNative: false,
      templates: {
        styles: '',
        actions: '',
        reducers: '',
        sagas: '',
        thunks: '',
      },
    };
  } else {
    // eslint-disable-next-line
    config = require(path.resolve(process.cwd(), 'rc-generate.config.js'));
    if (!config) {
      // eslint-disable-next-line
    config = require(path.resolve(process.cwd(), 'package.json'))['rc-generate'];
    }
  }
  return config;
}

function createCLI(): CLIOptions {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  program.version(require('../../package.json').version);

  program
    .option('-c:type, --component:type <function | class>', 'Generate a component type', 'function')
    .option('-c:name, --component:name <string>', 'Generate a component name', 'ComponentName')
    .option('-s, --style <css | scss | react-native>', 'Generate a style')
    .option('-r, --redux <thunk | saga>', 'Generate a redux state management');

  program.parse(process.argv);

  return program as any;
}

export { createConfig, createCLI };
