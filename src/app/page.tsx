"use client";

import { posts } from "@/components/homepage/constant";
import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Image from "next/image";
import { englishContent, frenchContent } from "@/lib/languageHome";
import { useAppContext } from "@/context/appContext";

import { AboutUsLang } from "@/lib/languageAbout";

const Home = () => {
  const { language, theme } = useAppContext();
  const [data, setData] = useState(englishContent);
 
  // const fetchData = async (
  //   endpoint: string,
  //   //@ts-expect-error ERROR
  //   setStateFunc: React.Dispatch<React.SetStateAction<>>,
  //   setLoadingFunc: React.Dispatch<React.SetStateAction<boolean>>
  // ) => {
  //   try {
  //     setLoadingFunc(true);
  //     const response = await axios.get(`${BASE_URL}/${endpoint}`);
  //     setStateFunc(response.data);
  //   } catch (error) {
  //     console.error(`Error fetching ${endpoint}:`, error);
  //   } finally {
  //     setLoadingFunc(false);
  //   }
  // };
  
  

  useEffect(() => {
    //@ts-expect-error error
    setData(language === "en" ? englishContent : frenchContent);
  }, [language]);

  // useEffect(() => {
  //   // fetchData("testimony", setTestimony, setIsLoadingtestimony);
  //   fetchData("testimony/rate", setRating, setIsLoadingRating);
  //   fetchData("team", setTeam, setIsLoadingTeam);
  //   fetchData("blog", setBlog, setIsLoadingBlog);
  // }, []);

  return (
    <div className={`${theme === "dark" ? "bg-slate-700" : ""}`}>
      <div
        className={`h-fit pb-10 relative -top-36 pt-72 lg:flex  ${
          theme === "dark" ? "text-gray-300" : "text-white"
        }`}
        style={{
          backgroundImage: `url('/hero2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={`flex flex-col gap-2 lg:gap-5 $`}>
          <p className="text-[#1ABC9C] font-extrabold lg:text-[48px] text-[28px] text-center">
            {data.heroTitle}
          </p>
          <p
            className={`text-[30px] sm:text-[40px] md:text-[50px] lg:text-[30px] xl:text-[64px] lg:leading-30px] text-center px-2`}
          >
            {data.heroSubtitle}
          </p>
          <div className="bg-[#1ABC9C] w-[200px] h-2 mx-auto rounded-lg" />
          <a
            href="/Aboutus"
            className={`button hover:bg-teal-500 hover:rounded-lg text-[16px]  w-fit mx-auto px-4 py-2`}
          >
            {data.readMore}
          </a>
        </div>
      </div>
      <div className="font-roboto min-h-screen w-full">
        <div
          className={`flex justify-between items-center h-full Z
          `}
        >

          
          <div
            className={`flex flex-col justify-center items-center text-center md:text-left m-auto `}
          >
            <h1
              className={`font-[800] text-teal-500 text-[24px] sm:text-[28px] md:text-[36px]`}
            >
              {data.featureTitle}
            </h1>
            <p
              className={`
               ${theme === "dark" ? "text-gray-300" : "text-black"}
              font-[800] text-[32px] sm:text-[36px] md:text-[48px]`}
            >
              {data.featureSubtitle}
            </p>
            <div className="w-[150px] sm:w-[200px] md:w-[242px] h-[6px] sm:h-[7px] md:h-[9px] bg-custom-blue mt-4" />
          </div>
        </div>
        {/* cards */}
        <div className="flex flex-col md:flex-row items-center flex-wrap justify-center w-full gap-10 mt-10 ">
          {posts.map((post, index) => (
            <div
              key={index}
              className={` relative card border border-gray-400 w-60 md:w-80   rounded-lg shadow-md max-w-full box-border mb-3 h-[29rem] transform transition duration-300 hover:scale-105 ${
                theme === "dark" ? "bg-gray-800" : "bg-green-900"
              }`}
            >
              <div className="flex flex-col gap-2 text-center  ">
                <Image
                src={post.image}
                  alt="cyber"
                  width={90}
                  height={90}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h2 className="font-bold text-2xl">{post.title}</h2>
                <div className="flex flex-wrap text-[0.9rem]  ">
                  {post.content.map((item,index)=>(
                    <li
                    key={index}
                    className={` ${
                      theme === "dark" ? "text-gray-300 " : "text-white"
                    }  p-2 font-bold `}
                  >
                    {item}
                  </li>
                  ))}
                </div>
              </div>
              <div className=" bottom-2 flex w-full items-center justify-center">
               
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full items-center justify-center mt-5">
         
        </div>
        {/* about us */}
        <div className="flex flex-col md:flex-row justify-center items-center p-4">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1
              className={`${
                theme === "dark" ? "text-gray-100" : "text-gray-800"
              }text-[24px] md:text-[36px]`}
            >
              {data.aboutUsTitle}
            </h1>
            <p className={` font-[800] text-[16px] md:text-[18px]`}>
              {data.aboutUsSubtitle}
            </p>
            <div className="w-[30px] md:w-[50px] h-[5px] md:h-[7px] bg-[#1B396E] my-2"></div>
            <p
              className={`${
                theme === "dark" ? "text-gray-100" : "text-gray-800"
              } w-full md:w-[691px] h-auto font-[300] text-sm`}
            >
              {data.aboutUsDescription}
            </p>
            <div className="flex w-full justify-center md:justify-start mt-5">
              <a
                href="/Aboutus"
                className="bg-[#1B396E] hover:bg-teal-500 py-2 px-3 w-fit text-[15px] md:text-[17px] text-white hover:rounded-lg"
              >
                {data.readMore}
              </a>
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:ml-8">
            <Image
              src="https://images.pexels.com/photos/5240548/pexels-photo-5240548.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="CyberPro"
              width={90}
              height={90}
              className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] object-cover"
            />
          </div>
        </div>

      

        <div
          className=" bg-cover bg-center w-full  h-fit lg:h-[730px] "
          style={{
            backgroundImage: `url('/certificate.jpg')`,
          }}
        >
          <div className="flex flex-col justify-center items-center text-center md:text-left m-auto">
            {/* <h1 className="font-[800] text-teal-500 text-[24px] sm:text-[28px] md:text-[36px]">
              {data.financeTitle}
            </h1> */}
            <p
              className={`font-[800] ${
                theme === "dark" ? "text-gray-300" : "text-black"
              } text-[32px] sm:text-[36px] md:text-[28px] text-custom-blue  font-extrabold`}
            >
              {data.financeSubtitle}
            </p>
            <div className="w-[80px] h-[6px] sm:h-[7px] md:h-[9px] bg-custom-blue mt-4" />
          </div>
          <div
            className={`${
              theme === "dark"
                ? "bg-gray-900 text-gray-100"
                : "text-gray-900 bg-white"
            }  flex flex-col sm:flex-row justify-center items-center gap-10 w-full p-6 sm:p-10 mb-10 mt-6`}
          >
            <p className="text-center sm:text-left text-2xl text-custom-blue ">
              {data.professionalCertification}
               <br />
            </p>
              <div className="grid grid-cols-3 gap-5 lg:mx-10 ">
                <p className="flex items-center font-extrabold">
                  <TiTick size={20} />
                TOEFL
                </p>
                <p className="flex items-center font-extrabold">
                  <TiTick size={20} />
                DUOLINGO
                </p>
                <p className="flex items-center font-extrabold">
                  <TiTick size={20} />
                SAT
                </p>
                <p className="flex items-center font-extrabold">
                  <TiTick size={20} />
                DELF
                </p>
                <p className="flex items-center font-extrabold">
                  <TiTick size={20} />
                DALF
                </p>

                <p className="flex items-center font-extrabold">
                  <TiTick size={20} />
                IELTS
                </p>
                <p className="flex items-center font-extrabold">
                  <TiTick size={20} />
                TCF
                </p>
                <p className="flex items-center font-extrabold">
                  <TiTick size={20} />
                HSK
                </p>
                <p className="flex items-center font-extrabold">
                  <TiTick size={20} />
                GOETHE
                </p>
                
              
            </div>
            
          </div>
            
        </div>
       

        <div
          className="w-full h-auto mt-16 bg-cover bg-center "
          style={{
            backgroundImage: `url('https://media.istockphoto.com/id/1292545007/photo/female-hands-using-smartphone-while-sitting-in-home-office-room.jpg?s=612x612&w=0&k=20&c=x9Umo0bYowtiWt849JWZ3XZK-IgxbbsHUBU8k9siinE=')`,
          }}
        >
       
          <div className="flex flex-col lg:flex-row md:flex-row items-center  lg:gap-56 gap-10">
            <div
              className="w-full max-w-[500px] lg:max-w-[300px]  md:max-h-[600px] h-fit sm:h-[500px] p-6 sm:p-10 lg:m-6  "
              style={{
                background:
                  "linear-gradient(263.62deg, rgba(106, 151, 230, 0.94) 1.63%, rgba(27, 57, 110, 0.7238) 65.78%)",
              }}
            >
              
              <h1 className="w-full text-center font-[800] text-[20px] sm:text-[24px] text-[#1ABC9C] mb-4">
                {data.letsStart}
              </h1>
              <p className="w-full text-center font-[800] text-[18px] sm:text-[20px] text-[#1B396E] mb-6">
                {data.secureYourFuture}
              </p>
              <div className="w-[64px] h-[8px]  bg-[#1B396E] mt-3 mx-auto mb-6" />
              <p className="w-full  text-left  max-h-[230px] overflow-auto text-sm sm:text-[16px] mb-8">
                {AboutUsLang[language].missionDescription}
              </p>
              <div className="flex flex-row items-center justify-center space-x-4">
                <a
                  href="/Contactus"
                  className="bg-[#1ABC9C] py-2 px-4 text-[16px] rounded sm:text-[17px] text-white hover:bg-[#1Abc]"
                >
                  {data.contactUs}
                </a>
              </div>
            </div>

            <div className="flex flex-col">
            <h1 className="w-[265px] h-[60.57px] font-[800] text-[24px] sm:text-[36px] text-[#1ABC9C] text-center m-auto">
            {data.contactTitle}
          </h1>
                <div className="flex flex-col justify-center mt-5 gap-5">
                  
                  <div className="flex flex-row gap-6 lg:gap-10">
                    <FaLocationDot className="w-[20px] h-[20px] text-red-500" />
                    <div className="flex flex-col">
                      <p className="w-auto h-auto font-[700] text-[16px]">
                  Gasabo,Remera, Giporoso (behind Remera bus park) Rukiri ,near healing center
                        
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 lg:gap-10">
                    <IoCall className="w-[20px] h-[20px] text-[#1B396E]" />
                    <p className="w-auto h-auto font-[700] text-[15px]">
                    +250 783 129 463 /  +250 735 119 680
                    </p>
                  </div>
                  <div className="flex flex-row gap-6 lg:gap-10">
                    <MdOutlineMailOutline className="w-[20px] h-[20px] text-red-500" />
                    <p className="w-auto h-auto font-[700] text-[16px]">
                    stanthonyeducationcenter@gmail.com
                    </p>
                  </div>
                </div>
              

              <div className="w-full max-w-[400px] py-[2px] mb-6 mt-10 gap-[21px] flex flex-col text-center justify-center p-2 border-blue-700 border-solid border-2 rounded-md">
                <p className="w-auto h-auto font-[700] text-[20px] text-[#D9D9D9]">
                  {data.followUs}
                </p>
                <div className="flex justify-between items-center gap-2 mt-2">
              <a
                className="hover:animate-bounce hover:text-white text-xl border-orange-500 border-2 border-solid rounded p-2"
                href="https://vm.tiktok.com/ZMkqpg4km/"
              >
                <FaTiktok />
              </a>
              
              {/* <a
                className="hover:animate-bounce hover:text-white bg-blue-500 text-2xl"
                href="https://www.linkedin.com/in/cyberpro-group-rw-aa104932a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                <FaLinkedin />
              </a> */}
              <a
                className="hover:animate-bounce hover:text-white text-orange-500 text-2xl"
                href="https://www.instagram.com/st.anthony.education.center?igsh=MTRhc2hteWg1eWl5Yw=="
              >
                <FaInstagram />
              </a>
              {/* <a
                className="hover:animate-bounce hover:text-white text-blue text-2xl"
                href="https://x.com/CyberProGroupRw?t=q15PgUJVt6-ouzlMSiIa8Q&s=09"
              >
                <FaXTwitter />
              </a> */}
              <a
                className="hover:animate-bounce hover:text-white text-blue-400 text-2xl"
                href="https://www.facebook.com/share/1ynfCknuYF/"
              >
                <FaFacebookF />
              </a>
            </div>
              </div>
            </div>
          </div>
        </div>

        {/* map */}
        <div className="mx-10 pt-10 ">
          <iframe
            className="w-full m-auto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.21789901411387!2d30.11779119040893!3d-1.9590275772212618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7aa23568803%3A0xa37310a1de8b923e!2sHealing%20Centre%20Church!5e0!3m2!1sen!2srw!4v1735916706303!5m2!1sen!2srw"
            width="800"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
