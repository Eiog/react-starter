/// <reference types="vite/client" />

declare module '*.md' {
  import type { ComponentOptions } from 'vue';
  const Component: ComponentOptions;
  export default Component;
}
// 声明 vite 环境变量
declare interface ImportMetaEnv {
  readonly VITE_BASE: string;
  readonly VITE_API_BASEURL: string;
  readonly VITE_APP_TITLE: string;
  readonly VITE_DEV_PORT: number;
  // 更多环境变量...
}
