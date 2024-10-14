"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAppContext } from "@/context/appContext";
import { BASE_URL } from "@/context/api";

const RegistrationPage = () => {
  const { language } = useAppContext();
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    nid: null,
    photo: null,
    diploma: null,
  });

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Validate required fields
    if (
      !input.name ||
      !input.email ||
      !input.phone ||
      !input.gender ||
      !input.address ||
      !input.photo ||
      !input.diploma||
      !input.nid

    ) {
      toast.error("All fields are required!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", input.name);
      formData.append("email", input.email);
      formData.append("phone", input.phone);
      formData.append("gender", input.gender);
      formData.append("address", input.address);
      formData.append("nid", input.nid);
      formData.append("photo", input.photo);
      formData.append("diploma", input.diploma);

      await axios.post(`${BASE_URL}/studentS/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Your application has been sent!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send application. Please try again.");
    }
  };

  const handleOnChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    if (files && files[0]) {
      setInput({ ...input, [name]: files[0] });
    }
  };

  return (
    <div className="font-sans pt-64 px-2 pb-5">
      <h1 className="text-center text-blue-800 text-2xl my-5">
        Fill the form to register
      </h1>

      <form
        onSubmit={onSubmit}
        className="max-w-4xl m-auto text-center space-y-5"
      >
        <div className="flex sm:items-center gap-3 flex-col sm:flex-row">
          <p className="font-bold sm:min-w-[200px] text-start">
            {language === "en" ? "Name" : "Nom"}
          </p>
          <input
            type="text"
            name="name"
            required
            onChange={handleOnChange}
            className="outline-none block w-full px-3 py-2 mb-2 bg-slate-200 border border-transparent rounded"
          />
        </div>

        <div className="flex sm:items-center gap-3 flex-col sm:flex-row">
          <p className="font-bold sm:min-w-[200px] text-start">Email</p>
          <input
            type="email"
            name="email"
            required
            onChange={handleOnChange}
            className="outline-none block w-full px-3 py-2 mb-2 bg-slate-200 border border-transparent rounded"
          />
        </div>

        <div className="flex sm:items-center gap-3 flex-col sm:flex-row">
          <p className="font-bold sm:min-w-[200px] text-start">
            {language === "en" ? "Phone number" : "Numéro de téléphone"}
          </p>
          <input
            type="tel"
            name="phone"
            required
            onChange={handleOnChange}
            className="outline-none block w-full px-3 py-2 mb-2 bg-slate-200 border border-transparent rounded"
          />
        </div>

        <div className="flex sm:items-center gap-3 flex-col sm:flex-row">
          <p className="font-bold sm:min-w-[200px] text-start">
            {language === "en" ? "Address" : "Adresse"}
          </p>
          <input
            type="text"
            name="address"
            required
            onChange={handleOnChange}
            className="outline-none block w-full px-3 py-2 mb-2 bg-slate-200 border border-transparent rounded"
          />
        </div>

        <div className="flex sm:items-center gap-3 flex-col sm:flex-row">
          <p className="font-bold sm:min-w-[200px] text-start">
            {language === "en" ? "Gender" : "Genre"}
          </p>
          <select
            name="gender"
            required
            onChange={handleOnChange}
            className="outline-none block w-full px-3 py-2 mb-2 bg-slate-200 border border-transparent rounded"
          >
            <option value="" disabled>
              Select gender
            </option>
            <option value="male">{language === "en" ? "Male" : "Homme"}</option>
            <option value="female">
              {language === "en" ? "Female" : "Femme"}
            </option>
          </select>
        </div>

        <div className="flex sm:items-center gap-3 flex-col sm:flex-row">
          <p className="font-bold sm:min-w-[200px] text-start">National ID</p>
          <input
            type="file"
            name="nid"
            required
            onChange={handleFileChange}
            accept=".pdf,image/*"
            className="block w-full px-3 py-2 mb-2 bg-slate-200 border border-transparent rounded"
          />
        </div>
        <div className="flex sm:items-center gap-3 flex-col sm:flex-row">
          <p className="font-bold sm:min-w-[200px] text-start">Photo</p>
          <input
            type="file"
            name="photo"
            required
            onChange={handleFileChange}
            accept="image/*"
            className="block w-full px-3 py-2 mb-2 bg-slate-200 border border-transparent rounded"
          />
        </div>

        <div className="flex sm:items-center gap-3 flex-col sm:flex-row">
          <p className="font-bold sm:min-w-[200px] text-start">Diploma</p>
          <input
            type="file"
            name="diploma"
            required
            onChange={handleFileChange}
            accept=".pdf,image/*"
            className="block w-full px-3 py-2 mb-2 bg-slate-200 border border-transparent rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full   bg-blue-700 text-white py-2 rounded cursor-pointer text-lg hover:bg-blue-900"
        >
          {language === "en" ? "SUBMIT" : "SOUMETTRE"}
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
