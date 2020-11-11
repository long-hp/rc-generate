import { ComponentOptions } from './ComponentOptions';
export interface CLIOptions {
    'component:name': string;
    'component:type': 'function' | 'class';
    appDir: string;
    style: ComponentOptions['style'];
    redux: 'thunk' | 'saga';
}
