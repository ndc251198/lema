import { DirectiveOptions } from "vue";
import { Vue as _Vue } from "vue/types/vue";
import { LemaConfig } from "./lema";

const $lema: LemaVue = {
  config: {},
};

export interface LemaVue {
  [key: string]: any;
}

export interface LemaDirective extends DirectiveOptions {
  name: string;
}

export interface LemaPlugin {
  install(param: {$lema: LemaVue; cfg: LemaConfig}): void;
}

export interface Config {
  directives: {
    [key: string]: LemaDirective;
  };

  plugins: {
    [key: string]: LemaPlugin;
  };

  config: LemaConfig | undefined;
}

export default function(Vue: typeof _Vue, opts: Config) {
  const cfg = $lema.config = opts.config || {};

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
}
