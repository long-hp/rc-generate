import { ComponentOptions } from '../types/ComponentOptions';

export const importStyles = ({ rn, style, name }: ComponentOptions) => {
  return !!style ? `\nimport styles from './${rn && style === 'react-native' ? `styles` : `${name}.module.${style}`}';` : '';
};
