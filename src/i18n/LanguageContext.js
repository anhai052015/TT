import { createContext, useContext, useState } from "react";
import translations from "./translations";

const LanguageContext = createContext();

const LANG_OPTIONS = [
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
];

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("vi");

  const t = (key, params) => {
    let text = translations[language]?.[key] || translations.vi[key] || key;
    if (params) {
      Object.keys(params).forEach((k) => {
        text = text.replace(`{{${k}}}`, params[k]);
      });
    }
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, LANG_OPTIONS }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
