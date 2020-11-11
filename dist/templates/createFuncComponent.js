"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createFuncComponent = ({ name, ts = false, rn = false, style = '' }) => `
import React, { FC } from 'react';${rn ? `\nimport { View, Text } from 'react-native';` : ''}${!!style ? `\nimport styles from './${name}.module.${style}';` : ''}${ts ? `\n\nexport interface ${name}Props {}` : ''}

const ${name}${ts ? `: FC<${name}Props>` : ''} = () => {
  return (
    ${rn ? `<View><Text>${name}</Text></View>` : `<div>${name}</div>`}
  )
}

export default ${name};
`;
exports.default = createFuncComponent;
