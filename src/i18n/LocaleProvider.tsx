"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import en from "./en.json";
import ar from "./ar.json";

const LOCALES = { en, ar };
const DEFAULT = "en";

const LocaleContext = createContext({
  locale: DEFAULT,
  setLocale: (_l) => {},
  t: (k) => k,
});

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    try {
      return localStorage.getItem("ionic_locale") || DEFAULT;
    } catch {
      return DEFAULT;
    }
  });

  // ✅ Nested key resolver (supports hero.projects.project1)
  const t = (key) => {
    const pack = LOCALES[locale] || LOCALES[DEFAULT];
    return key.split(".").reduce((obj, part) => obj?.[part], pack) ?? key;
  };

  const setLocale = (l) => {
    if (!LOCALES[l]) return;
    setLocaleState(l);
    try {
      localStorage.setItem("ionic_locale", l);
    } catch {}
    document.documentElement.lang = l === "ar" ? "ar" : "en";
    document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
    if (l === "ar") {
      document.documentElement.classList.add("lang-ar");
      document.documentElement.classList.remove("lang-en");
    } else {
      document.documentElement.classList.add("lang-en");
      document.documentElement.classList.remove("lang-ar");
    }
  };

  useEffect(() => {
    setLocale(locale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
