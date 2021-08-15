import { extend } from "quasar";

declare global {
  interface ObjectConstructor {
    clone<T>(source: T, deep?: boolean): T;

    extend<T>(source: T, ...target: any[]): T;
  }
}

Object.clone = function(source, deep = true) {
  if (source) {
    return extend(deep, {}, source);
  }
  return source;
};


Object.extend = function(source, ...targets) {
  if(targets && targets.length) {
    return extend(true, source, ...targets);
  }
  else {
    return source;
  }
}