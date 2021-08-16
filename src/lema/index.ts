import Vue from "vue";
import LemaVue from "./lema";
import { config } from "./plugins/configuration";

Vue.use(LemaVue, {});

export const Configuration = config;