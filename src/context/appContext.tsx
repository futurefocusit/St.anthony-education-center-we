"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useMemo,
} from "react";

type Language = "en" | "fr";
type Theme = "light" | "dark";

interface AppContextType {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
  language: Language;
  theme: Theme;
  toggleLanguage: (lang: Language) => void;
  toggleTheme: (theme: Theme) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("lang") as Language) || "en";
    }
    return "en";
  });
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as Theme) || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.className = theme;
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", language);
    }
  }, [language]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      document.body.className = theme;
    }
  }, [theme]);

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const toggleTheme = (theme: Theme) => {
    setTheme(theme);
  };

  const contextValue = useMemo(
    () => ({
      value,
      setValue,
      user,
      setUser,
      language,
      theme,
      toggleLanguage,
      toggleTheme,
    }),
    [value, user, language, theme]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
