export interface ConfigTemplates {
  styles: string;
  actions: string;
  reducers: string;
  sagas: string;
  thunks: string;
}

export interface Config {
  appDir: string;
  typescript: boolean;
  reactNative: boolean;
  templates: ConfigTemplates;
}
