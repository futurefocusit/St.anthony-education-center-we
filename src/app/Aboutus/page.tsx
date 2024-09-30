"use client";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import House from "../../Images/House.jpeg";
import myImage from "../../Images/myImage.jpeg";
import Team from "../../Images/Team.jpg";
import Values from "../../Images/Values.jpg";
const Aboutus = () => {
  return (
    <div className="relative mt-[-2em]">
      
      <section
        className=' h-auto relative -top-36  pt-32 pb-32 -mb-32 lg:pl-[50px]  pl-[5px] '
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className=" h-auto pt-16 pb-3 ">
        <h2 className="text-[#1B396E] pt-10 pl-10 text-6xl">About cyberpro</h2>
        <p className="text-[#1B396E] pt-5 pl-10 text-2xl">
          Your Trusted Partner in Cybersecurity and Consultancy
        </p>
      </div>

      </section>

      <div className="w-[100%] h-full max-md:w-[100%] bg-[#ffffff]  max-md:px-5  mx-auto px-20  ">
        {/* About section content */}

        <h1 className="text-[#1B396E] font-merriweather text-10px text-2xl pb-3">
          Our Story
        </h1>
        <p className="text-[#1B396E] font-merriweather pb-3 text-sm ">
          Securing Your Future, Protecting Your Business
        </p>

        <section className="flex flex-row gap-5   max-sm:flex-col max-md:pl-0 ">
          <Image
            className="max-sm:w-[400px]"
            src={myImage}
            alt="My Image"
            width={300}
            height={300}
          />
          <div>
            <h1 className="text-[#1B396E] font-merriweather text-xl ">
              Background
            </h1>
            <p className="pt-3 font-roboto">
              Founded in [......], CyberPro has been at the forefront of
              providing top-notch cybersecurity solutions and consultancy
              services to businesses of all sizes. Our mission is to safeguard
              your digital assets and ensure a secure online environment for
              your operations.
            </p>
          </div>
        </section>

        <section className="flex flex-row max-sm:flex-col-reverse ">
          <div>
            <h1 className="text-[#1B396E] font-merriweather text-xl pt-3">
              Mission
            </h1>
            <p className="pt-3 font-roboto">
              Our mission is to empower businesses with the knowledge and tools
              to defend against cyber threats and to provide unparalleled
              consultancy services that drive growth and success.
            </p>
          </div>
          <div>
            <Image
              className=" rotate-[25deg] max-md:rotate-0"
              src={House}
              alt="My Image"
              width={400}
              height={300}
            />
          </div>
        </section>

        <section className="flex flex-row gap-5 max-sm:flex-col mt-0 ">
          <Image
            className="max-sm:w-[400px]"
            src={Values}
            alt="My Image"
            width={300}
            height={300}
          />
          <div>
            <h1 className="text-[#1B396E] font-merriweather text-xl ">
              Values
            </h1>
            <p className="pt-3 font-roboto">
              At CyberPro, we value integrity, innovation, and excellence. We
              are committed to delivering exceptional services with the highest
              ethical standards and professionalism.
            </p>
          </div>
        </section>


        <section className=" max-md:p-0 p-5 mt-3">
          <h1 className="text-[#1B396E] font-merriweather  text-2xl py-4">
            Meet Our Team
          </h1>
          <div className="flex flex-1 flex-row gap-5 max-sm:flex-wrap justify-evenly items-center ">
            <div className="w-[300px] h-auto pb-3 rounded-2xl max-md:rounded-none max-md:w-screen transform transition-transform duration-300 hover:scale-105 cursor-pointer  bg-[#2752BF] text-center shadow-2xl">
              <Image
                className="max-md:w-[550px] max-md:h-[200px] bg-contain max-md:rounded-none rounded-2xl"
                src={Team}
                alt="My Image"
                width={300}
                height={300}
              />
              <div>
                <h1 className="text-[#1ABC9C] font-merriweather  text-xl">
                  Smith
                </h1>
                <p className="font-roboto">CEO</p>
                <Link href="/User4" legacyBehavior>
                  <a className="text-[#e650a2] py-2 font-merriweather">Read More</a>
                </Link>
                <div className="max-md:py-3 flex gap-4 justify-center items-center">
                  <FontAwesomeIcon  icon={faInstagram} />
                  <FontAwesomeIcon  icon={faLinkedin} />
                  <FontAwesomeIcon icon={faXTwitter} />
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
              </div>
            </div>
            <div className="w-[300px]  rounded-2xl cursor-pointer transform transition-transform duration-300 hover:scale-105 max-md:rounded-none h-auto pb-3 max-md:w-screen bg-[#2752BF] text-center shadow-2xl">
              <Image
                className=" bg-contain rounded-2xl max-md:rounded-none max-md:w-[550px] max-md:h-[200px]"
                src={Team}
                alt="My Image"
                width={300}
                height={300}
              />
              <div>
                <h1 className="text-[#1ABC9C] font-merriweather  text-xl">
                  Emily
                </h1>
                <p className="font-roboto">CEO</p>
                <Link href="/Users" legacyBehavior>
                  <a className="text-[#e650a2] font-merriweather py-2">Read More</a>
                </Link>
                <div className="max-md:py-3 flex gap-4 justify-center items-center">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faLinkedin} />
                  <FontAwesomeIcon icon={faXTwitter} />
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
              </div>
            </div>
            <div className="w-[300px] h-auto pb-3 max-md:w-screen cursor-pointer transform transition-transform duration-300 hover:scale-105 max-md:rounded-none  rounded-2xl bg-[#2752BF] text-center ">
              <Image
                className="bg-contain rounded-2xl max-md:w-[550px] max-md:rounded-none max-md:h-[200px]"
                src={Team}
                alt="My Image"
                width={300}
                height={300}
              />
              <div>
                <h1 className="text-[#1ABC9C] font-merriweather  text-xl">
                Jay-winn
                </h1>
                <p className="font-roboto">CEO</p>
                <Link href="/User3" legacyBehavior>
                  <a className="text-[#e650a2] font-merriweather py-2">Read More</a>
                </Link>
                <div className="max-md:py-3 flex gap-4 justify-center items-center">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faLinkedin} />
                  <FontAwesomeIcon icon={faXTwitter} />
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
              </div>
            </div>

            <div className="w-[300px] max-md:w-screen  h-auto pb-3 max-md:rounded-none cursor-pointer transform transition-transform duration-300 hover:scale-105 rounded-2xl bg-[#2752BF] text-center shadow-2xl">
              <Image
                className="bg-contain rounded-2xl max-md:w-[550px] max-md:rounded-none max-md:h-[200px]"
                src={Team}
                alt="My Image"
                width={300}
                height={300}
              />
              <div>
                <h1 className="text-[#1ABC9C] font-merriweather  text-xl">
                  David
                </h1>
                <p className="font-roboto">CEO</p>
                <Link href="/User2" legacyBehavior>
                  <a className="text-[#e650a2] font-merriweather py-2">Read More</a>
                </Link>
                <div className="max-md:py-3 flex gap-4 justify-center items-center">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faLinkedin} />
                  <FontAwesomeIcon icon={faXTwitter} />
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Aboutus;
