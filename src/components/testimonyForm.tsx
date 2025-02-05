"use client";
import { useEffect, useState } from "react";
import { BiLeftArrow } from "react-icons/bi";
import axios from "axios";
import { BASE_URL } from "@/context/api";
import { Testimony } from "@/types/types";
export interface TetimonyUpdateCreateProps {
    testimony: Testimony|null;
    showFields: boolean;
    setShowFields: React.Dispatch<React.SetStateAction<boolean>>;
}

const TestimonyUpdateCreate = ({
  testimony,
  showFields,
  setShowFields,
}: TetimonyUpdateCreateProps) => {
  const [input, setInput] = useState({
    name: "",
    content: "",
    image: "",
  });

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (testimony) {
        await axios.put(`${BASE_URL}/testimony/${testimony._id}`, input);
      } else {
        await axios.post(`${BASE_URL}/testimony`, input);
      }
      setShowFields(false);
    } catch (error) {
      console.error("Error saving project:", error);
    }
  };

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (testimony) {
      setInput({
        name: testimony.name || "",
        content: testimony.content || "",
        image: testimony.image || "",
      });
    } else {
      setInput({
        name: "",
        content: "",
        image: "",
      });
    }
  }, [testimony]);

  return (
    <>
      {showFields && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
          <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex items-center justify-between mb-5">
              <button
                onClick={() => setShowFields(false)}
                className="text-gray-700"
              >
                <BiLeftArrow /> Back
              </button>
              <h1 className="font-bold text-xl">
                {testimony ? "Update testimony" : "Create testimony"}
              </h1>
            </div>
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="block font-bold mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  required
                  onChange={handleOnChange}
                  className="block w-full px-3 py-2 bg-gray-200 rounded"
                />
              </div>
             
              <div>
                <label className="block font-bold mb-1">Content</label>
                <textarea
                  name="content"
                  value={input.content}
                  required
                  onChange={handleOnChange}
                  className="block w-full px-3 py-2 bg-gray-200 rounded"
                  rows={4}
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={input.image}
                  required
                  onChange={handleOnChange}
                  className="block w-full px-3 py-2 bg-gray-200 rounded"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-800 text-white py-2 rounded"
              >
                {testimony ? "Update" : "Create"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonyUpdateCreate;