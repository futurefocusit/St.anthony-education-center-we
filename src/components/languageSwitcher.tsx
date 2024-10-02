'use client'
import { useAppContext } from "@/context/appContext";
import React from "react";;

const LanguageThemeSwitcher = () => {
  const { language, theme, toggleLanguage, toggleTheme } = useAppContext();

  return (
    <div className="flex items-center gap-4">
      <select
        value={language}
        onChange={() => toggleLanguage()}
        className={`px-4 py-2 rounded border ${
          theme === "dark" ? "border-gray-300 text-black" : "border-gray-300 "
        }`}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>

      <select
        value={theme}
        onChange={() => toggleTheme()}
        className={`px-4 py-2 rounded border ${
          theme === "dark" ? "border-gray-300 text-black" : "border-gray-300 "
        }`}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

export default LanguageThemeSwitcher;
