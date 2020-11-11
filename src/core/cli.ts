import { program } from 'commander';
import { CLIOptions } from '../types/CLIOptions';
import { Config } from '../types/Config';

const isDev = process.env.NODE_ENV === 'dev';

let config: Config = {
  appDir: 'src',
  typescript: true,
  reactNative: false,
};
if (!isDev) {
  // eslint-disable-next-line
  config = require('../../../../package.json')['rc-generate'];
}

function createCLI(): CLIOptions {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  program.version(require('../../package.json').version);

  program
    .option('-d, --appDir <string>', 'The name of the application directory')
    .option('-c:type, --component:type <function | class>', 'Generate a component type', 'function')
    .option('-c:name, --component:name <string>', 'Generate a component name', 'ComponentName')
    .option('-s, --style <css | scss>', 'Generate a style')
    .option('-r, --redux <thunk | saga>', 'Generate a redux state management');

  program.parse(process.argv);

  return program as any;
}

export { config, createCLI };
