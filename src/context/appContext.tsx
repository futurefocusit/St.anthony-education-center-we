"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface AppContextType {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
  language: string;
  theme: string;
  toggleLanguage: (lang: string) => void;
  toggleTheme: (theme: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");
  const [language, setLanguage] = useState<string>("en");
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    // Only access localStorage in the browser
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("lang");
      const savedTheme = localStorage.getItem("theme");

      if (savedLang) setLanguage(savedLang);
      if (savedTheme) setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", language);
    }
  }, [language]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      document.body.className = theme; // Apply theme to body class
    }
  }, [theme]);

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
  };

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <AppContext.Provider
      value={{
        value,
        setValue,
        user,
        setUser,
        language,
        theme,
        toggleLanguage,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
