"use client";
import React, { useState } from 'react';

const RegistrationPage = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(input);
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="font-sans md:p-5 p-2">
        <h1 className="text-center text-blue-800 text-2xl my-5">
          Fill the form to register
        </h1>

        <form onSubmit={onSubmit} className="max-w-4xl m-auto text-center space-y-5">
          <div className='flex sm:items-center gap-3 flex-col sm:flex-row'>
            <p className='font-bold sm:min-w-[200px] text-start'>Names</p>
            <input
              type="text"
              name="name"
              required
              onChange={handleOnChange}
              className="outline-none block w-full px-3 py-2 mb-2 bg-slate-200 border border-transparent rounded"
            />
          </div>

          <div className='flex sm:items-center gap-3 flex-col sm:flex-row'>
            <p className='font-bold sm:min-w-[200px] text-start'>Email</p>
            <input
              type="text"
              name="email"
              required
              onChange={handleOnChange}
              className="outline-none block w-full px-3 py-2 mb-2 bg-slate-200 border border-transparent rounded"
            />
          </div>

          <div className='flex sm:items-center gap-3 flex-col sm:flex-row'>
            <p className='font-bold sm:min-w-[200px] text-start'>Phone number</p>
            <input
              type="number"
              name="location"
              required
              onChange={handleOnChange}
              className="outline-none block w-full px-3 py-2 mb-2 bg-slate-200 border border-transparent rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-[600px] bg-blue-800 text-white py-2 rounded cursor-pointer text-lg"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};

export default RegistrationPage;