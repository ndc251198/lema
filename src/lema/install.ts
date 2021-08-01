import { DirectiveOptions } from "vue";
import { Vue as _Vue } from "vue/types/vue";
import { LemaConfig } from "./lema";
import { Configuration } from "./plugins/configuration";

export interface LemaVue {
  config: Configuration;

  [key: string]: any;
}

export interface LemaDirective extends DirectiveOptions {
  name: string;
}

export interface LemaPlugin {
  install(param: {$lema: LemaVue; cfg: LemaConfig}): void;
}

export interface LemaFilter {
  name: string;
  definition: Function | undefined;
}

export interface Config {
  directives: {
    [key: string]: LemaDirective;
  };

  plugins: { 
    [key: string]: LemaPlugin;
  };

  filters: {
    [key: string]: LemaFilter;
  };

  config: LemaConfig | undefined;
}

export default function(Vue: typeof _Vue, opts: Config) {
  const $lema = {} as LemaVue;

  const cfg = opts.config || {};

  if(opts.filters) {
    Object.keys(opts.filters).forEach(key => {
      const f = opts.filters[key];
      if (f.name !== undefined) {
        Vue.filter(f.name, f.definition);
      }
    })
  }

  opts.directives && Object.keys(opts.directives).forEach((key) => {
    const d = opts.directives[key];
    if (d.name !== undefined && d.unbind !== void 0) {
      Vue.directive(d.name, d);
    }
  });

  if (opts.plugins) {
    const param = { $lema, cfg };
    Object.keys(opts.plugins).forEach(key => {
      const p = opts.plugins[key];
      if (typeof p.install === 'function') {
        p.install(param);
      }
    })
  }

  Vue.prototype.$lema = $lema
}
