import path from 'path';
import fs from 'fs-extra';
import { CLIOptions } from 'types/CLIOptions';
import { Config } from 'types/Config';
import checkComponent from './checkComponent';

async function writeFileClassComponent(cliOption: CLIOptions, folderComponent: string, config: Config) {
  try {
    await fs.outputFile(
      path.resolve(folderComponent, `${cliOption['component:name'].replace(/^.*\//g, '')}.${config.typescript ? 'tsx' : 'jsx'}`),
      checkComponent(cliOption, config),
    );
  } catch (err) {
    console.log(err);
  }
}

export default writeFileClassComponent;
