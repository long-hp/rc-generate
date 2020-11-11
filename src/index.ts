import path from 'path';
import writeFileStyle from './core/writeFileStyle';
import writeFileClassComponent from './core/writeFileClassComponent';
import writeFileRedux from './core/writeFileRedux';
import { createCLI, config } from './core/cli';
import log from './core/log';

const cliOption = createCLI();
const folderComponent = path.resolve('src', cliOption['component:name']);

function init() {
  log('\n🚀  Generating...\n');
  writeFileClassComponent(cliOption, folderComponent, config);
  writeFileStyle(cliOption, folderComponent);
  writeFileRedux(cliOption, folderComponent, config);
  log(`✅  ${cliOption['component:name']} generate successfully\n`, 32);
}

init();
