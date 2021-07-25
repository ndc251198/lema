//i18n-setup.js
import Vue from "vue";
import VueI18n from "vue-i18n";
import axios from "axios";
import vi from "./vi";
import en from "./en";

Vue.use(VueI18n);

declare type language = "vi" | "en";

const messages = {
  en,
  vi
}

export const i18n = new VueI18n({
  locale: "vi", // set locale
  fallbackLocale: "vi",
  messages
});

const loadedLanguages = ["vi"]; // our default language that is preloaded

function setI18nLanguage(lang: language) {
  i18n.locale = lang;
  axios.defaults.headers.common["Accept-Language"] = lang;
  document!.querySelector("html")!.setAttribute("lang", lang);
  return lang;
}

export function loadLanguageAsync(lang: language) {
  // If the same language
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang));
  }

  // If the language was already loaded
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang));
  }

  // If the language hasn't been loaded yet
  return import(`@/i18n/${lang}/index.ts`).then((messages) => {
    i18n.setLocaleMessage(lang, messages.default);
    loadedLanguages.push(lang);
    return setI18nLanguage(lang);
  });
}
