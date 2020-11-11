import path from 'path';
import fs from 'fs-extra';
import { CLIOptions } from '../types/CLIOptions';

async function writeFileStyle(cliOption: CLIOptions, folderComponent: string) {
  try {
    if (cliOption.style === 'scss') {
      await fs.outputFile(path.resolve(folderComponent, `${cliOption['component:name'].replace(/^.*\//g, '')}.module.scss`), '');
    }
    if (cliOption.style === 'css') {
      await fs.outputFile(path.resolve(folderComponent, `${cliOption['component:name'].replace(/^.*\//g, '')}.module.css`), '');
    }
  } catch (err) {
    console.log(err);
  }
}

export default writeFileStyle;
