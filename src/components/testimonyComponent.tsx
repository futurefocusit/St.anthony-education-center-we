import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ImQuotesRight } from 'react-icons/im';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import { useAppContext } from '@/context/appContext';
import { englishContent, frenchContent } from '@/lib/languageHome';
import { Testimony } from '@/types/types';

interface TestimonySliderProps {
  testimony: Testimony[];
}

const TestimonySlider: React.FC<TestimonySliderProps> = ({ testimony }) => {
  const [currentTestimonyIndex, setCurrentTestimonyIndex] = useState(0);
  const { language } = useAppContext();
  const [data, setData] = useState(englishContent);

  useEffect(() => {
    //@ts-expect-error error
    setData(language === 'en' ? englishContent : frenchContent);
  }, [language]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonyIndex((prevIndex) => (prevIndex + 1) % testimony.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [testimony.length]);

  if (!testimony || testimony.length === 0) {
    return <div>No testimonies available</div>;
  }

  const currentTestimony = testimony[currentTestimonyIndex];

  return (
    <div className="relative">
      <h1 className="my-10 flex justify-center text-center font-[800] text-[36px] text-[#1ABC9C]">
        {data.testimonialTitle}
      </h1>

      <div className=" flex flex-col lg:flex-row mx-auto justify-end items-center ">
        {/* Image Container */}
        <div className="relative max-w-xs md:max-w-xl">
          <Image
            src={currentTestimony.image}
            alt={`Testimony for ${currentTestimony.name}`}
            width={300}
            height={330}
            className="w-full h-full object-cover rounded-xl"
          />

          {/* Name and background at the bottom of the image */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-3 text-center text-white">
            <h2 className="font-bold text-lg">{currentTestimony.name}</h2>
          </div>
        </div>

        {/* Testimony Content */}
        <div className="bg-[#D9D9D9] p-6 max-w-full md:max-w-xl mt-6 md:mt-0 mx-6 md:mx-20 rounded-xl shadow-md">
          <div className="flex justify-center">
            <ImQuotesRight className="w-[50px] h-[50px] md:w-[81px] md:h-[81px] text-sky-400" />
          </div>
          <h1 className="font-[400] text-[16px] md:text-[20px] text-[#1B396E] mt-4">
            {currentTestimony.content}
          </h1>

          <div className="flex justify-between items-center mt-8 gap-4 md:gap-10">
            <FaLessThan
              size={20}
              className="bg-white rounded-3xl p-2 cursor-pointer"
              onClick={() =>
                setCurrentTestimonyIndex(
                  (prevIndex) => (prevIndex - 1 + testimony.length) % testimony.length
                )
              }
            />
            <FaGreaterThan
              size={20}
              className="bg-white rounded-3xl p-2 cursor-pointer"
              onClick={() =>
                setCurrentTestimonyIndex(
                  (prevIndex) => (prevIndex + 1) % testimony.length
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonySlider;
