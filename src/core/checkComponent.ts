import createClassComponent from '../templates/createClassComponent';
import createFuncComponent from '../templates/createFuncComponent';
import { CLIOptions } from '../types/CLIOptions';
import { ComponentOptions } from '../types/ComponentOptions';
import { Config } from '../types/Config';
import getStyle from './getStyle';

function checkComponent(cliOption: CLIOptions, config: Config) {
  const options: ComponentOptions = {
    name: cliOption['component:name'].replace(/^.*\//g, ''),
    rn: config.reactNative,
    ts: config.typescript,
    style: getStyle(cliOption.style),
  };
  switch (cliOption['component:type']) {
    case 'function':
      return createFuncComponent(options);
    case 'class':
    default:
      return createClassComponent(options);
  }
}

export default checkComponent;
