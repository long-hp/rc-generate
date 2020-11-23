export interface ConfigTemplates {
  styles: string;
  actions: string;
  reducers: string;
  sagas: string;
  thunks: string;
  componentContent: string;
}

export interface Config {
  baseUrl: string;
  typescript: boolean;
  reactNative: boolean;
  templates: ConfigTemplates;
}
