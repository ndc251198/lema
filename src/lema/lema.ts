import { PluginObject } from "vue";
import LemaInstall from "./install";
import plugins from "./plugins";
import directives from './directives'

export interface LemaConfig {
  [key: string]: any;
}

export default {
  install(Vue, opts) {
    LemaInstall(Vue, {
      directives,
      plugins,
      config: opts
    })
  }
} as PluginObject<LemaConfig>
