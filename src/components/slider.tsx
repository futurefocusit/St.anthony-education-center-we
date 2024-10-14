import React from "react";
import Image from "next/image";
import { ImQuotesRight } from "react-icons/im";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SkeletonTestimony } from "./skeletons/cardSkeleton";
import { Testimony } from "@/types/types";


interface TestimonySlideshowProps {
  testimony: Testimony[];
  isLoadingTestimony: boolean;
}

const TestimonySlideshow: React.FC<TestimonySlideshowProps> = ({
  testimony,
  isLoadingTestimony,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (isLoadingTestimony) {
    return <SkeletonTestimony />;
  }

  if (!testimony || testimony.length === 0) {
    return (
      <div className="text-center py-10 text-white">No testimony available</div>
    );
  }

  return (
    <div className="mx-4 md:mx-20">
      <Slider {...settings}>
        {testimony.map((test, index) => (
          <div key={index} className="px-2">
            <div className="relative flex flex-col lg:flex-row-reverse gap-3 lg:justify-center">
              <Image
                src={test.image}
                alt={`testimony for ${test.name}`}
                width={90}
                height={90}
                className="lg:relative lg:w-[100px] md:max-w-xl mx-auto lg:mx-0 h-[100px] object-cover rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
              />
              <div className="lg:top-0 flex flex-col bg-[#D9D9D9] max-w-full md:max-w-2xl p-5 mx-auto mb-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                <ImQuotesRight className="w-[10px] h-[10px] md:w-[40px] md:h-[40px] text-sky-400" />
                <p className="text-sm md:text-sm mt-5 md:mt-10 leading-relaxed text-[#333]">
                  {test.content}
                </p>
                <div className="flex flex-col md:flex-row justify-between w-fit mx-auto items-start md:items-center gap-8 mt-2 md:mt-10">
                  <div>
                    <h1 className="font-bold text-[14px] md:text-[26px] text-[#1B396E]">
                      {test.name}
                    </h1>
                    <h2 className="font-light text-[10px] md:text-[15px] text-[#1B396E]">
                      {`${test.role} - ${test.company}`}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonySlideshow;
