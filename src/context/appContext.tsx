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
import axios from "axios";
import { BASE_URL } from "./api";

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
  acceptCookies: () => void;
  sendStatistics: (page: string) => void;
  hasAcceptedCookies: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("light");
  const [hasAcceptedCookies, setHasAcceptedCookies] = useState<boolean>(false);

  useEffect(() => {
  
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("lang") as Language;
      const storedTheme = localStorage.getItem("theme") as Theme;
      const acceptedCookies = localStorage.getItem("acceptedCookies");

      setLanguage(storedLanguage || "en");
      setTheme(storedTheme || "light");
      setHasAcceptedCookies(!!acceptedCookies);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.className = theme;
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", language);
    }
  }, [language]);

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const toggleTheme = (theme: Theme) => {
    setTheme(theme);
  };

  const acceptCookies = () => {
    setHasAcceptedCookies(true);
    if (typeof window !== "undefined") {
      localStorage.setItem("acceptedCookies", "true");
    }
  };

  const sendStatistics = async (page: string) => {
    if (!hasAcceptedCookies) return;

    try {
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const { ip } = await ipResponse.json();

      const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
      const locationData = await locationResponse.json();
      const { city, country } = locationData;

      await axios.post(`${BASE_URL}/statistics`, {
        page,
        location: `${city}, ${country}`,
        language,
        theme,
      });
    } catch (error) {
      console.error("Error sending statistics:", error);
    }
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
      acceptCookies,
      sendStatistics,
      hasAcceptedCookies,
    }),
    [value, user, language, theme, hasAcceptedCookies]
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
