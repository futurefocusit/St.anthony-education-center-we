'use client'
import { blogs, countries, posts, project, staff } from '@/components/homepage/constant';
import React from 'react'
import { TbMessageCircleFilled } from "react-icons/tb";
import { FaChevronLeft, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";
import { TiTick } from 'react-icons/ti';
import { ImQuotesRight } from 'react-icons/im';
import { FaFacebook, FaLessThan } from 'react-icons/fa6';
import { LiaLinkedinIn } from 'react-icons/lia';
import { IoStarSharp } from 'react-icons/io5';
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { PiPinterestLogo } from 'react-icons/pi';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <div className='h-fit pb-10 relative -top-36 pt-36 lg:flex -mb-32' style={{
        backgroundImage: `url('https://images.pexels.com/photos/5380590/pexels-photo-5380590.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className='flex flex-col gap-2 lg:gap-5'>
          <p className='text-[#1ABC9C] lg:text-[48px] text-[28px] text-center'>OUR STORY</p>
          <p className='text-[#FFFFFF] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[80px] xl:text-[96px] lg:leading-[70px] text-center px-2'>
            Secure Your Business, Your Career  And Your Home By CyberPro Group
          </p>
          <div className='bg-[#1ABC9C] w-[200px] h-2 mx-auto rounded-lg' />
          <button className='button text-[16px] text-white w-fit mx-auto px-4 py-2'>READ MORE</button>
        </div>
      </div>
      <div className="font-roboto min-h-screen w-full">
        {/* Feature section  */}
        <div className="flex justify-between items-center h-full">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-center text-center md:text-left m-auto">
            <h1 className="font-[800] text-teal-500 text-[24px] sm:text-[28px] md:text-[36px]">Feature</h1>
            <p className="font-[800] text-[32px] sm:text-[36px] md:text-[48px]">Discover Our Services</p>
            <div className="w-[150px] sm:w-[200px] md:w-[242px] h-[6px] sm:h-[7px] md:h-[9px] bg-custom-blue mt-4" />
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end items-end mt-6 md:mt-0">
            <TbMessageCircleFilled className="text-sky-400 md:text-[40px] w-10 h-10" />
          </div>
        </div>
        {/* cards */}
        <div className='flex items-start justify-center w-full gap-10 mt-10 card-holder'>
          {posts.map((post, index) => (
            <div key={index} className="relative card border border-gray-400 w-60 rounded-lg shadow-md max-w-full box-border mb-3 h-[25rem]">
              <div className="flex flex-col gap-2 text-center">
                <Image src={post.image} alt="cyber" width={90} height={90} className="w-full h-48 object-cover" />
                <h2 className="font-bold text-2xl">{post.title}</h2>
                <p className="text-sm text-gray-600 p-2">{post.content}</p>
              </div>
              <div className="absolute bottom-2 flex w-full items-center justify-center">
                <button className="bg-teal-500 rounded-full py-2 px-3 w-fit text-[7px] text-white">READ MORE</button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full items-center justify-center mt-5">
          <button className="bg-[#1B396E] py-2 px-3 w-fit text-[17px] text-white">Visit Service Page</button>
        </div>
        {/* about us */}
        <div className='flex flex-col md:flex-row justify-center items-center p-4'>
          <div className='flex flex-col items-center md:items-start text-center md:text-left'>
            <h1 className='text-[#1B396E] text-[24px] md:text-[36px]'>ABOUT US</h1>
            <p className='font-[800] text-[16px] md:text-[18px]'>
              Secure Your Business,<br /> Your Career And Your <br />Home By CyberPro <br /> Group
            </p>
            <div className='w-[30px] md:w-[50px] h-[5px] md:h-[7px] bg-[#1B396E] my-2'></div>
            <p className='w-full md:w-[691px] h-auto font-[300] text-sm'>
              CyberPro Academy&apos;s mission is to mitigate cybersecurity risk through instruction in cybersecurity, computer security, information security, and operations. We do so by providing high-quality classroom instruction and training to students, managers, executives, and employees with a focus on filling critical job-related skill gaps. The company will begin with a small group of practitioners/instructors who are subject-matter experts in our core offerings.
            </p>
            <div className="flex w-full justify-center md:justify-start mt-5">
              <button className="bg-[#1B396E] py-2 px-3 w-fit text-[15px] md:text-[17px] text-white">READ MORE</button>
            </div>
          </div>
          <div className='mt-4 md:mt-0 md:ml-8'>
            <Image src="https://images.pexels.com/photos/5240548/pexels-photo-5240548.jpeg?auto=compress&cs=tinysrgb&w=600" alt="CyberPro" width={90} height={90} className='w-[300px] md:w-[400px] h-[300px] md:h-[400px] object-cover' />
          </div>
        </div>

        {/* PORTFOLIO */}
        <div>
          <div className="flex flex-col justify-center items-center text-center md:text-left m-auto mb-10">
            <h1 className="font-[800] text-teal-500 text-[24px] sm:text-[28px] md:text-[36px]">Portfolio</h1>
            <p className="font-[800] text-[32px] sm:text-[36px] md:text-[48px]">View Our case study</p>
            <div className="w-[150px] sm:w-[200px] md:w-[242px] h-[6px] sm:h-[7px] md:h-[9px] bg-custom-blue mt-4" />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 bg-[#D9D9D9] pt-5 px-2 pb-24'>
            <div className='flex flex-col gap-8 p-5'>
              <h1 className='text-[40px] text-[#1B396E] leading-[40px]'>
                Our Featured Projects &
                <br />Case Studies.
              </h1>
              <p className='text-[16px] font-[500]'>
                Explore our portfolio of innovative solutions, detailing the challenges we&apos;ve solved and the successes we&apos;ve delivered for businesses across diverse industries.
              </p>
            </div>
            <div className='flex flex-wrap items-center gap-4 justify-center'>
              <div className='w-[150px] lg:w-[200px] h-[150px] lg:h-[200px] rounded-full overflow-hidden shadow-2xl shadow-white/10'>
                <Image src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg" alt="photo" width={90} height={90} className='w-full h-full object-cover' />
              </div>
              <div className='w-[200px] h-fit bg-white p-4 rounded-md'>
                <div className='flex items-center gap-3'>
                  <div className='bg-[#F39C12] w-[38px] h-[4px]' />
                  <p>
                    Mucyo Blaise
                  </p>
                </div>
                <p className='text-[10px]'>&quote;Working with EdgeReach Tech was a smooth and positive experience. Their clear communication and commitment to deadlines ensured the project stayed on track and delivered within budget.&quote;</p>
              </div>
            </div>
          </div>

          <div className='relative -top-20'>
            <div className='flex items-center justify-end'>
              <FaChevronLeft className='w-5 h-5 mr-3 hidden md:flex bg-white' />
              <div className='flex card-holder  justify-center items-center gap-2 w-full md:w-[600px] lg:w-[1000px] overflow-x-auto'>
                {project.map((project, index) => (
                  <div key={index} className='bg-[#D9D9D9]  min-w-fit h-fit pb-5'>
                    <Image src={project.Image} alt="" width={90} height={90} className='w-full h-32 object-cover clip-custom-shape' />
                    <h2 className="font-bold text-[24px] text-[#1B396E] text-center">{project.title}</h2>
                    <p className="text-[28px] p-2 text-[#1ABC9C]">{project.content}</p>
                    <div className="flex items-center justify-center gap-[2px]">
                      <IoIosStarOutline className='w-3 h-3 text-sky-500' />
                      <IoIosStarOutline className='w-3 h-3 text-sky-500' />
                      <IoIosStarOutline className='w-3 h-3 text-sky-500' />
                      <IoIosStarOutline className='w-3 h-3 text-sky-500' />
                      <IoIosStarOutline className='w-3 h-3 text-sky-500' />
                    </div>
                  </div>
                ))}
                <div className='lg:bg-[#D9D9D9] lg:w-[300PX] lg:h-[250px]'></div>
              </div>
            </div>
            <div className="flex w-full items-center justify-center mt-5">
              <button className="bg-[#1B396E] py-2 px-3 w-fit text-[17px] text-white">VIEW ALL</button>
            </div>
          </div>
        </div>
        {/* finance */}
        <div className=' bg-cover bg-center w-full  h-fit lg:h-[730px]   ' style={{ backgroundImage: `url('https://images.pexels.com/photos/8134239/pexels-photo-8134239.jpeg?auto=compress&cs=tinysrgb&w=600')` }}>
          <div className="flex flex-col justify-center items-center text-center md:text-left m-auto">
            <h1 className="font-[800] text-teal-500 text-[24px] sm:text-[28px] md:text-[36px]">FINANCE</h1>
            <p className="font-[800] text-[32px] sm:text-[36px] md:text-[28px] text-white">SECURE YOUR FUTURE TODAY</p>
            <div className="w-[80px] h-[6px] sm:h-[7px] md:h-[9px] bg-custom-blue mt-4" />
          </div>
          <div className='bg-white flex flex-col sm:flex-row justify-center items-center gap-10 w-full p-6 sm:p-10 mb-10 mt-6'>
            <p className='text-center sm:text-left '>Professional Training <br />(CyberPro Academy)</p>
            <div className='flex flex-col sm:flex-row'>
              <div className='flex flex-col lg:mx-10'>
                <p className='flex items-center'><TiTick size={20} />Professional Course</p>
                <p className='flex items-center'><TiTick size={20} />Professional Certification</p>
              </div>
              <div className='flex flex-col sm:ml-6'>
                <p className='flex items-center'><TiTick size={20} />Free Resource</p>
                <p className='flex items-center'><TiTick size={20} />Seminars/Conferences</p>
              </div>
            </div>
            <button className="bg-[#1B396E] py-2 px-3 w-[208px]   text-[15px] sm:text-[17px] text-white">ENROLL NOW</button>
          </div>
          <div className='bg-white flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 w-full p-6 sm:p-10 mb-10'>
            <p className='text-center sm:text-left'>CONSULTING SERVICES</p>
            <div className='flex flex-col sm:flex-row'>
              <div className='flex flex-col'>
                <p className='flex items-center'><TiTick size={20} />Cyber Security Assessments</p>
                <p className='flex items-center'><TiTick size={20} />IT Security Audit</p>
              </div>
              <div className='flex flex-col sm:ml-6'>
                <p className='flex items-center'><TiTick size={20} />Threat Intelligence</p>
                <p className='flex items-center'><TiTick size={20} />Third-Party Risk Assessment</p>
              </div>
            </div>
            <button className="bg-[#1B396E] py-2 px-3 w-[208px] text-[15px] sm:text-[17px] text-white">GET EXPERT ADVICE</button>
          </div>
          <div className='bg-white flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 w-full p-6 sm:p-10 mb-10'>
            <p className='text-center sm:text-left'>CCTV CAMERA SECURITY <br />SOLUTIONS</p>
            <div className='flex flex-col sm:flex-row'>
              <div className='flex flex-col'>
                <p className='flex items-center'><TiTick size={20} />Consultation And Assesment</p>
                <p className='flex items-center'><TiTick size={20} />Professional Installation</p>
                <p className='flex items-center'><TiTick size={20} />Upgrade And Explanation</p>
              </div>
              <div className='flex flex-col sm:ml-6'>
                <p className='flex items-center'><TiTick size={20} />System Configuration</p>
                <p className='flex items-center'><TiTick size={20} />Maintainance And Support</p>
                <p className='flex items-center'><TiTick size={20} />Training&Internship</p>
              </div>
            </div>
            <button className="bg-[#1B396E] py-2 px-3 w-[208px] text-[15px] sm:text-[17px] text-white">VIEW ALL</button>
          </div>

        </div>
        {/* tesimonies */}
        <h1 className='my-10 flex justify-center text-center font-[800] text-[36px] text-[#1ABC9C]'>TESTIMONIAL</h1>
        <div className='relative flex flex-col lg:flex-row'>
          <Image
            src="https://images.pexels.com/photos/5324988/pexels-photo-5324988.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={90}
            height={90}
            className='lg:relative lg:left-[600px] lg:w-[620px] md:max-w-xl max-w-full mx-6 lg:mx-0 h-[395px] object-cover'
          />

          <div className='lg:absolute lg:-left-[10px] lg:top-[0px] flex flex-col bg-[#D9D9D9] max-w-full md:max-w-xl p-3 mx-6 mb-6'>
            <ImQuotesRight className='w-[50px] h-[50px] md:w-[81px] md:h-[81px] text-sky-400' />

            <p className='font-[400] text-base md:text-lg mt-5 md:mt-10'>
              Explore our portfolio of innovative solutions, detailing the challenges we&apos;ve solved and the successes we&apos;ve delivered for businesses across diverse industries.
            </p>

            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mt-10 md:mt-20'>
              <div>
                <h1 className='font-[800] text-[24px] md:text-[36px] text-[#1B396E]'>FIACRE SMITH</h1>
                <h2 className='font-[300] text-[16px] md:text-[20px] text-[#1B396E]'>CEO - EDGEREACH TECH</h2>
              </div>

              <div className='flex gap-4 md:gap-10 mt-5 md:mt-8'>
                <FaLessThan size={20} className='bg-white rounded-3xl font-extrabold' />
                <FaGreaterThan size={20} className='bg-white rounded-3xl' />
              </div>
            </div>
          </div>
        </div>

        {/* custom rating and review */}

        <p className='w-full max-w-[625px] h-auto font-[800] text-[28px] sm:text-[36px] text-[#1ABC9C] text-center m-auto mt-10'>
          customer reviews and rating
        </p>

        <div className='flex flex-col lg:flex-row gap-3 mt-10'>
          <div className='bg-[#D9D9D9] max-w-[500px] w-full h-auto sm:h-[400px] p-4 sm:p-8 mx-auto flex flex-col items-center'>
            <h1 className='w-full text-center font-[800] text-[36px] sm:text-[28px] text-[#1B396E]'>CUSTOMER REVIEWS</h1>

            <div className='w-full max-w-[300px] pb-[5px] py-[3px] mb-6 gap-[10px] flex justify-center bg-[#F3F4FF] rounded-full'>
              <div className='flex items-center gap-2'>
                <IoStarSharp className='w-[20px] h-[20px] text-yellow-300' />
                <IoStarSharp className='w-[20px] h-[20px] text-yellow-300' />
                <IoStarSharp className='w-[20px] h-[20px] text-yellow-300' />
                <IoStarSharp className='w-[20px] h-[20px] text-yellow-300' />
                <IoStarSharp className='w-[20px] h-[20px] text-yellow-300' />
                <p className='font-bold text-[18px]'>4.7 Out Of 5</p>
              </div>
            </div>

            <p className='text-sm mb-6'>40 CUSTOMER Ratings</p>

            <div className='w-full max-w-[454px] bg-white p-4 space-y-2'>
              {/** Rating Bar Rows */}
              {[
                { label: '5 stars', percentage: '84%' },
                { label: '4 stars', percentage: '70%' },
                { label: '3 stars', percentage: '50%' },
                { label: '2 stars', percentage: '30%' },
                { label: '1 star', percentage: '10%' }
              ].map((rating, index) => (
                <div key={index} className='flex items-center justify-between'>
                  <p className='w-[60px] text-nowrap'>{rating.label}</p>
                  <div className='w-full h-3 bg-slate-300 mx-2'>
                    <div className='bg-yellow-300 h-3' style={{ width: rating.percentage }}></div>
                  </div>
                  <p>{rating.percentage}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='bg-[#D9D9D9] w-full max-w-[500px] h-auto sm:h-[400px] p-4 sm:p-8 mx-auto flex flex-col items-center'>
            <h1 className="font-[800] text-[#1B396E] text-[36px] sm:text-[28px] text-center mb-4">rate us</h1>
            <p className="font-[300] text-[14px] text-center text-[#2D2A2A] mb-6">FROM 1 TO 5</p>

            <div className='w-full max-w-[487px] py-[10px] mb-6 gap-[21px] flex justify-center bg-[#F3F4FF]'>
              <IoStarSharp className='w-[40px] sm:w-[54px] h-[40px] sm:h-[54px] text-yellow-300' />
              <IoStarSharp className='w-[40px] sm:w-[54px] h-[40px] sm:h-[54px] text-yellow-300' />
              <IoStarSharp className='w-[40px] sm:w-[54px] h-[40px] sm:h-[54px] text-yellow-300' />
              <IoStarSharp className='w-[40px] sm:w-[54px] h-[40px] sm:h-[54px] text-gray-300' />
              <IoStarSharp className='w-[40px] sm:w-[54px] h-[40px] sm:h-[54px] text-gray-300' />
            </div>

            <div className="flex w-full justify-center mt-5">
              <button className="bg-[#1B396E] py-2 px-4 sm:px-5 w-fit text-[16px] sm:text-[17px] text-white">CHOOSE</button>
            </div>
          </div>


        </div>


        {/* our staff  */}
        <div className="flex flex-col  justify-center items-center text-center md:text-left m-auto mt-11">
          <h1 className="font-[800] text-teal-500 text-[24px] sm:text-[28px] md:text-[36px]">OUR STAFF</h1>
          <p className="font-[800] text-[32px] sm:text-[36px] md:text-[48px] mb-5">MEET OUR TEAM</p>
        </div>
        <div className='flex card-holder  justify-center items-center gap-6 w-full md:w-[600px] lg:w-[1000px] m-auto'>
          {staff.map((staff, index) => (
            <div key={index} className='bg-[#D9D9D9] min-w-fit h-fit pb-5'>
              <Image src={staff.Image} alt="" width={90} height={90} className='w-full h-32 object-cover' />
              <h2 className="font-bold text-[24px] text-[#1B396E]  text-center">{staff.title}</h2>
              <p className="text-[28px] p-2 text-[#49454F] text-center">{staff.content}</p>
              <div className="flex items-center justify-center gap-[2px]">
                <LiaLinkedinIn className='w-3 h-3' />
                <FaInstagram className='w-3 h-3 ' />
                <FaTwitter className='w-3 h-3' />
                <FaFacebook className='w-3 h-3 ' />

              </div>
            </div>
          ))}
        </div>
        {/* contact page */}

        <div className='w-full h-auto mt-16 bg-cover bg-center ' style={{ backgroundImage: `url('https://media.istockphoto.com/id/1292545007/photo/female-hands-using-smartphone-while-sitting-in-home-office-room.jpg?s=612x612&w=0&k=20&c=x9Umo0bYowtiWt849JWZ3XZK-IgxbbsHUBU8k9siinE=')` }}>
          <h1 className='w-[265px] h-[60.57px] font-[800] text-[24px] sm:text-[36px] text-[#1ABC9C] text-center m-auto'>
            Contact
          </h1>
          <div className='flex flex-col lg:flex-row md:flex-row lg:gap-56 gap-10'>
            <div className='w-full max-w-[500px] lg:max-w-[300px] md:max-h-[600px] h-fit sm:h-[500px] p-6 sm:p-10 lg:m-6  ' style={{ background: 'linear-gradient(263.62deg, rgba(106, 151, 230, 0.94) 1.63%, rgba(27, 57, 110, 0.7238) 65.78%)' }}>
              <h1 className='w-full text-center font-[800] text-[20px] sm:text-[24px] text-[#1ABC9C] mb-4'>
                LETS START
              </h1>
              <p className='w-full text-center font-[800] text-[18px] sm:text-[20px] text-[#1B396E] mb-6'>
                SECURE YOUR <br /> FUTURE TODAY
              </p>
              <div className='w-[64px] h-[8px] bg-[#1B396E] mt-3 mx-auto mb-6' />
              <p className='w-full max-w-[555px] text-center font-[400] text-[14px] sm:text-[16px] mb-8'>
                Explore our portfolio of innovative solutions, detailing the challenges we’ve solved and the successes we’ve delivered for businesses across diverse industries.
              </p>
              <div className='flex flex-row items-center justify-center space-x-4'>
                <button className='bg-[#1ABC9C] py-2 px-4 text-[16px] sm:text-[17px] text-white'>
                  CONTACT US
                </button>
                <FaGreaterThan size={20} className='bg-white p-1 rounded-full' />
              </div>
            </div>

            <div className='flex flex-col'>


              {countries.map((country, index) => (
                <div className='flex flex-col justify-center' key={index}>
                  <h1 className='w-[77.38px] h-[39.31px] font-[800] text-[14px] text-[#1B396E] text-right lg:mx-52'>{country}</h1>
                  <div className='flex flex-row gap-6 lg:gap-40'>
                    <FaLocationDot className='w-[40px] h-[40px] text-red-500' />
                    <div className='flex flex-col'>
                      <p className='w-auto h-auto font-[700] text-[16px]'>KIGALI, RWANDA</p>
                    </div>
                  </div>
                  <div className='flex flex-row gap-6 lg:gap-40'>
                    <IoCall className='w-[40px] h-[40px] text-[#1B396E]' />
                    <p className='w-auto h-auto font-[700] text-[15px]'>
                      +250-733-770-003 <br /> +250-788-674-885
                    </p>
                  </div>
                  <div className='flex flex-row gap-6 lg:gap-40'>
                    <MdOutlineMailOutline className='w-[40px] h-[40px] text-red-500' />
                    <p className='w-auto h-auto font-[700] text-[16px]'>info@cyberprogroup.com</p>
                  </div>
                </div>
              ))}


              <div className='w-full max-w-[400px] py-[2px] mb-6 mt-10 gap-[21px] flex flex-col text-center justify-center bg-[#1B396E]'>
                <p className='w-auto h-auto font-[700] text-[20px] text-[#D9D9D9]'>FOLLOW US</p>
                <div className='flex flex-row justify-center space-x-4'>
                  <PiPinterestLogo className='w-[20px] lg:w-[30px] h-[20px] lg:h-[30px]' />
                  <FaGithub className='w-[20px] lg:w-[30px] h-[20px] lg:h-[30px]' />
                  <LiaLinkedinIn className='w-[20px] lg:w-[30px] h-[20px] lg:h-[30px]' />
                  <FaInstagram className='w-[20px] lg:w-[30px] h-[20px] lg:h-[30px]' />
                  <FaTwitter className='w-[20px] lg:w-[30px] h-[20px] lg:h-[30px]' />
                </div>

              </div>
            </div>
          </div>
        </div>


        {/* our blog */}

        <div className="flex flex-col justify-center items-center text-center md:text-left m-auto">
          <h1 className="font-[800] text-teal-500 text-[24px] sm:text-[28px] md:text-[36px] mt-10">WHAT&apos;S NEW?</h1>
          <p className="font-[800] text-[32px] sm:text-[36px] md:text-[48px]">OUR LATEST FROM BLOG</p>
        </div>

        <div className='flex items-start justify-center w-full gap-10 mt-10 card-holder'>
          {blogs.map((blog, index) => (
            <div key={index} className="relative card border border-gray-400 w-60 rounded-lg shadow-md max-w-full box-border mb-3 h-[500px]">
              <div className="flex flex-col gap-2 text-center">
                <Image src={blog.image} alt="cyber" width={90} height={90} className="w-full h-48 object-cover" />
                <h2 className="font-bold text-2xl">{blog.title}</h2>
                <p className="text-sm text-gray-600 p-2">{blog.content}</p>
              </div>
              <div className="absolute bottom-2 flex w-full items-center justify-center">
                <button className="bg-teal-500 rounded-full py-2 px-3 w-fit text-[7px] text-white">READ MORE</button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full items-center justify-center mt-5">
          <button className="bg-[#1B396E] py-2 px-3 w-fit text-[17px] text-white">VIEW MORE</button>
        </div>

        {/* map */}
        <div className='m-10'>
          <iframe className='w-full m-auto'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.775313606574!2d-122.03224420000001!3d37.2767548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e4ad38fa6a251%3A0x4462135701bcadcb!2sSaratoga%20Sunnyvale%20Rd%2C%20Saratoga%2C%20CA%2095070%2C%20USA!5e0!3m2!1sen!2srw!4v1726610527050!5m2!1sen!2srw"
            width="800"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Home;
