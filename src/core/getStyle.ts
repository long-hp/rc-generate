import { ComponentOptions } from '../types/ComponentOptions';

export type GetStyleParam = ComponentOptions['style'];

function getStyle(style: GetStyleParam) {
  switch (style) {
    case 'css':
      return 'css';
    case 'scss':
      return 'scss';
    default:
      return '';
  }
}

export default getStyle;
