"use client";
import Image from "next/image";
import Benefit from "../../Images/Benefit.png";
import download from "../../Images/download.jpeg";
import MyImagee from "../../Images/MyImagee.jpeg";
import services from "../../Images/services.jpeg";
import Teach from "../../Images/Teach.jpg";
import Values from "../../Images/Values.jpg";
import video from "../../Images/video.jpeg";


const Services = () => {
  return (
    <div className="relative mt-[-2em]">
<section
        className=' h-auto relative -top-36  pt-14 -mb-32 lg:pl-[50px]  pl-[5px] '
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
       <div className=" h-auto pb-3 pt-16  ">
        <h2 className="text-[#1B396E] pt-10 pl-10 text-2xl">
          Our Professional Services
        </h2>
        <p className="text-[#1B396E] pt-5 pl-10 text-xl">
          Securing your future in the digital world
        </p>
      </div>

      </section>

      <div className="w-[100%] h-full bg-[#ffffff]  px-10 pb-2  max-md:px-5 mt-0 mx-auto ">
        <div>
          <h1 className="text-[#1B396E] font-merriweather text-10px text-2xl ml-[12em] max-md:ml-0  py-3">
            Professional Camera Installation
          </h1>
          <p className="text-[#1B396E] font-merriweather pb-3 text-sm ml-[20.7em] max-md:ml-0  ">
            Enhancing your security with advanced camera systems
          </p>
        </div>
        <section className="flex flex-row gap-5  max-sm:flex-col max-md:pl-0 ">
          <Image
            className="max-sm:w-[400px]"
            src={services}
            alt="My Image"
            width={550}
            height={300}
          />
          <div data-aos="fade-up">
            <h1 className="text-[#1B396E] font-merriweather text-[18px] ">
              Wide Range of Cameras
            </h1>
            <p className="pt-2 font-roboto">
              We work with a variety of camera types, including IP cameras,
              CCTV, and wireless systems, to fulfill your specific security
              needs. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati ducimus provident porro doloribus magni odio, labore
              itaque error
            </p>
          </div>
        </section>

        <section className="flex flex-row max-sm:flex-col-reverse ">
          <div>
            <h1 className="text-[#1B396E] font-merriweather text-[18px] pt-2">
              Efficient Installation Process
            </h1>
            <p className="pt-2 font-roboto">
              Our team ensures a smooth and efficient installation process,
              minimizing disruption to your daily operations. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Obcaecati ducimus provident
              porro doloribus magni odio, labore itaque error
            </p>
          </div>
          <div className="rotate-[25deg]  max-md:rotate-0 p-2">
            <Image
              className="max-sm:w-[400px] "
              src={Benefit}
              alt="My Image"
              width={450}
              height={250}
            />
          </div>
        </section>

        <section className="flex flex-row gap-5 max-sm:flex-col mt-0 ">
          <Image
            className="max-sm:w-[400px]"
            src={download}
            alt="My Image"
            width={250}
            height={250}
          />
          <div>
            <h1 className="text-[#1B396E] font-merriweather text-[18px] ">
              Benefits of Camera Systems
            </h1>
            <p className="pt-2 font-roboto">
              Discover the benefits of implementing advanced camera systems for
              your business, from improved security to monitoring capabilities.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              ducimus provident porro doloribus magni odio, labore itaque error
            </p>
          </div>
        </section>

       
        {/* Consultancy service section content */}

        <section className="flex flex-col justify-start items-start pb-5 gap-4 bg-[url('/image/Cyber.jpg')] bg-cover bg-center">
          <div className=" py-5 ">
            <h1 className="text-[#1B396E] font-merriweather text-10px text-2xl pb-3">
              Cybersecurity Consultancy Services
            </h1>
            <p className="text-[#1B396E] font-merriweather pb-3 text-sm ">
              Guiding your business towards a secure digital future
            </p>
          </div>

          <div className="">
            <Image
              className="max-sm:w-[400px]"
              src={Values}
              alt="My Image"
              width={250}
              height={250}
            />
            <div>
              <h1 className="text-[#1ABC9C] font-merriweather pt-3 text-[18px] ">
                Risk Assessment and Mitigation
              </h1>
              <p className="pt-3 font-roboto text-[#ffffff]">
                Our consultancy services include thorough risk assessment and
                strategic planning to mitigate potential cybersecurity threats.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati ducimus provident porro doloribus magni odio, labore
                itaque error
              </p>
            </div>
          </div>

          <div className="">
            <Image
              className="max-sm:w-[400px]"
              src={MyImagee}
              alt="My Image"
              width={250}
              height={250}
            />
            <div>
              <h1 className="text-[#1ABC9C] font-merriweather pt-3 text-[18px] ">
                Case Studies and Examples
              </h1>
              <p className="pt-3 font-roboto text-[#ffffff]">
                Explore our past consultancy work and see how we have helped
                businesses enhance their cybersecurity measures. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Obcaecati ducimus
                provident porro doloribus magni odio, labore itaque error
              </p>
            </div>
          </div>

        </section>

        {/* training service section content*/}

        <section className="hover:border-gray-500 bg-[url('/image/services.jpeg')] bg-cover bg-center max-md:pb-3 pt-5 pb-10">
          <div className=" px-6 py-7 ">
            <h1 className="text-[#1ABC9C] font-merriweather  text-2xl pb-3">
              Cybersecurity Training Programs
            </h1>
            <p className="text-[#1ABC9C] font-merriweather pb-3 text-sm ">
              Empowering you with the knowledge to protect against cyber threats
            </p>
          </div>
          <div className="flex flex-1 flex-row gap-5 max-sm:flex-wrap justify-evenly items-center">
            <div className="w-[300px] h-auto pb-3 rounded-2xl max-md:rounded-none max-md:w-screen   bg-[#2752BF] text-center shadow-2xl">
              <Image
                className="max-md:w-[550px] max-md:h-[200px] bg-contain max-md:rounded-none rounded-2xl"
                src={Teach}
                alt="My Image"
                width={300}
                height={300}
              />
              <div>
                <h1 className="text-[#1ABC9C] font-merriweather text-[18px] ">
                  Comprehensive Curriculum
                </h1>
                <p className="pt-3 font-roboto">
                  Our training programs cover a wide range of cybersecurity
                  topics, from network security to ethical hacking. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Obcaecati ducimus
                  provident porro doloribus magni odio, labore itaque error
                </p>
              </div>
            </div>
            <div className="w-[300px]  rounded-2xl h-auto pb-3 max-md:rounded-none max-md:w-screen bg-[#2752BF] text-center shadow-2xl">
              <Image
                className=" bg-contain rounded-2xl max-md:rounded-none max-md:w-[550px] max-md:h-[200px]"
                src={Teach}
                alt="My Image"
                width={300}
                height={300}
              />
              <div>
                <h1 className="text-[#1ABC9C] font-merriweather text-[18px] ">
                  Enrollment Information
                </h1>
                <p className="pt-3 font-roboto">
                  To enroll in our training programs or schedule a session,
                  please contact our team for more details. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Obcaecati ducimus
                  provident porro doloribus magni odio, labore itaque error
                </p>
              </div>
            </div>
            <div className="w-[300px] h-auto pb-10 max-md:w-screen max-md:rounded-none rounded-2xl bg-[#2752BF] text-center shadow-2xl">
              <Image
                className="bg-contain rounded-2xl max-md:rounded-none max-md:w-[550px] max-md:h-[200px]"
                src={video}
                alt="My Image"
                width={300}
                height={300}
              />
              <div>
                <h1 className="text-[#1ABC9C] font-merriweather text-[18px] ">
                  Expert Instructors
                </h1>
                <p className="pt-3 font-roboto">
                  Learn from industry professionals with years of experience in
                  cybersecurity and teaching. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Obcaecati ducimus provident
                  porro doloribus magni odio, labore itaque error
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-7 max-md:gap-3 max-md:pb-3">
            <input type="date" className="w-[20em] max-md:[15em] border-none outline-0 py-2 pl-5  bg-gray-500 mt-3"/> <br/>
           <button className="bg-gradient-to-r from-blue-500  to-red-500 mt-3 w-[15em] hover:bg-[#352163] hover:text-[#342a80] py-2">Book Now</button>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
