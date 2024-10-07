import { blogs } from "@/components/HeaderAndFooter/constant";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      <section
        className='h-fit lg:h-screen pb-10 relative -top-36  pt-36 -mb-32 lg:pl-[50px] pl-[5px] space-y-3 lg:space-y-5'
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <hr className="bg-[#F39C12] h-[11px] w-[163px] top-[128px] left-[179px] border-0" />
        <h1
          className="text-[#ffff] font-Merriweather San font-bold text-[32px]"
          style={{
            fontFamily: "Merriweather Sans",
          }}
        >
          Our blog
        </h1>

        <p
          style={{
            fontFamily: "Roboto, sans-serif", fontWeight: "400", textAlign: "left", color: "#ffff",
          }}
          className="text-[14px] lg:text-[20px] w-full lg:w-[500px] pb-5 lg:pb-20 pr-20 lg:pr-0"
        >
          We&apos;re excited to share the latest insights, tips, and industry updates
          with you. Whether you&apos;re here for cybersecurity advice, consultancy
          guidance, or the latest in camera systems, we&apos;ve got you covered. Stay
          informed, stay secure, and enjoy exploring our articles!
        </p>
        <div className="z-30 flex items-center lg:w-[737px] h-10 lg:h-[65px] gap-5 overflow-hidden "
          style={{ borderRadius: "10px", border: "1px solid #FFFFFF", color: "#FFFFFF", backgroundColor: "#1B396E" }}>
          <CiSearch className="w-7 h-7 ml-5" />
          <input
            type="text"
            placeholder="WHAT ARE YOU LOOKING FOR ?"
            className="w-full h-full bg-transparent outline-none border-0"
          />
        </div>
      </section>

      {blogs.map((blog, index) => (
        <section className="pb-10" key={index}>
          <div className="flex items-center flex-col space-y-3 lg:flex-row lg:pr-5">
            <div className="left pb-5 pl-5 space-y-3">
              <div className="flex items-center gap-3">
                <hr style={{ width: "7px", height: "84px", backgroundColor: "#1B396E", border: "none" }} />
                <h1 style={{ fontFamily: "Merriweather Sans", fontWeight: "700", color: "#1B396E", }} className="text-[20px] lg:text-[40px]">
                  {blog.title}
                </h1>
              </div>
              <p
                style={{ height: "71px", fontFamily: "Roboto Serif", fontWeight: "400", fontSize: "16px", lineHeight: "24px", color: "#000000" }}>
                {blog.description}
              </p>
              <div style={{ fontFamily: "Roboto Serif", fontWeight: "400", color: "#000000" }}>
                {blog.guides}
              </div>
            </div>
            <div className="flex items-center justify-center py-5">
              <Image
                src={blog.image}
                alt=""
                width={90}
                height={90}
                style={{ borderRadius: "10px" }}
                className="object-cover min-w-[400px] h-[373px]"
              />
            </div>
          </div>
        </section>
      ))}

    </div>
  );
};

export default Home;
