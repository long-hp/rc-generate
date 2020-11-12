import { ComponentOptions } from '../types/ComponentOptions';
import { importStyles } from './importStyles';

const createFuncComponent = ({ name, ts = false, rn = false, style = '' }: ComponentOptions) =>
  `
import React, { FC } from 'react';${rn ? `\nimport { View, Text } from 'react-native';` : ''}${importStyles({ name, rn, style })}${
    ts ? `\n\nexport interface ${name}Props {}` : ''
  }

const ${name}${ts ? `: FC<${name}Props>` : ''} = () => {
  return (
    ${rn ? `<View><Text>${name}</Text></View>` : `<div>${name}</div>`}
  )
}

export default ${name};
`.trim();

export default createFuncComponent;
