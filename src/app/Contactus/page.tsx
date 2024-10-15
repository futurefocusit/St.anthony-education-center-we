"use client";
import React, { useState } from "react";
import Image from "next/image";

import telephone from "../../assets/telephone (1).png";
import message from "../../assets/mail (1).png";
import image2 from "../../assets/image2.jpg";
import { useAppContext } from "@/context/appContext";
import { BASE_URL } from "@/context/api";
import axios from "axios";
import { toast } from "react-toastify";
import { FaLocationDot } from "react-icons/fa6";
interface Errors {
  name?: string;
  email?: string;
  location?: string;
  message?: string;
}
const Contactus = () => {
  const { language, theme } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    location: "",
    message: "",
    type: "message",
  });
  const [errors, setErrors] = useState<Errors>({});

  const validateInputs = () => {
    const newErrors: Errors = {};
    if (!input.name) newErrors.name = "Name is required.";
    if (!input.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!input.location) newErrors.location = "Location is required.";
    if (!input.message) newErrors.message = "Message is required.";
    else if (input.message.length < 10)
      newErrors.message = "Message should be at least 10 characters long.";

    return newErrors;
  };
  const onSubmit = async () => {
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      setIsLoading(true);
      await axios.post(`${BASE_URL}/incidence/`, {
        input,
      });
      toast.success("Message sent successfully!");
      setInput({
        name: "",
        email: "",
        location: "",
        message: "",
        type: "message",
      });
      setErrors({});
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  return (
    <div
      className={` ${
        theme === "dark" ? "bg-slate-700" : ""
      } relative flex flex-col justify-center items-center`}
    >
      <div className="relative bg-[#1b396e] h-[400px] md:h-[450px] lg:h-[450px] w-full overflow-hidden">
        <Image
          src={image2}
          alt="image 2"
          layout="responsive"
          width={100}
          height={20}
          className="w-full opacity-10"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <p className="font-merriweather text-center text-xl md:text-[70px] text-[#ffffff] font-bold">
            {language === "en" ? "Get In Touch" : "Entrer en contact"}
          </p>
          <p className="font-roboto mt-6 md:mt-10 text-center text-[20px]">
            {language === "en"
              ? " Want to get in touch? we'd love to hear from you. Here is how you can reach us."
              : "Vous souhaitez nous contacter ? nous aimerions avoir de vos nouvelles. Voici comment vous pouvez nous joindre."}
          </p>
        </div>
      </div>

      <div className="relative bg-gradient-to-b from-gray-200 via-gray-200/90 w-full flex flex-col md:flex-col lg:flex-row overflow-hidden">
        <div className="p-5 md:p-10 flex justify-center items-center w-full md:w-full lg:w-1/2">
          <iframe
            className="shadow-xl w-full h-[300px] md:h-[400px] lg:h-[500px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.372925704017!2d-75.70215228469056!3d45.352704179101964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccebb0cb651c455%3A0x445c123d0cf4b689!2s19%20Grenfell%20Crescent%2C%20Ottawa%2C%20ON%2C%20Canada%20K2G%200G3!5e0!3m2!1sen!2sus!4v1697198948007!5m2!1sen!2sus"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex flex-col p-10 md:p-5 md:mt-10 lg:mt-10 w-full md:w-full lg:w-1/2">
          <h1 className="text-[1.7rem] text-[#1b396e] text-center font-normal font-merriweather pb-2">
            {language == "en" ? " Connect With Us" : "Connectez-vous avec nous"}
          </h1>

          <div className="flex flex-col mt-3 items-center">
            <div className="flex flex-row items-center">
              <Image src={message} alt="message image" width={20} />
              <a
                href="mailto:info@cyberprogroup.com "
                className="ml-2 text-[#1e1e1e] hover:underline font-thin"
              >
                info@cyberprogroup.com
              </a>
            </div>

            <div className="flex flex-row items-center mt-2">
              <Image src={telephone} alt="telephone image" width={20} />
              <p className="ml-2 text-[#1e1e1e] font-thin">
                +237691181569 / +237670-93-57-21
              </p>
            </div>
            <div className="flex flex-row items-center mt-2">
              <Image src={telephone} alt="telephone image" width={20} />
              <p className="ml-2 text-[#1e1e1e] font-thin">+1 514-452-4048</p>
            </div>
            <div className="flex flex-row items-center mt-2">
              <Image src={telephone} alt="telephone image" width={20} />
              <p className="ml-2 text-[#1e1e1e] font-thin">+250795305033</p>
            </div>

            <h1 className="text-[1.5rem] text-[#1b396e] text-center font-normal font-merriweather pb-2 mt-10 mb-3">
              {language == "en" ? "   Where to Find Us" : "Où nous trouver"}
            </h1>

            <div className="flex flex-row items-center">
              <FaLocationDot width={20} />
              <p className="ml-2 mt-5 text-[#1e1e1e] font-thin text-center max-w-lg">
                KN 4 Ave, Kigali, Rwanda
              </p>
            </div>
            <div className="flex flex-row items-center">
              <FaLocationDot width={20} />
              <p className="ml-2 mt-5 text-[#1e1e1e] font-thin text-center max-w-lg">
                19 Grenfell Crescent, Ottawa ON, Canada K2G0G3
              </p>
            </div>
            <div className="flex flex-row items-center">
              <FaLocationDot width={20} />
              <p className="ml-2 mt-5 text-[#1e1e1e] font-thin text-center max-w-lg">
                Checkpoint Molyko, Buea, Cameroon
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center rounded-xl mt-10">
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <h1 className="font-merriweather text-[20px] md:text-[30px] lg:text-[30px] text-[#1b396e] font-bold">
            {language === "en"
              ? "Have a Question? Contact Us."
              : "Vous avez une question ? Contactez-nous."}
          </h1>
          <div className="bg-[#f39c12] w-32 h-2 md:w-48 lg:w-48 md:h-2 lg:h-2 rounded-2xl mt-2 md:mt-3" />
        </div>

        <div className="flex flex-col m-2">
          <input
            required
            type="text"
            name="name"
            placeholder={
              language === "en"
                ? "Please Enter Your Name"
                : "Veuillez entrer votre nom"
            }
            className={`bg-[#ffff] w-[350px] md:w-[700px] h-14 text-[#1e1e1e] border ${
              errors.name ? "border-red-500" : "border-[#363636]"
            } outline-[#1b396e] text-[20px] font-roboto text-start pl-3 rounded-[5px]`}
            value={input.name}
            onChange={handleOnChange}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        <div className="flex flex-col m-2">
          <input
            required
            type="email"
            name="email"
            placeholder={
              language === "en"
                ? "Please Enter Your Email"
                : "Veuillez entrer votre email"
            }
            className={`bg-[#ffff] w-[350px] md:w-[700px] h-14 text-[#1e1e1e] border ${
              errors.email ? "border-red-500" : "border-[#363636]"
            } outline-[#1b396e] text-[20px] font-roboto text-start pl-3 rounded-[5px]`}
            value={input.email}
            onChange={handleOnChange}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div className="flex flex-col m-2">
          <input
            required
            type="text"
            name="location"
            placeholder={
              language === "en"
                ? "Enter Location"
                : "Veuillez entrer votre Location"
            }
            className={`bg-[#ffff] w-[350px] md:w-[700px] h-14 text-[#1e1e1e] border ${
              errors.location ? "border-red-500" : "border-[#363636]"
            } outline-[#1b396e] text-[20px] font-roboto text-start pl-3 rounded-[5px]`}
            value={input.location}
            onChange={handleOnChange}
          />
          {errors.location && <p className="text-red-500">{errors.location}</p>}
        </div>

        <div className="flex flex-col m-2">
          <textarea
            required
            name="message"
            placeholder={
              language === "en" ? "Enter Your Message" : "Entrez votre message"
            }
            className={`bg-[#ffff] w-[350px] md:w-[700px] min-h-52 md:min-h-72 text-[#1e1e1e] border ${
              errors.message ? "border-red-500" : "border-[#363636]"
            } outline-[#1b396e] text-[20px] font-roboto text-start pl-3 rounded-[5px]`}
            value={input.message}
            onChange={handleOnChange}
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>

        <div className="flex flex-col m-2">
          <button
            onClick={() => onSubmit()}
            className="bg-[#1b396e] w-[350px] md:w-[700px] h-10 text-center border-none outline-none text-[20px] font-roboto pl-3 rounded-[5px] text-[#ffff] font-bold hover:bg-blue-800 transition-all duration-300 ease-in-out"
          >
            {isLoading
              ? language === "en"
                ? "Sending.."
                : "Envoyer..."
              : language === "en"
              ? "Send Message"
              : "Envoyer un message"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
