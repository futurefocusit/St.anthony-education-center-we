"use client";
import { BASE_URL } from "@/context/api";
import { useAppContext } from "@/context/appContext";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

interface Errors {
  name?: string;
  email?: string;
  location?: string;
  message?: string;
}

const ReportIncident: React.FC = () => {
  const { language, theme } = useAppContext();
  const [input, setInput] = useState({
    name: "",
    email: "",
    location: "",
    message: "",
    type: "incident",
  });
  const [errors, setErrors] = useState<Errors>({});

  const validateInputs = (): Errors => {
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

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await axios.post(`${BASE_URL}/incidence/`, {
        input,
      });

      toast.success("Incident reported successfully!");
      console.log("Response:", response.data);
      setInput({
        name: "",
        email: "",
        location: "",
        message: "",
        type: "incident",
      });
      setErrors({});
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
        className={`${
          theme === "dark"
            ? "bg-slate-800 text-gray-300"
            : "bg-white text-black"
        } bg-cover bg-center bg-no-repeat h-[10rem] md:h-[450px]`}
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/5561921/pexels-photo-5561921.jpeg')`,
        }}
      />
      <div
        className={`${
          theme === "dark"
            ? "bg-slate-800 text-gray-300"
            : "bg-white text-black"
        } font-sans md:p-5 p-2`}
      >
        <h1
          className={`${
            theme === "dark" ? "text-gray-300" : "bg-white text-blue-800"
          } text-center text-2xl my-5`}
        >
          {language === "en"
            ? "Incident Reporting Form"
            : "Formulaire de rapport d'incident"}
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
              value={input.name}
              onChange={handleOnChange}
              className={`outline-none block w-full px-3 py-2 mb-2 bg-slate-200 border ${
                errors.name ? "border-red-500" : "border-transparent"
              } rounded`}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="flex sm:items-center gap-3 flex-col sm:flex-row">
            <label className="font-bold min-w-[100px] text-start">
              {language === "en" ? "Email" : "Email"}
            </label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={handleOnChange}
              className={`outline-none block w-full px-3 py-2 mb-2 bg-slate-200 border ${
                errors.email ? "border-red-500" : "border-transparent"
              } rounded`}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          {/* Location Field */}
          <div className="flex sm:items-center gap-3 flex-col sm:flex-row">
            <label className="font-bold min-w-[100px] text-start">
              {language === "en" ? "Location" : "Emplacement"}
            </label>
            <input
              type="text"
              name="location"
              value={input.location}
              onChange={handleOnChange}
              className={`outline-none block w-full px-3 py-2 mb-2 bg-slate-200 border ${
                errors.location ? "border-red-500" : "border-transparent"
              } rounded`}
            />
            {errors.location && (
              <p className="text-red-500">{errors.location}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="flex sm:items-center gap-3 flex-col sm:flex-row">
            <label className="font-bold min-w-[100px] text-start">
              {language === "en" ? "Message" : "Message"}
            </label>
            <textarea
              name="message"
              rows={6}
              value={input.message}
              onChange={handleOnChange}
              className={`resize-none outline-none block w-full p-3 mb-5 bg-slate-200 border ${
                errors.message ? "border-red-500" : "border-transparent"
              } rounded`}
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full md:w-[600px] bg-blue-800 hover:bg-blue-500 text-white py-2 rounded cursor-pointer text-lg"
          >
            {language === "en" ? "Send" : "Envoyer"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ReportIncident;
