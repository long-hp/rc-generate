import { ComponentOptions } from '../types/ComponentOptions';

const createClassComponent = ({ name, ts = false, rn = false, style = '' }: ComponentOptions) => `import React, { Component } from 'react';${
  rn ? `\nimport { View, Text } from 'react-native';` : ''
}${!!style ? `\nimport styles from './${name}.module.${style}';` : ''}${ts ? `\n\nexport interface ${name}Props {}` : ''}

export default class ${name} extends Component${ts ? `<${name}Props>` : ''} {
  constructor(props${ts ? `: ${name}Props` : ''}) {
    super(props);
    this.state = {}
  }

  ${ts ? 'public' : ''} render() {
    return (
      ${rn ? `<View><Text>${name}</Text></View>` : `<div>${name}</div>`}
    )
  }
}
`;

export default createClassComponent;
