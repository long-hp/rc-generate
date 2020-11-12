import { program } from 'commander';
import { CLIOptions } from '../types/CLIOptions';
import { Config } from '../types/Config';

const isDev = process.env.NODE_ENV === 'dev';

let config: Config;
if (isDev) {
  config = {
    appDir: '',
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
  config = require('../../../../rc-generate.config.js');
  if (!config) {
    // eslint-disable-next-line
    config = require('../../../../package.json')['rc-generate'];
  }
}

function createCLI(): CLIOptions {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  program.version(require('../../package.json').version);

  program
    .option('-d, --app-dir <string>', 'The name of the application directory')
    .option('-c:type, --component:type <function | class>', 'Generate a component type', 'function')
    .option('-c:name, --component:name <string>', 'Generate a component name', 'ComponentName')
    .option('-s, --style <css | scss>', 'Generate a style')
    .option('-r, --redux <thunk | saga>', 'Generate a redux state management');

  program.parse(process.argv);

  return program as any;
}

export { config, createCLI };
