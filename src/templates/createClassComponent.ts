import { ComponentOptions } from '../types/ComponentOptions';
import { importStyles } from './importStyles';

const createClassComponent = ({ name, ts = false, rn = false, style = '', componentContent = '' }: ComponentOptions) =>
  `
import React, { Component } from 'react';${rn ? `\nimport { View, Text } from 'react-native';` : ''}${importStyles({ name, rn, style })}${
    ts ? `\n\nexport interface ${name}Props {}` : ''
  }

export default class ${name} extends Component${ts ? `<${name}Props>` : ''} {
  constructor(props${ts ? `: ${name}Props` : ''}) {
    super(props);
    this.state = {}
  }

  ${ts ? 'public' : ''} render() {
    return (
      ${!!componentContent ? componentContent : rn ? `<View><Text>${name}</Text></View>` : `<div>${name}</div>`}
    )
  }
}
`.trim();

export default createClassComponent;
