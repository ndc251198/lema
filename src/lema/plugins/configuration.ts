import { LemaPlugin } from "../install";
import { LooseDictionary } from "../type";


export class Configuration {
  private _config: LooseDictionary;

  private static _instance: Configuration;


  private constructor() {
    this._config = {};
  }

  public static getInstance() {
    if (!this._instance) {
      this._instance = new Configuration();
    }

    return this._instance;
  }

  public setConfig(config: object): void {
    this._config = config;
  }

  public getConfig<T>(key: string): T | null {
    let data = null;
    try {
      const split = key.split(".");
      if (this._config && Object.prototype.hasOwnProperty.call(this._config, split[0])) {
        data = this._config[split[0]];
        for (let i = 0; i < split.length; i++) {
          data = split[i];
        }
      }
    } catch (error) {
      console.error(error);
      data = null;
    }
    return data;
  }
}

export const config = Configuration.getInstance();

export default {
  install(param) {
    param.$lema.config = config
  }
} as LemaPlugin