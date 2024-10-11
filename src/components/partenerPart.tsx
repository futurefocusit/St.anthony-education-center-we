import React from "react";

const partnerLogos = [
  { src: "/logo.png", alt: "Partner 1" },
  { src: "/logo.png", alt: "Partner 1" },
  { src: "/logo.png", alt: "Partner 1" },
  { src: "/logo.png", alt: "Partner 1" },
  { src: "/logo.png", alt: "Partner 1" },
  { src: "/logo.png", alt: "Partner 1" },
  
];

const PartnerLogos = () => {
  return (
    <div className="pt-10 mt-5 bg-[#1B396E]">
      <h1 className="text-gray-200 text-3xl font-bold text-center ">
        Our parteners
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-6">
        {partnerLogos.map((partner, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={partner.src}
              alt={partner.alt}
              className="max-h-30 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;
