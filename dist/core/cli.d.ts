import { CLIOptions } from '../types/CLIOptions';
import { Config } from '../types/Config';
declare let config: Config;
declare function createCLI(): CLIOptions;
export { config, createCLI };
