"use client";
import React, { useContext, useState } from 'react'
import Logo from './Logo'
import NavigationItems from './NavigationItems'
import SearchBar from './SearchBar'
import { MyContext } from './contextProvider'

import { MdClose } from "react-icons/md";

const NavigationBar = () => {

  const context = useContext(MyContext);
  const [searchInput, setSearchInput] = useState("");
  if (!context) {
    return null;
  }
  const { value, setValue } = context;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchInput.trim()) {
      window.location.href = `/search?query=${encodeURIComponent(searchInput)}`;
    }
  };

  return (
    <div className='w-full p-[2px] lg:p-2'>
      <div className='anotherContainer flex justify-between bg-white m-5 rounded-[30px] py-4 lg:py-7 px-[50px] lg:px-[100px] box-border shadow-xl'>
        <Logo />
        {value ? (
          <div className='searchButton flex items-center gap-5 -mt-[2px]'>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full md:w-[400px] lg:w-[600px] text-[15px] px-3 border-[1px] border-blue-500 rounded-[20px] py-[3px] outline-none"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={handleKeyDown} // Listen for the Enter key
            />
            <button onClick={() => setValue(false)}><MdClose className="w-7 h-7" /></button>
          </div>
        ) : (
          <div className='flex items-center gap-5'>
            <NavigationItems />
            <SearchBar />
          </div>
        )}
      </div>
    </div>
  )
}

export default NavigationBar