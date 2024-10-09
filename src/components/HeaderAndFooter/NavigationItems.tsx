"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";
import { NavigationItem, NavigationItemsRoutes } from "./constant";
import { useAppContext } from "@/context/appContext";

const NavigationItems = () => {
  const [showMenuItems, setShowMenuItems] = useState(false);
  const pathname = usePathname();
  const { language } = useAppContext();

  return (
    <>
      <div className="flex lg:hidden">
        <button
          className="text-3xl"
          onClick={() => setShowMenuItems((prev) => !prev)}
        >
          <IoMenu />
        </button>
      </div>
      <div className="hidden lg:flex items-center gap-5 font-bold border-r-[3px] border-blue-500 pr-5">
        {NavigationItemsRoutes.map((navigation) => {
          const isActive =
            pathname === navigation.path ||
            pathname.startsWith(`${navigation.path}/`);
          return (
            <Link
              href={navigation.path}
              key={navigation.path}
              className={
                isActive
                  ? "underline underline-offset-8 text-blue-600"
                  : "hover:text-blue-600"
              }
            >
              <p>{navigation[language as keyof NavigationItem]}</p>
            </Link>
          );
        })}
        <Link
          href="/reportIncident"
          className="bg-blue-600 hover:bg-blue-700 hover:rounded-lg text-white px-2 py-2 cursor-pointer"
        >
          {language === "en" ? "Report Incident" : "Signaler un incident"}
        </Link>
      </div>
      {showMenuItems && (
        <div
          className={
            "flex lg:hidden absolute bg-black/15 left-0 h-full w-full top-0 transition-all duration-75 ease-linear popup"
          }
        >
          <div
            className={
              "w-fit bg-white px-[50px] py-20 h-screen overflow-y-auto flex flex-col gap-8"
            }
          >
            <button
              className="text-3xl ml-[10rem]"
              onClick={() => setShowMenuItems((prev) => !prev)}
            >
              <MdClose className="text-black" />
            </button>
            {NavigationItemsRoutes.map((navigation) => {
              const isActive =
                pathname === navigation.path ||
                pathname.startsWith(`${navigation.path}/`);
              return (
                <Link
                  href={navigation.path}
                  key={navigation.path}
                  className={
                    isActive
                      ? "underline underline-offset-8 text-blue-700"
                      : "hover:text-blue-700 text-black"
                  }
                >
                  <p>{navigation[language as keyof NavigationItem]}</p>
                </Link>
              );
            })}
            <Link
              href="/reportIncident"
              className="bg-blue-600 text-white px-2 py-2 cursor-pointer"
            >
              {language === "en" ? "Report Incident" : "Signaler un incident"}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationItems;
