import path from 'path';
import fs from 'fs-extra';
import { CLIOptions } from 'types/CLIOptions';
import { Config } from 'types/Config';

const content = (componentName: string, isRedux: boolean) =>
  isRedux
    ? `
import ${componentName} from './${componentName}';

// eslint-disable-next-line
export type { ${componentName}Props } from './${componentName}';
export { ${componentName} };
`
    : `
export { default } from './${componentName}';
// eslint-disable-next-line
export type { ${componentName}Props } from './${componentName}';

`;

async function writeFileIndex(cliOption: CLIOptions, folderComponent: string, config: Config) {
  try {
    const componentName = `${cliOption['component:name'].replace(/^.*\//g, '')}`;
    await fs.outputFile(path.resolve(folderComponent, `index.${config.typescript ? 'ts' : 'js'}`), content(componentName, !!cliOption.redux).trim());
  } catch (err) {
    console.log(err);
  }
}

export default writeFileIndex;
