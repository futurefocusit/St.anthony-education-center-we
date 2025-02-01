"use client";
import { useAppContext } from "@/context/appContext";
import React from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";

const LanguageThemeSwitcher = () => {
  const { language, theme, toggleLanguage, toggleTheme } = useAppContext();

  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-2">
        <button
          onClick={() => toggleLanguage("en")}
          className={`flex items-center p-2 rounded border ${
            language === "en" ? "bg-gray-200" : "border-gray-300"
          }`}
        >
          <span role="img" aria-label="English" className="mr-2">
            EN
          </span>
        </button>
        <button
          onClick={() => toggleLanguage("fr")}
          className={`flex items-center p-2 rounded border ${
            language === "fr" ? "bg-gray-200" : "border-gray-300"
          }`}
        >
          <span role="img" aria-label="Français" className="mr-2">
            FR
          </span>
        </button>
      </div>

      {/* Theme Switcher */}
      <div className="flex gap-2">
        <button
          onClick={() => toggleTheme("light")}
          className={`flex items-center p-2 rounded border ${
            theme === "dark" ? "bg-black" : "border-gray-300"
          }`}
        >
          <FaSun
            size={20}
            className={`${theme === "dark" ? "text-gray-300" : "text-black"} `}
          />
        </button>
        <button
          onClick={() => toggleTheme("dark")}
          className={`flex items-center p-2 rounded border ${
            theme === "dark" ? "bg-gray-200" : "border-gray-300 bg-black"
          }`}
        >
          <FaMoon
            size={20}
            className={`${
              theme === "dark" ? "text-black" : "text-gray-300"
            } `}
          />
        </button>
      </div>
    </div>
  );
};

export default LanguageThemeSwitcher;
