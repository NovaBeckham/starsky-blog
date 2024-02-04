/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "*.min.js"
declare module "markdown-it"
declare module "markdown-it-katex-external"
declare module "markdown-it-emoji"
declare module "markdown-it-container"
declare module "markdown-it-sup"
declare module "markdown-it-sub"
declare module "markdown-it-footnote"
declare module "markdown-it-abbr"
declare module "markdown-it-ins"
declare module "markdown-it-mark"
declare module "markdown-it-katex"
interface ZhCN {
  [key: string]: any
}
