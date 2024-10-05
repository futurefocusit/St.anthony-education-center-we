"use client";
import Image from "next/image";
import { Team } from "@/types/types";
import House from "../../Images/House.jpeg";
import myImage from "../../Images/myImage.jpeg";
import Values from "../../Images/Values.jpg";
import { useAppContext } from "@/context/appContext";
import { useEffect, useState } from "react";
import { AboutUsLang } from "@/lib/languageAbout";
import axios from "axios";
import { BASE_URL } from "../page";
import { SkeletonTeam } from "@/components/skeletons/cardSkeleton";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
const Aboutus = () => {
    const { language, theme } = useAppContext();
  const [team, setTeam] = useState<Team[]>([]);
  const [isLoadingTeam, setIsLoadingTeam] = useState(false);

 const fetchData = async (
   endpoint: string,
   setStateFunc: React.Dispatch<React.SetStateAction<any>>,
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
  fetchData("team", setTeam, setIsLoadingTeam);
}, []);
  return (
    <div
      className={`relative mt-[-2em] ${theme === "dark" ? "bg-slate-700" : ""}`}
    >
      <section
        className=" h-auto relative -top-36  pt-32 pb-32 -mb-32 lg:pl-[50px]  pl-[5px] "
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" h-auto pt-16 pb-3 ">
          <h2
            className={`${
              theme === "dark" ? "text-teal-500" : "text-[#1B396E]"
            } pt-10 pl-10 text-6xl`}
          >
            {AboutUsLang[language].title}
          </h2>
          <p
            className={`${
              theme === "dark" ? "text-teal-500" : "text-[#1B396E]"
            } pt-10 pl-10 text-2xl`}
          >
            {AboutUsLang[language].subtitle}
          </p>
        </div>
      </section>

      <div className="w-[100%] h-full max-md:w-[100%] max-md:px-5  mx-auto px-20  ">
        {/* About section content */}

        <h1
          className={` ${
            theme === "dark" ? "text-teal-500" : "text-[#1B396E]"
          } font-merriweather text-10px text-2xl pb-3`}
        >
          {AboutUsLang[language].story}
        </h1>
        <p
          className={`${
            theme === "dark" ? "text-teal-500" : "text-[#1B396E]"
          } font-merriweather pb-3 text-sm `}
        >
          {AboutUsLang[language].storyDescription}
        </p>

        <section className="flex flex-row gap-5   max-sm:flex-col max-md:pl-0 ">
          <Image
            className="max-sm:w-[400px]"
            src={myImage}
            alt="My Image"
            width={300}
            height={300}
          />
          <div>
            <h1
              className={` ${
                theme === "dark" ? "text-teal-500" : "text-[#1B396E]"
              } font-merriweather text-xl `}
            >
              {AboutUsLang[language].backgroundTitle}
            </h1>
            <p
              className={`${
                theme === "dark" ? "text-gray-200" : "text-black"
              } pt-3 font-roboto`}
            >
              {AboutUsLang[language].backgroundDescription}
            </p>
          </div>
        </section>

        <section className="flex flex-row max-sm:flex-col-reverse ">
          <div>
            <h1
              className={`${
                theme === "dark" ? "text-teal-500" : "text-[#1B396E]"
              } font-merriweather text-xl pt-3`}
            >
              {AboutUsLang[language].missionTitle}
            </h1>
            <p
              className={`${
                theme === "dark" ? "text-gray-200" : "text-black"
              } pt-3 font-roboto`}
            >
              {AboutUsLang[language].missionDescription}
            </p>
          </div>
          <div>
            <Image
              className=" rotate-[25deg] max-md:rotate-0"
              src={House}
              alt="My Image"
              width={400}
              height={300}
            />
          </div>
        </section>

        <section className="flex flex-row gap-5 max-sm:flex-col mt-0 ">
          <Image
            className="max-sm:w-[400px]"
            src={Values}
            alt="My Image"
            width={300}
            height={300}
          />
          <div>
            <h1
              className={` ${
                theme === "dark" ? "text-teal-500" : "text-[#1B396E]"
              } font-merriweather text-xl `}
            >
              {AboutUsLang[language].valuesTitle}
            </h1>
            <p
              className={`${
                theme === "dark" ? "text-gray-200" : "text-black"
              } pt-3 font-roboto`}
            >
              {AboutUsLang[language].valuesDescription}
            </p>
          </div>
        </section>

        <section className=" max-md:p-0 p-5 mt-3">
          <h1
            className={` ${
              theme === "dark" ? "text-teal-500" : "text-[#1B396E]"
            }  font-merriweather text-center  text-2xl py-4`}
          >
            {AboutUsLang[language].meetTeamTitle}
          </h1>
          <>
            {isLoadingTeam ? (
              SkeletonTeam
            ) : (
              <div className="flex card-holder  justify-center items-center gap-6 w-full md:w-[600px] lg:w-[1000px] m-auto">
                {team && team.length > 0
                  ? team.map((member, index) => (
                      <div
                        key={index}
                        className="bg-[#D9D9D9] min-w-fit h-fit pb-5 transform transition duration-300 hover:scale-105"
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          width={90}
                          height={90}
                          className="w-full h-32 object-cover"
                        />
                        <h2 className="font-bold text-[24px] text-[#1B396E]  text-center">
                          {member.role}
                        </h2>
                        <p className="text-[28px] p-2 text-[#49454F] text-center">
                          {member.name}
                        </p>
                        <div className="flex items-center justify-center gap-[2px]">
                          <a href={member.linkedInProfile || "###"}>
                            <LiaLinkedinIn className="w-3 h-3" />
                          </a>
                          <a href={member.instagramProfile || "###"}>
                            <FaInstagram className="w-3 h-3 " />
                          </a>
                          <a href={member.twiterProfile || "###"}>
                            <FaTwitter className="w-3 h-3" />
                          </a>
                          {/* <link href={member.f}>
                <FaFacebook className="w-3 h-3 " />
                </link> */}
                        </div>
                      </div>
                    ))
                  : "no team info available "}
              </div>
            )}
          </>
        </section>
      </div>
    </div>
  );
};

export default Aboutus;
