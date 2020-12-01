import path from 'path';
import writeFileIndex from './core/writeFileIndex';
import writeFileStyle from './core/writeFileStyle';
import writeFileComponent from './core/writeFileComponent';
import writeFileRedux from './core/writeFileRedux';
import { createCLI, createConfig } from './core/cli';
import log from './core/log';

const config = createConfig();
const cliOption = createCLI();
const folderComponent = path.resolve(process.cwd(), config.baseUrl, cliOption['component:name']);

async function init() {
  log('\n🚀  Generating...\n');
  await writeFileComponent(cliOption, folderComponent, config);
  await writeFileStyle(cliOption, folderComponent, config);
  await writeFileRedux(cliOption, folderComponent, config);
  if (config.createIndexFile) {
    await writeFileIndex(cliOption, folderComponent, config);
  }
  log(path.resolve(folderComponent, `${cliOption['component:name'].replace(/^.*\//g, '')}.${config.typescript ? 'tsx' : 'jsx'}\n`));
  log(`✅  Generate successfully\n`, 32);
}

init();
