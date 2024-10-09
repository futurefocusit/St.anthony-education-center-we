"use client";
import { MdOutlineEmail } from "react-icons/md";
import { SiSpringsecurity } from "react-icons/si";
import Link from "next/link";
import {
  Contacts,
  Locations,
  NavigationItem,
  NavigationItemsRoutes,
} from "./HeaderAndFooter/constant";
import "./HeaderAndFooter/style.css";
import { FaPinterestP } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/context/appContext";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/context/api";
import { toast } from "react-toastify";

const Footer = () => {
  const { language } = useAppContext();
  const [email, setEmail] = useState("");
  // const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  if (pathname === "/registration") return null;
  const handleSubscribe = async () => {
    try {
      // setLoading(true)
      const response = await axios.post(`${BASE_URL}/usersubscribe`, {
        email,
      });
      toast.success(response.data.message);
    } catch (error) {
      toast.error("failed to subscribe");
    }finally{
      // setLoading(false)
    }
  };
  return (
    <div
      className=" p-5"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/5380590/pexels-photo-5380590.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="">
        <div className="flex justify-between w-full flex-col  md:flex-row ">
          <div className="flex justify-between w-full both">
            <div className="mt-3 footer-container both-one">
              <h1 className="text-[#1ABC9C]">
                {language === "en" ? "ADDRESS" : "ADRESSE"}
              </h1>
              <div className="w-[50px] bg-blue-700 p-[2px] rounded-md mb-4" />
              <div className="flex flex-col gap-4 mt-2 text-white text-xl footer-container">
                {Locations.map((location, index) => {
                  const IconComponent = location.location;
                  return (
                    <div key={index}>
                      <p>{location.country}:</p>
                      <div className="flex items-center gap-2">
                        <div className="text-red-700">
                          <IconComponent />
                        </div>
                        <p>{location.street}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="md:mx-auto both-one">
              <div className="mt-3 footer-container">
                <h1 className="text-[#1ABC9C]">
                  {language === "en" ? "USEFUL LINKS" : "LIENS UTILES"}
                </h1>
                <div className="w-[50px] bg-blue-700 p-[2px] rounded-md mb-4" />
              </div>
              <div className="flex flex-col gap-2 mt-2 text-white text-xl footer-container">
                {NavigationItemsRoutes.map((navigationRoute, index) => (
                  <Link href={navigationRoute.path} key={index}>
                    {navigationRoute[language as keyof NavigationItem]}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 footer-container contact-container">
            <h1 className="text-[#1ABC9C]">
              {language === "en" ? "CONTACTS" : "CONTACTS"}
            </h1>
            <div className="w-[50px] bg-blue-700 p-[2px] rounded-md mb-4" />
            <div className="flex flex-col  gap-4 mt-2 text-white">
              {Contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index}>
                    <div className="contacts flex items-center  gap-2">
                      <p className="min-w-[100px]">{contact.country}</p>
                      <div className="flex items-center gap-2">
                        <p>
                          <Icon className="text-blue-800 -rotate-45" />
                        </p>
                        <p>{contact.phoneNumber}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-3 text-white text-medium sm:text-sm md:text-xl mt-4 w-[100%]">
              <MdOutlineEmail className="text-xl md:text-3xl text-red-600 bg-white email" />{" "}
              info@cyberprogroup.com
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col md:flex-row items-center gap-10 justify-center">
          <div className="flex md:hidden  bg-white p-2 items-center gap-3 w-full rounded-2xl">
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder={
                language === "en"
                  ? "Please Enter Your Email"
                  : "Veuillez entrer votre email"
              }
              className="bg-transparent placeholder:text-[#F39C12] p-2 text-md outline-none border-0 w-full"
            />
            <button
              onClick={() => handleSubscribe()}
              className="bg-[#F39C12] py-2 px-4 rounded-lg"
            >
              {language === "en" ? "  SUBSCRIBE" : "S'ABONNER"}
            </button>
            <SiSpringsecurity className="w-7 h-7" />
          </div>

          <div className="bg-blue-700 w-[400px] p-2 follow-us">
            <p className="text-white text-center">
              {language === "en" ? "Follow Us" : "Suivez-nous"}
            </p>
            <div className="flex justify-between items-center gap-2 mt-2">
              <a href="#">
                <FaPinterestP />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaFacebookF />
              </a>
            </div>
          </div>

          <div className="hidden md:flex bg-white p-2 items-center gap-3 w-[600px] rounded-2xl">
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder={
                language === "en"
                  ? "Please Enter Your Email"
                  : "Veuillez entrer votre email"
              }
              className="bg-transparent placeholder:text-[#F39C12] p-2 text-md outline-none border-0 w-full"
            />
            <button
              onClick={() => handleSubscribe()}
              className="bg-[#F39C12] py-2 px-4 rounded-lg"
            >
              {language === "en" ? "  SUBSCRIBE" : "S'ABONNER"}
            </button>
            <SiSpringsecurity className="w-7 h-7" />
          </div>
        </div>
      </div>
      {/* 
      <div className="h-[100px] w-full flex items-end justify-end">
        <a
          href="#"
          className="w-7 h-7 bg-white rounded-full flex items-center justify-center"
        >
          <MdArrowUpward className=" w-[30px] h-[30px]" />
        </a>
      </div> */}

      <div className="px-10 mt-5">
        <div className="bg-blue-900 h-[2px] w-full" />
        <div className="my-5 flex gap-5">
          <button className="border-r-2 border-r-blue-50 text-white pr-4">
            {language === "en"
              ? "Website Terms"
              : "Conditions d'utilisation du site Web"}
          </button>
          <button className="border-r-2 border-r-blue-50 text-white pr-4">
            {language ? "Data Privacy" : "Confidentialité des données"}
          </button>
          <button className="text-white">FAQs</button>
        </div>
        <div>
          <p className="text-white text-center text-[16px]">
            {language === "en"
              ? "copyright©2024 CyberProGroup"
              : "droits d'auteur©2024 CyberProGroup"}
          </p>
          <p className="text-white text-center text-[16px]">
            {language === "en"
              ? " All rights reserved"
              : "Tous droits réservés"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
