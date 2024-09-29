"use client";
import Image from "next/image";
import download from "../../Images/download.jpeg";
import MyImagee from "../../Images/MyImagee.jpeg";
import services from "../../Images/services.jpeg";
import Teach from "../../Images/Teach.jpg";
import Values from "../../Images/Values.jpg";

const Services = () => {
  return (
    <div className="relative mt-[-2em] max-md:bg-[#BEB9B9] max-lg:bg[#BEB9B9]  ">
      <section
        className="  max-md:w-screen  h-auto relative -top-36  pt-32 pb-32 leading-10 -mb-32 lg:pl-[50px]  pl-[5px] "
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5380613/pexels-photo-5380613.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" h-auto pb-3 pt-16  max-md:w-full max-md:p-0  ">
          <h2 className="text-[#1B396E] max-md:text-4xl pt-10  max-md:pl-3 pl-10 text-6xl">
            Our Professional Services
          </h2>
          <p className="text-[#1B396E] max-md:pl-3 pt-5 pl-10 text-2xl">
            Securing your future in the digital world
          </p>
        </div>
      </section>

      <section className="px-20 max-lg:px-5">
          <div className=" py-7 ">
            <h1 className="text-[#1B396E] max-md:ml-5 max-lg:ml-5 ml-[11em] font-merriweather  text-2xl pb-3">
              Cybersecurity Training Programs
            </h1>
            <p className="text-[#1B396E] ml-[19em] font-merriweather pb-3 text-sm max-md:ml-5 max-lg:ml-5">
              Empowering you with the knowledge to protect against cyber threats
            </p>
          </div>

          <section className="flex flex-row gap-5 max-sm:flex-col max-lg:mx-14 max-md:mx-[-0.3em] max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black  max-lg:p-3 max-md:p-3 mt-3 ">
            <Image
              className="max-sm:w-[400px] max-md:p-3"
              src={Teach}
              alt="My Image"
              width={250}
              height={250}
            />
            <div>
              <h1 className="text-[#1B396E] font-merriweather max-md:p-3 text-[18px] ">
                Wide Range of Cameras
              </h1>
              <p className="pt-2 font-roboto max-lg:font-sans max-md:p-3">
                Our training programs cover a wide range of cybersecurity
                topics, from network security to ethical hacking. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Obcaecati ducimus
                provident porro doloribus magni odio, labore itaque error
              </p>
              <div>
                <button className="bg-gradient-to-r max-md:ml-3  p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                  Learn More
                </button>
              </div>
            </div>
          </section>

          <section className="flex flex-row gap-5 max-sm:flex-col max-lg:mx-14  max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:mx-[-0.3em] max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3 ">
            <Image
              className="max-sm:w-[400px] max-md:p-3"
              src={download}
              alt="My Image"
              width={250}
              height={250}
            />
            <div>
              <h1 className="text-[#1B396E] max-lg:font-sans  max-md:p-3 font-merriweather text-[18px] ">
              Proffesional certifications
              </h1>
              <p className="pt-2 font-roboto max-lg:font-sans  max-md:p-3">
              To enroll in our training programs or schedule a session, please contact our team for more details.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Obcaecati ducimus provident porro
                doloribus magni odio, labore itaque error
              </p>
              <div>
                <button className="bg-gradient-to-r  max-md:ml-3 max-md:p-3 p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                  Learn More
                </button>
              </div>
            </div>
          </section>
          
          
           
          <section className="flex flex-row gap-5 max-sm:flex-col max-lg:mx-14 max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:mx-[-0.3em] max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3 ">
            <Image
              className="max-sm:w-[400px] max-md:p-3"
              src={download}
              alt="My Image"
              width={250}
              height={250}
            />
            <div>
              <h1 className="text-[#1B396E] max-md:p-3 font-merriweather text-[18px] max-lg:font-sans  ">
              Seminar /Conference
              </h1>
              <p className="pt-2 font-roboto max-lg:font-sans  max-md:p-3">
              To enroll in our training programs or schedule a session, please contact our team for more details.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Obcaecati ducimus provident porro
                doloribus magni odio, labore itaque error
              </p>
              <div>
                <button className="bg-gradient-to-r  max-md:ml-3  max-md:p-3 p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                  Learn More
                </button>
              </div>
            </div>
          </section>
          

          <section className="flex flex-row gap-5 max-sm:flex-col max-lg:mx-14  max-md:mx-[-0.3em] max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3 ">
            <Image
              className="max-sm:w-[400px] max-md:p-3"
              src={download}
              alt="My Image"
              width={250}
              height={250}
            />
            <div>
              <h1 className="text-[#1B396E] max-md:p-3 font-merriweather text-[18px] max-lg:font-sans  ">
              Free Resources
              </h1>
              <p className="pt-2 font-roboto max-lg:font-sans  max-md:p-3">
              To enroll in our training programs or schedule a session, please contact our team for more details.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Obcaecati ducimus provident porro
                doloribus magni odio, labore itaque error
              </p>
              <div>
                <button className="bg-gradient-to-r  max-md:ml-3  max-md:p-3 p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                  Learn More
                </button>
              </div>
            </div>
          </section>
        </section>


      <div className="w-[100%] h-full  max-md:bg-[#BEB9B9] max-lg:bg[#BEB9B9] px-20 pb-2  max-md:px-5 mt-0 mx-auto ">
        <div>
          <h1 className="text-[#1B396E] max-lg:ml-0 font-merriweather text-10px text-2xl ml-[11em] max-md:ml-0  py-3">
            CCTV Camera Security Solution
          </h1>
          <p className="text-[#1B396E] max-lg:ml-0  font-merriweather pb-3 text-sm ml-[19em] max-md:ml-0  ">
            Guiding your business towards a secure digital future
          </p>
        </div>
        <section>
          <section className="flex flex-row gap-5 max-sm:flex-col max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3">
            <Image
              className="max-md:w-[400px] max-lg:w-[500px] max-md:p-3"
              src={services}
              alt="My Image"
              width={550}
              height={300}
            />
            <div data-aos="fade-up">
              <h1 className="text-[#1B396E] max-md:p-3  font-merriweather text-[18px] max-lg:font-sans ">
                Professional installation
              </h1>
              <p className="pt-2 font-roboto max-lg:font-sans  max-md:p-3 ">
                We work with a variety of camera types, including IP cameras,
                CCTV, and wireless systems, to fulfill your specific security
                needs. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati ducimus provident porro doloribus magni odio, labore
                itaque error
              </p>
              <div>
                <button className="bg-gradient-to-r max-md:ml-3  p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                  Learn More
                </button>
              </div>
            </div>
          </section>

          <section className="flex flex-row  max-md:w-full max-sm:flex-col-reverse max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3">
            <div className="max-lg:w-[50%] max-md:w-full">
              <h1 className="text-[#1B396E] max-md:ml-0 max-lg:ml-[3.5em] font-merriweather text-[18px] pt-2">
                consultating and assesment
              </h1>
              <p className="pt-2 max-lg:font-sans  font-roboto max-md:ml-0  max-lg:ml-[4em]  ">
                Our team ensures a smooth and efficient installation process,
                minimizing disruption to your daily operations.{" "}
                <span className="max-md:hidden max-lg:font-sans  max-lg:hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati ducimus provident porro doloribus magni odio, labore
                  itaque error
                </span>
              </p>
              <div>
                <button className="bg-gradient-to-r max-lg:ml-[3.5em] max-md:ml-0   p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                  Learn More
                </button>
              </div>
            </div>
            <div className=" rotate-[20deg] max-lg:rotate-0 max-md:p-3 p-10  max-md:rotate-0 ">
              <Image
                className="max-sm:w-[400px] "
                src={download}
                alt="My Image"
                width={450}
                height={250}
              />
            </div>
          </section>

          <section className="flex flex-row gap-5  max-md:w-full  max-sm:flex-col  max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border-  max-lg:p-3 max-md:p-3 mt-3">
            <Image
              className="max-sm:w-[400px] max-md:p-3"
              src={download}
              alt="My Image"
              width={250}
              height={250}
            />
            <div>
              <h1 className="text-[#1B396E] max-md:p-3 font-merriweather text-[18px] ">
                Maintenance and support
              </h1>
              <p className="pt-2 max-lg:font-sans  font-roboto max-md:p-3">
                Our team ensures a smooth and efficient installation process,
                minimizing disruption to your daily operations. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Obcaecati ducimus
                provident porro doloribus magni odio, labore itaque error
              </p>
              <div>
                <button className="bg-gradient-to-r max-md:ml-3  p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                  Learn More
                </button>
              </div>
            </div>
          </section>

          <section className="flex flex-row  max-md:w-full max-sm:flex-col-reverse max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3">
            <div className="max-lg:w-[50%] max-md:w-full">
              <h1 className="text-[#1B396E] max-md:ml-0 max-lg:ml-[3.5em] font-merriweather text-[18px] pt-2">
                System configuration
              </h1>
              <p className="pt-2 font-roboto max-md:ml-0  max-lg:ml-[4em] max-lg:font-sans  ">
                Our team ensures a smooth and efficient installation process,
                minimizing disruption to your daily operations.{" "}
                <span className="max-md:hidden max-lg:font-sans  max-lg:hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati ducimus provident porro doloribus magni odio, labore
                  itaque error
                </span>
              </p>
              <div>
                <button className="bg-gradient-to-r max-lg:ml-[3.5em] max-md:ml-0   p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                  Learn More
                </button>
              </div>
            </div>
            <div className=" rotate-[20deg] max-lg:rotate-0 max-md:p-3 p-10  max-md:rotate-0 ">
              <Image
                className="max-sm:w-[400px] "
                src={download}
                alt="My Image"
                width={450}
                height={250}
              />
            </div>
          </section>

          <section className="flex flex-row gap-5  max-md:w-full  max-sm:flex-col  max-md:pl-0 max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border-  max-lg:p-3 max-md:p-3 mt-3">
            <Image
              className="max-sm:w-[400px] max-md:p-3"
              src={download}
              alt="My Image"
              width={250}
              height={250}
            />
            <div>
              <h1 className="text-[#1B396E] max-md:p-3 font-merriweather text-[18px] ">
                UPgrade and expansion
              </h1>
              <p className="pt-2 font-roboto max-lg:font-sans  max-md:p-3">
                Discover the benefits of implementing advanced camera systems
                for your business, from improved security to monitoring
                capabilities. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Obcaecati ducimus provident porro doloribus magni odio,
                labore itaque error
              </p>
              <div>
                <button className="bg-gradient-to-r max-md:ml-3  p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                  Learn More
                </button>
              </div>
            </div>
          </section>

          <section className="flex flex-row  max-md:w-full max-sm:flex-col-reverse max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3">
            <div className="max-lg:w-[50%] max-md:w-full">
              <h1 className="text-[#1B396E] max-md:ml-0 max-lg:ml-[3.5em] font-merriweather text-[18px] pt-2">
                Training and internship
              </h1>
              <p className="pt-2 font-roboto max-lg:font-sans  max-md:ml-0  max-lg:ml-[4em]  ">
                Our team ensures a smooth and efficient installation process,
                minimizing disruption to your daily operations.{" "}
                <span className="max-md:hidden max-lg:font-sans  max-lg:hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati ducimus provident porro doloribus magni odio, labore
                  itaque error
                </span>
              </p>
              <div>
                <button className="bg-gradient-to-r max-lg:ml-[3.5em] max-md:ml-0   p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                  Learn More
                </button>
              </div>
            </div>
            <div className=" rotate-[20deg] max-lg:rotate-0 max-md:p-3 p-10  max-md:rotate-0 ">
              <Image
                className="max-sm:w-[400px] "
                src={download}
                alt="My Image"
                width={450}
                height={250}
              />
            </div>
          </section>
        </section>

        {/* Consultancy service section content */}

        <section className="flex flex-col justify-start items-start pb-5 gap-4">
          <div className=" py-5 ">
            <h1 className="text-[#1B396E] font-merriweather text-10px text-2xl pb-3">
              Cybersecurity Consultancy Services
            </h1>
            <p className="text-[#1B396E] font-merriweather pb-3 text-sm ">
              Guiding your business towards a secure digital future
            </p>
          </div>

          <div className="max-md:border-2 max-lg:border-2  max-md:border-black max-lg:w-[100%] max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3">
            <Image
              className="max-sm:w-[400px] max-md:p-3 "
              src={Values}
              alt="My Image"
              width={250}
              height={250}
            />
            <div>
              <h1 className="text-[#1ABC9C] font-merriweather pt-3 text-[18px] max-md:p-3  ">
                Cyber security AssAssessment
              </h1>
              <p className="pt-3 font-roboto max-lg:font-sans  max-md:p-3  ">
                Explore our past consultancy work and see how we have helped
                businesses enhance their cybersecurity measures. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Obcaecati ducimus
                provident porro doloribus magni odio, labore itaque error
              </p>
              <div>
                <button className="bg-gradient-to-r max-md:ml-3  p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3">
            <Image
              className="max-sm:w-[400px]"
              src={MyImagee}
              alt="My Image"
              width={250}
              height={250}
            />
            <div>
              <h1 className="text-[#1ABC9C] font-merriweather pt-3 text-[18px] ">
                IT securitsecurity
              </h1>
              <p className="pt-3 font-roboto max-lg:font-sans  ">
                We provide expert guidance on compliance with industry
                regulations and standards to ensure your business meets
                cybersecurity requirements. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Obcaecati ducimus provident porro
                doloribus magni odio, labore itaque error
              </p>
              <div>
                <button className="bg-gradient-to-r  p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3">
            <Image
              className="max-sm:w-[400px]"
              src={MyImagee}
              alt="My Image"
              width={250}
              height={250}
            />
            <div>
              <h1 className="text-[#1ABC9C] font-merriweather pt-3 text-[18px] ">
                Threat Intelligence
              </h1>
              <p className="pt-3 font-roboto max-lg:font-sans  ">
                Our consultancy services include thorough risk assessment and
                strategic planning to mitigate potential cybersecurity threats.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati ducimus provident porro doloribus magni odio, labore
                itaque error
              </p>
              <div>
                <button className="bg-gradient-to-r  p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="max-md:border-2 max-lg:border-2  max-md:border-black max-lg:border-black max-lg:border- max-lg:p-3 max-md:p-3 mt-3 ">
            <Image
              className="max-sm:w-[400px] max-md:p-3 "
              src={Values}
              alt="My Image"
              width={250}
              height={250}
            />
            <div>
              <h1 className="text-[#1ABC9C] font-merriweather pt-3 text-[18px] max-md:p-3  ">
                Third-party Risk Assessment
              </h1>
              <p className="pt-3 font-roboto max-lg:font-sans  max-md:p-3  ">
                Explore our past consultancy work and see how we have helped
                businesses enhance their cybersecurity measures. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Obcaecati ducimus
                provident porro doloribus magni odio, labore itaque error
              </p>
              <div>
                <button className="bg-gradient-to-r max-md:ml-3  p-2 mt-3 text-clip text-[18px] text-[#ffffff] hover:text-red-500 hover:bg-gradient-to-r hover:from-[#2682df] hover:to-[#175f54] from-[#e7c8c8] via-[#1B396E] to-[#45257b] shadow-[#71a7de]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* training service section content*/}

      
      </div>
    </div>
  );
};

export default Services;
