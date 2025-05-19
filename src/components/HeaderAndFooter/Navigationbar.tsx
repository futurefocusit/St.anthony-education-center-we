"use client";
import React, { useEffect } from "react";
import Logo from "./Logo";
import NavigationItems from "./NavigationItems";
import LanguageSwitcher from "../languageSwitcher";
import { useAppContext } from "@/context/appContext";

const NavigationBar = () => {
  const { theme, sendStatistics, hasAcceptedCookies } = useAppContext();

  useEffect(() => {
    const page = window.location.pathname;
    if (hasAcceptedCookies) {
      sendStatistics(page);
    }
  }, [hasAcceptedCookies, sendStatistics]);

  return (
    <div className="w-full absolute z-50 ">
      <div
        className={`flex justify-between ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
        } m-7 rounded-[30px] lg:px-[100px] box-border shadow-xl`}
      >
        <Logo />
        <div className="flex items-center gap-5 m-5">
          <a className="bg-blue-500 p-2 text-white" href="https://forms.gle/dWpTzxWB4dydEJ9Q8">APPLY</a>
          <NavigationItems />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
