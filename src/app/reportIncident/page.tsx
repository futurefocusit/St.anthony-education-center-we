"use client";
import { BASE_URL } from "@/context/api";
import { useAppContext } from "@/context/appContext";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ReportIncident = () => {
  const { language, theme } = useAppContext();
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    location: "",
    message: "",
  });

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/incidence/`, {
        input,
      });

      toast.success("Incident reported successfully!");
      console.log("Response:", response.data);
      // Optionally reset the form after submission
      setInput({
        name: "",
        email: "",
        subject: "",
        location: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to report incident. Please try again.");
    }
  };

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div
        className={`${theme === "dark"
          ? "bg-slate-800 text-gray-300"
          : "bg-white text-black"
          } bg-cover bg-center bg-no-repeat h-[10rem] md:h-[450px]`}
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/5561921/pexels-photo-5561921.jpeg')`,
        }}
      />
      <div
        className={`${theme === "dark"
          ? "bg-slate-800 text-gray-300"
          : "bg-white text-black"
          } font-sans md:p-5 p-2`}
      >
        <h1
          className={`${theme === "dark" ? "text-gray-300" : "bg-white text-blue-800"
            } text-center text-2xl my-5`}
        >
          {language === "en"
            ? "Fill the form to report an incident"
            : "Remplissez le formulaire pour signaler un incident"}
        </h1>

        <form
          onSubmit={onSubmit}
          className={`max-w-4xl m-auto text-center space-y-5`}
        >
          {/* Name Field */}
          <div className="flex sm:items-center gap-3 flex-col sm:flex-row">
            <label className="font-bold min-w-[100px] text-start">
              {language === "en" ? "Name" : "Nom"}
            </label>
            <input
              type="text"
              name="name"
              required
              value={input.name}
              onChange={handleOnChange}
              className="outline-none block w-full px-3 py-2 mb-2 bg-slate-200 border border-transparent rounded"
            />
          </div>

          {/* Email Field */}
          <div className="flex sm:items-center gap-3 flex-col sm:flex-row">
            <label className="font-bold min-w-[100px] text-start">Email</label>
            <input
              type="email"
              name="email"
              required
              value={input.email}
              onChange={handleOnChange}
              className="outline-none block w-full px-3 py-2 mb-2 bg-slate-200 border border-transparent rounded"
            />
          </div>

          {/* Location Field */}
          <div className="flex sm:items-center gap-3 flex-col sm:flex-row">
            <label className="font-bold min-w-[100px] text-start">
              {language === "en" ? "Location" : "Emplacement"}
            </label>
            <input
              type="text"
              name="location"
              required
              value={input.location}
              onChange={handleOnChange}
              className="outline-none block w-full px-3 py-2 mb-2 bg-slate-200 border border-transparent rounded"
            />
          </div>

          {/* Message Field */}
          <div className="flex sm:items-center gap-3 flex-col sm:flex-row">
            <label className="font-bold min-w-[100px] text-start">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={6}
              value={input.message}
              onChange={handleOnChange}
              className="resize-none outline-none block w-full p-3 mb-5 bg-slate-200 border border-transparent rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-[600px] bg-blue-800 text-white py-2 rounded cursor-pointer text-lg"
          >
            {language === "en" ? "Send" : "Envoyer"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ReportIncident;
