"use client";
import Image from "next/image";
import download from "../../Images/download.jpeg";
import MyImagee from "../../Images/MyImagee.jpeg";
import services from "../../Images/services.jpeg";
import Teach from "../../Images/Teach.jpg";
import Values from "../../Images/Values.jpg";
import { useAppContext } from "@/context/appContext";
import { ServicesLang } from "@/lib/languageService";

const Services = () => {
    const { language, theme } = useAppContext();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-slate-700" : ""
      } relative mt-[-2em] max-md:bg-[#b9bebd] max-lg:bg[#BEB9B9]  `}
    >
      <section
        className="  max-md:w-screen  h-auto relative -top-36  pt-32 pb-32 leading-10 -mb-32 lg:pl-[50px]  pl-[5px] "
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" h-auto pb-3 pt-16  max-md:w-full max-md:p-0  ">
          <h2
            className={`${
              theme === "dark" ? "text-teal-500" : "text-[#1B396E]"
            } max-md:text-4xl pt-10  max-md:pl-3 pl-10 text-6xl`}
          >
            {ServicesLang[language].title}
          </h2>
          <p
            className={` ${
              theme === "dark" ? "text-teal-500" : "text-[#1B396E]"
            } max-md:pl-3 pt-5 pl-10 text-2xl`}
          >
            {ServicesLang[language].description}
          </p>
        </div>
      </section>

      {/* training service section content*/}
      <section className="px-20 max-lg:px-5">
        <div className=" py-7 ">
          <h1 className="text-[#1B396E] max-md:ml-5 max-lg:ml-5 ml-[11em] font-merriweather  text-2xl pb-3">
            {ServicesLang[language].service1}
          </h1>
          <p className="text-[#1B396E] ml-[19em] font-merriweather pb-3 text-sm max-md:ml-5 max-lg:ml-5">
            {ServicesLang[language].service1_desc}
          </p>
        </div>

        <section className="flex flex-row gap-5 max-sm:flex-col max-lg:mx-14 max-md:mx-[-0.3em] max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black  max-lg:p-3 max-md:p-3 mt-3 ">
          <Image
            className="max-sm:w-[400px] max-md:p-3"
            src={Teach}
            alt="My Image"
            width={250}
            height={250}
          />
          <div>
            <h1 className="text-[#1B396E] font-merriweather max-md:p-3 text-[18px] ">
              {ServicesLang[language].subservice1service1}
            </h1>
            <p className="pt-2 font-roboto max-lg:font-sans max-md:p-3">
              {ServicesLang[language].subservice1service1_desc}
            </p>
            <div>
              <button className="bg-gradient-to-r max-md:ml-3  p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                {ServicesLang[language].viewmore}
              </button>
            </div>
          </div>
        </section>

        <section className="flex flex-row gap-5 max-sm:flex-col max-lg:mx-14  max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:mx-[-0.3em] max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3 ">
          <Image
            className="max-sm:w-[400px] max-md:p-3"
            src={download}
            alt="My Image"
            width={250}
            height={250}
          />
          <div>
            <h1 className="text-[#1B396E] max-lg:font-sans  max-md:p-3 font-merriweather text-[18px] ">
              {ServicesLang[language].subservice2service1}
            </h1>
            <p className="pt-2 font-roboto max-lg:font-sans  max-md:p-3">
              {ServicesLang[language].subservice2service1_desc}
            </p>
            <div>
              <button className="bg-gradient-to-r  max-md:ml-3 max-md:p-3 p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                {ServicesLang[language].viewmore}
              </button>
            </div>
          </div>
        </section>

        <section className="flex flex-row gap-5 max-sm:flex-col max-lg:mx-14 max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:mx-[-0.3em] max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3 ">
          <Image
            className="max-sm:w-[400px] max-md:p-3"
            src={download}
            alt="My Image"
            width={250}
            height={250}
          />
          <div>
            <h1 className="text-[#1B396E] max-md:p-3 font-merriweather text-[18px] max-lg:font-sans  ">
              {ServicesLang[language].subservice3service1}
            </h1>
            <p className="pt-2 font-roboto max-lg:font-sans  max-md:p-3">
              {ServicesLang[language].subservice3service1_desc}
            </p>
            <div>
              <button className="bg-gradient-to-r  max-md:ml-3  max-md:p-3 p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                {ServicesLang[language].viewmore}
              </button>
            </div>
          </div>
        </section>

        <section className="flex flex-row gap-5 max-sm:flex-col max-lg:mx-14  max-md:mx-[-0.3em] max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3 ">
          <Image
            className="max-sm:w-[400px] max-md:p-3"
            src={download}
            alt="My Image"
            width={250}
            height={250}
          />
          <div>
            <h1 className="text-[#1B396E] max-md:p-3 font-merriweather text-[18px] max-lg:font-sans  ">
              {ServicesLang[language].subservice4service1}
            </h1>
            <p className="pt-2 font-roboto max-lg:font-sans  max-md:p-3">
              {ServicesLang[language].subservice4service1_desc}
            </p>
            <div>
              <button className="bg-gradient-to-r  max-md:ml-3  max-md:p-3 p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                {ServicesLang[language].viewmore}
              </button>
            </div>
          </div>
        </section>
      </section>

      {/* Consultancy service section content */}

      <section className="flex flex-col px-20 max-lg:px-5 justify-start items-start pb-5 gap-4">
        <div className=" py-7 ">
          <h1 className="text-[#1B396E] font-merriweather text-10px text-2xl pb-3">
            {ServicesLang[language].service2}
          </h1>
          <p className="text-[#1B396E] font-merriweather pb-3 text-sm ">
            {ServicesLang[language].service2_desc}
          </p>
        </div>

        <div className="max-md:border-2 max-lg:border-2  max-md:border-black max-lg:w-[100%] max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3">
          <Image
            className="max-sm:w-[400px] max-md:p-3 "
            src={Values}
            alt="My Image"
            width={250}
            height={250}
          />
          <div>
            <h1 className="text-[#1ABC9C] font-merriweather pt-3 text-[18px] max-md:p-3  ">
              {ServicesLang[language].subservice1service2}
            </h1>
            <p className="pt-3 font-roboto max-lg:font-sans  max-md:p-3  ">
              {ServicesLang[language].subservice1service2_desc}
            </p>
            <div>
              <button className="bg-gradient-to-r max-md:ml-3  p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                {ServicesLang[language].viewmore}
              </button>
            </div>
          </div>
        </div>

        <div className="max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3">
          <Image
            className="max-sm:w-[400px]"
            src={MyImagee}
            alt="My Image"
            width={250}
            height={250}
          />
          <div>
            <h1 className="text-[#1ABC9C] font-merriweather pt-3 text-[18px] ">
              {ServicesLang[language].subservice2service2}
            </h1>
            <p className="pt-3 font-roboto max-lg:font-sans  ">
              {ServicesLang[language].subservice2service2_desc}
            </p>
            <div>
              <button className="bg-gradient-to-r  p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                {ServicesLang[language].viewmore}
              </button>
            </div>
          </div>
        </div>

        <div className="max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3">
          <Image
            className="max-sm:w-[400px]"
            src={MyImagee}
            alt="My Image"
            width={250}
            height={250}
          />
          <div>
            <h1 className="text-[#1ABC9C] font-merriweather pt-3 text-[18px] ">
              {ServicesLang[language].subservice3service2}
            </h1>
            <p className="pt-3 font-roboto max-lg:font-sans  ">
              {ServicesLang[language].subservice3service2_desc}
            </p>
            <div>
              <button className="bg-gradient-to-r  p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                {ServicesLang[language].viewmore}
              </button>
            </div>
          </div>
        </div>

        <div className="max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3 ">
          <Image
            className="max-sm:w-[400px] max-md:p-3 "
            src={Values}
            alt="My Image"
            width={250}
            height={250}
          />
          <div>
            <h1 className="text-[#1ABC9C] font-merriweather pt-3 text-[18px] max-md:p-3  ">
              {ServicesLang[language].subservice4service2}
            </h1>
            <p className="pt-3 font-roboto max-lg:font-sans  max-md:p-3  ">
              {ServicesLang[language].subservice4service2_desc}
            </p>
            <div>
              <button className="bg-gradient-to-r max-md:ml-3  p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                {ServicesLang[language].viewmore}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* installation CCTV cameras  service section content*/}
      <div className="w-[100%] h-full  max-md:bg-[#BEB9B9] max-lg:bg[#BEB9B9] px-20 pb-2  max-md:px-5 mt-0 mx-auto ">
        <div>
          <h1 className="text-[#1B396E] max-lg:ml-0 font-merriweather text-10px text-2xl ml-[11em] max-md:ml-0  py-3">
            {ServicesLang[language].service3}
          </h1>
          <p className="text-[#1B396E] max-lg:ml-0  font-merriweather pb-3 text-sm ml-[19em] max-md:ml-0  ">
            {ServicesLang[language].service3_desc}
          </p>
        </div>
        <section>
          <section className="flex flex-row gap-5 max-sm:flex-col max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3">
            <Image
              className="max-md:w-[400px] max-lg:w-[500px] max-md:p-3"
              src={services}
              alt="My Image"
              width={550}
              height={300}
            />
            <div data-aos="fade-up">
              <h1 className="text-[#1B396E] max-md:p-3  font-merriweather text-[18px] max-lg:font-sans ">
                {ServicesLang[language].subservice1service3}
              </h1>
              <p className="pt-2 font-roboto max-lg:font-sans  max-md:p-3 ">
                {ServicesLang[language].subservice1service3_desc}
              </p>
              <div>
                <button className="bg-gradient-to-r max-md:ml-3  p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                  {ServicesLang[language].viewmore}
                </button>
              </div>
            </div>
          </section>
          <section className="flex flex-row gap-5 max-sm:flex-col max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3">
            <Image
              className="max-md:w-[400px] max-lg:w-[500px] max-md:p-3"
              src={services}
              alt="My Image"
              width={550}
              height={300}
            />
            <div data-aos="fade-up">
              <h1 className="text-[#1B396E] max-md:p-3  font-merriweather text-[18px] max-lg:font-sans ">
                {ServicesLang[language].subservice4service3}
              </h1>
              <p className="pt-2 font-roboto max-lg:font-sans  max-md:p-3 ">
                {ServicesLang[language].subservice4service3_desc}
              </p>
              <div>
                <button className="bg-gradient-to-r max-md:ml-3  p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                  {ServicesLang[language].viewmore}
                </button>
              </div>
            </div>
          </section>
          <section className="flex flex-row gap-5 max-sm:flex-col max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3">
            <Image
              className="max-md:w-[400px] max-lg:w-[500px] max-md:p-3"
              src={services}
              alt="My Image"
              width={550}
              height={300}
            />
            <div data-aos="fade-up">
              <h1 className="text-[#1B396E] max-md:p-3  font-merriweather text-[18px] max-lg:font-sans ">
                {ServicesLang[language].subservice2service3}
              </h1>
              <p className="pt-2 font-roboto max-lg:font-sans  max-md:p-3 ">
                {ServicesLang[language].subservice2service3_desc}
              </p>
              <div>
                <button className="bg-gradient-to-r max-md:ml-3  p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                  {ServicesLang[language].viewmore}
                </button>
              </div>
            </div>
          </section>
          <section className="flex flex-row gap-5 max-sm:flex-col max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3">
            <Image
              className="max-md:w-[400px] max-lg:w-[500px] max-md:p-3"
              src={services}
              alt="My Image"
              width={550}
              height={300}
            />
            <div data-aos="fade-up">
              <h1 className="text-[#1B396E] max-md:p-3  font-merriweather text-[18px] max-lg:font-sans ">
                {ServicesLang[language].subservice3service3}
              </h1>
              <p className="pt-2 font-roboto max-lg:font-sans  max-md:p-3 ">
                {ServicesLang[language].subservice3service3_desc}
              </p>
              <div>
                <button className="bg-gradient-to-r max-md:ml-3  p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                  {ServicesLang[language].viewmore}
                </button>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Services;
