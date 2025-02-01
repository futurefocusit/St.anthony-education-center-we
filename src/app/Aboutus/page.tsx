"use client";
import Image from "next/image";
import House from "../../Images/House.jpeg";
import myImage from "../../Images/myImage.jpeg";
import Values from "../../Images/Values.jpg";
import { useAppContext } from "@/context/appContext";
import { AboutUsLang } from "@/lib/languageAbout";

const Aboutus = () => {
  const { language, theme } = useAppContext();

 


  return (
    <div className={`${theme === "dark" ? "bg-slate-700" : "bg-white"} pb-10`}>
      <section
        className="relative pt-52 pb-32"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center pt-12 pb-3">
          <h2
            className={`text-6xl ${
              theme === "dark" ? "text-teal-500" : "text-[#1B396E]"
            }`}
          >
            {AboutUsLang[language].title}
          </h2>
          <p
            className={`text-2xl ${
              theme === "dark" ? "text-teal-500" : "text-[#1B396E]"
            }`}
          >
            {AboutUsLang[language].subtitle}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5">
        <section className="flex flex-col md:flex-row gap-5 my-10 items-start">
          <Image
            className="w-full md:w-[300px]"
            src={myImage}
            alt="My Image"
            width={300}
            height={300}
          />
          <div className="flex flex-col">
            <h1
              className={`font-merriweather text-xl ${
                theme === "dark" ? "text-teal-500" : "text-[#1B396E]"
              }`}
            >
              <span className="whitespace-nowrap">
                {AboutUsLang[language].visionTitle}
              </span>
            </h1>
            <p
              className={`pt-3 font-roboto ${
                theme === "dark" ? "text-gray-200" : "text-black"
              }`}
            >
              {AboutUsLang[language].visionDescription}
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-5 my-10 items-start">
          <Image
            className="w-full md:w-[400px]"
            src={House}
            alt="House Image"
            width={400}
            height={300}
          />
          <div className="flex flex-col">
            <h1
              className={`font-merriweather text-xl pt-3 ${
                theme === "dark" ? "text-teal-500" : "text-[#1B396E]"
              }`}
            >
              <span className="whitespace-nowrap">
                {AboutUsLang[language].missionTitle}
              </span>
            </h1>
            <p
              className={`pt-3 font-roboto ${
                theme === "dark" ? "text-gray-200" : "text-black"
              }`}
            >
              {AboutUsLang[language].missionDescription}
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-5 my-10 items-start">
          <Image
            className="w-full md:w-[300px]"
            src={Values}
            alt="Values Image"
            width={300}
            height={300}
          />
          <div className="flex flex-col">
            <h1
              className={`font-merriweather text-xl ${
                theme === "dark" ? "text-teal-500" : "text-[#1B396E]"
              }`}
            >
              <span className="whitespace-nowrap">
                {AboutUsLang[language].valuesTitle}
              </span>
            </h1>
            <ul
              className={`pt-3 font-roboto ${
                theme === "dark" ? "text-gray-200" : "text-black"
              }`}
            >
              {AboutUsLang[language].valuesDescription.map((value, index) => (
                <li key={value.title} className="block">
                  <span>{index + 1}. </span>
                  <strong className="font-bold ">{value.title}:</strong>
                  <span className="ml-1 block">{value.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-5 my-10 items-start">
          <Image
            className="w-full md:w-[300px]"
            src={Values}
            alt="Values Image"
            width={300}
            height={300}
          />
          <div className="flex flex-col">
            <h1
              className={`font-merriweather text-xl ${
                theme === "dark" ? "text-teal-500" : "text-[#1B396E]"
              }`}
            >
              <span className="whitespace-nowrap">
                {AboutUsLang[language].objectiveTitle}
              </span>
            </h1>
            <ul
              className={`pt-3 font-roboto ${
                theme === "dark" ? "text-gray-200" : "text-black"
              }`}
            >
              {AboutUsLang[language].objectiveDescription.map(
                (value, index) => (
                  <li key={value.title} className="block">
                    <span>{index + 1}. </span>
                    <strong className="font-bold">{value.title}:</strong>
                    <span className="ml-1 block">{value.desc}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </section>
     
  

      </div>
    </div>
  );
};

export default Aboutus;
