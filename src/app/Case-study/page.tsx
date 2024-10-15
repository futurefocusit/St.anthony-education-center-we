"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import shape from "../../assets/shape12.png";
import status from "../../assets/status.png";
import { useAppContext } from "@/context/appContext";
import axios from "axios";
import { Project } from "@/lib/types";
import { BASE_URL } from "@/context/api";

const CardList: React.FC = () => {
  const { theme } = useAppContext();
  const [, setIsLoadingPortifolio] = useState(false);
  const [portfolio, setPortfolio] = useState<Project[]>([]);

  const fetchData = async (
    endpoint: string,
    //@ts-expect-error error
    setStateFunc: React.Dispatch<React.SetStateAction<>>,
    setLoadingFunc: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoadingFunc(true);
      const response = await axios.get(`${BASE_URL}/${endpoint}`);
      setStateFunc(response.data);
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
    } finally {
      setLoadingFunc(false);
    }
  };

  useEffect(() => {
    fetchData("project", setPortfolio, setIsLoadingPortifolio);
  }, []);

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-800  text-white"
          : "bg-white text-gray-300 4"
      } pt-60 `}
    >
      <div
        className={`${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        } min-h-screen flex flex-col justify-start pt-10`}
      >
        {portfolio.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 w-full max-w-4xl  flex-grow "
          >
            <div className="flex flex-col items-center md:items-start lg:items-start md:flex-row px-5 md:px-10 mb-8 gap-10">
              <div className="flex flex-col">
                <div className="bg-slate-300 min-w-[380px] h-[320px] md:max-w-[400px] lg:max-w-[450px] overflow-hidden rounded-lg shadow-xl relative flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105">
                  <Image
                    src={project.Image}
                    alt={project.title}
                    width={450}
                    className="md:h-full md:w-full w-full h-full object-cover clip-custom-shape"
                  />
                </div>

                <div className="flex gap-2 mt-2 md:mt-4">
                  <Image src={shape} alt="shape image" width={5} />
                  <p className="text-[10px] font-light text-gray-600 italic">
                    Uploaded on:{""}
                    <span className="font-bold text-[#1abc9c] transition-all duration-300 ease-in-out hover:text-black">
                      {new Date(project.createdAt).toLocaleTimeString()}
                    </span>
                  </p>
                </div>
              </div>
              <div className="pt-4 flex flex-col items-center md:items-start md:pl-6 min-w-[300px]">
                <h1
                  className={`font-merriweather mt-3 font-bold text-[20px] md:text-[24px] lg:text-[30px] text-[#1B396E] ${
                    theme === "dark" ? "text-teal-600" : "text-[#1B396E]"
                  }`}
                >
                  {project.title}
                </h1>
                <div className="relative flex flex-row cursor-pointer mt-2 md:mt-4 transition-all duration-300 ease-in-out group">
                  <Image
                    src={status}
                    alt="loading status"
                    width={30}
                    className="mt-1"
                  />
                  <p className="text-black font-semibold pl-2 hover:text-[#1abc9c]">
                    {project.company}
                  </p>
                </div>

                <div className="mt-4  text-black flex flex-col items-center md:items-start">
                  <h1 className="font-roboto text-xl font-bold pb-2">
                    Project Summary
                  </h1>
                  <p
                    className={`${
                      theme === "dark" ? "text-black" : "text-white"
                    }`}
                  >
                    {project.content}
                  </p>
                </div>
              </div>
            </div>

            {/* Add more Card components as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
