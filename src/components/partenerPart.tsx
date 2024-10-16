import React from "react";

const partnerLogos = [
  { src: "/logo.png", alt: "Partner 1", link: "###" },
  { src: "/logo.png", alt: "Partner 1", link: "###" },
  { src: "/logo.png", alt: "Partner 1", link: "###" },
  { src: "/logo.png", alt: "Partner 1", link: "###" },
  { src: "/logo.png", alt: "Partner 1", link: "###" },
  { src: "/logo.png", alt: "Partner 1", link: "###" },
];

const PartnerLogos = () => {
  return (
    <div className="pt-10 mt-5 bg-[#1B396E]">
      <h1 className="text-gray-200 text-3xl font-bold text-center ">
        Our Parteners
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-6">
        {partnerLogos.map((partner, index) => (
          <div
            key={index}
            className="justify-center gap-0 transform transition duration-300 hover:scale-105 cursor-pointer"
          >
            <a href={partner.link}>
              <img
                src={partner.src}
                alt={partner.alt}
                className="max-h-30 object-contain"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;
