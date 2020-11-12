import path from 'path';
import fs from 'fs-extra';
import { Config } from 'types/Config';
import { CLIOptions } from '../types/CLIOptions';

async function writeFileStyle(cliOption: CLIOptions, folderComponent: string, config: Config) {
  try {
    if (cliOption.style === 'react-native') {
      await fs.outputFile(path.resolve(folderComponent, `styles.${config.typescript ? 'ts' : 'js'}`), config.templates.styles.trim());
    } else if (cliOption.style === 'scss') {
      await fs.outputFile(
        path.resolve(folderComponent, `${cliOption['component:name'].replace(/^.*\//g, '')}.module.scss`),
        config.templates.styles.trim(),
      );
    } else if (cliOption.style === 'css') {
      await fs.outputFile(
        path.resolve(folderComponent, `${cliOption['component:name'].replace(/^.*\//g, '')}.module.css`),
        config.templates.styles.trim(),
      );
    }
  } catch (err) {
    console.log(err);
  }
}

export default writeFileStyle;
