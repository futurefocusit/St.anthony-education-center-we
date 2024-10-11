"use client";
import { useAppContext } from "@/context/appContext";
import { AboutUsLang } from "@/lib/languageAbout";
const Aboutus = () => {
  const { language, theme } = useAppContext();
  

  return (
    <div className={` ${theme === "dark" ? "bg-slate-700" : ""}`}>
      <section
        className=" h-auto relative -top-36  pt-72 pb-32 -mb-32 lg:pl-[50px]  pl-[5px] "
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

      <div className="">
        <h1>dive into our courses we provide</h1>
        <div className="grid grid-col-4">
          <div className="flex flex-col p-4 shadow-2xl">
            <img
            className="rounded-full"
              src="https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <p>courses1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
