import React, { createContext, useContext, useState } from "react";

export interface LanguageOption {
  code: string;
  name: string;
  flag: string;
}

interface LanguageContextType {
  currentLang: string;
  setLanguage: (lang: string) => void;
  languages: LanguageOption[];
  t: (keyOrText: string) => string;
}

const DEFAULT_LANGUAGES: LanguageOption[] = [
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ca", name: "Català", flag: "🟡" },
  { code: "gl", name: "Galego", flag: "🔵" },
  { code: "eu", name: "Euskara", flag: "🟢" },
];

const LanguageContext = createContext<LanguageContextType>({
  currentLang: "es",
  setLanguage: () => {},
  languages: DEFAULT_LANGUAGES,
  t: (text) => text,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLang, setCurrentLang] = useState<string>(() => {
    try {
      return localStorage.getItem("dragopedia_lang") || "es";
    } catch {
      return "es";
    }
  });

  const setLanguage = (lang: string) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem("dragopedia_lang", lang);
    } catch {}
  };

  const t = (text: string) => text;

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage, languages: DEFAULT_LANGUAGES, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
