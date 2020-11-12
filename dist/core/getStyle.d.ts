import { ComponentOptions } from '../types/ComponentOptions';
export declare type GetStyleParam = ComponentOptions['style'];
declare function getStyle(style: GetStyleParam): "css" | "scss" | "react-native" | "";
export default getStyle;
