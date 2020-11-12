import { ComponentOptions } from '../types/ComponentOptions';

export type GetStyleParam = ComponentOptions['style'];

function getStyle(style: GetStyleParam) {
  switch (style) {
    case 'css':
      return 'css';
    case 'scss':
      return 'scss';
    case 'react-native':
      return 'react-native';
    default:
      return '';
  }
}

export default getStyle;
