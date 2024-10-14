"use client";
import { useAppContext } from "@/context/appContext";
const cards = [
  {
    image:
      "https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Cyber Security and Risk Management"
  },
  {
    image:
      "https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Governance, Risk and Compliance (GRC)"
  },
  {
    image:
      "https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Offencive CyberSecurity (Ethical Haching)"
  },
  {
    image:
      "https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Cloud Security Professional (AWS && AZURE)"
  },
  {
    image:
      "https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Third-party Risk Management"
  },
  {
    image:
      "https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Investigating Online Clime"
  },
  {
    image:
      "https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Cyber Walfare"
  },
  {
    image:
      "https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"IT Security Auditing"
  },
  {
    image:
      "https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Cyber Security and Artificial Intelligennt"
  },
  {
    image:
      "https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"DEVSECOPS"
  },
];
const tools = [
  {
    image:
      "https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Tenable IO / Owasp Zap / NMAP"
  },
  {
    image:
      "https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"GRC Tools"
  },
  {
    image:
      "https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"kali Linuxx"
  },
  {
    image:
      "https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"SIEM Solutions"
  },
  {
    image:
      "https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Threat Inteligence tools"
  },
  {
    image:
      "https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"AWS and AZURE Security tools"
  },
  {
    image:
      "https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"CloudStrike"
  },
  {
    image:
      "https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"NIST CSF, ISO 2001 & 2,CIS"
  },
  {
    image:
      "https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"WireShark"
  },
 
];
const Aboutus = () => {
  const {  theme } = useAppContext();
  

  return (
    <div className={` ${theme === "dark" ? "bg-slate-700" : ""}`}>
      <section
        className=" h-auto relative -top-36  pt-72 pb-32 -mb-32 lg:pl-[50px]  pl-[5px] "
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" h-auto pt-16 pb-3 ">
          <h2
            className={`${
              theme === "dark" ? "text-teal-500" : "text-[#1B396E]"
            } pt-10 pl-10 text-6xl`}
          >
            Proffesional courses
          </h2>
        </div>
      </section>

      <div className=" pt-20  ">
        <h1 className="text-center text-4xl font-bold ">
          Dive into our courses we provide
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-7 py-20 text-center  px-10  ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 shadow-2xl p-12 items-center hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <img
                className="rounded-full  h-32 w-32"
                src={card.image}
                alt={card.title}
              />
              <p className="text-green-500 hover:text-green-700 cursor-pointer">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <h1 className="text-center text-4xl font-bold ">
          Dive into our Tools we provide
        </h1>
        <div className="  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-7 py-20 text-center  px-10 ">
          {tools.map((card, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 shadow-2xl p-12 items-center hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <img
                className="rounded-full  h-32 w-32"
                src={card.image}
                alt={card.title}
              />
              <p className="text-green-500 hover:text-green-700 cursor-pointer font-extrabold">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
