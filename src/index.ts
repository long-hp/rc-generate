import path from 'path';
import writeFileStyle from './core/writeFileStyle';
import writeFileClassComponent from './core/writeFileClassComponent';
import writeFileRedux from './core/writeFileRedux';
import { createCLI, createConfig } from './core/cli';
import log from './core/log';

const config = createConfig();
const cliOption = createCLI();
const folderComponent = path.resolve(process.cwd(), config.baseUrl, cliOption['component:name']);

async function init() {
  log('\n🚀  Generating...\n');
  await writeFileClassComponent(cliOption, folderComponent, config);
  await writeFileStyle(cliOption, folderComponent, config);
  await writeFileRedux(cliOption, folderComponent, config);
  log(`✅  ${cliOption['component:name']} generate successfully\n`, 32);
}

init();
