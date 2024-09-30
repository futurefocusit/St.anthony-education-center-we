import React from 'react';
import location from '../../assets/location (1).png';
import Image from 'next/image';
import time from '../../assets/clock.png';
import telephone from '../../assets/telephone (1).png';
import message from '../../assets/mail (1).png';
import image2 from '../../assets/image2.jpg'

const Contactus = () => {
  return (
    <div className='relative flex flex-col justify-center items-center'>

      <div className='relative bg-[#1b396e] h-[400px] md:h-[450px] lg:h-[450px] w-full overflow-hidden'>
        <Image src={image2} alt='image 2' layout='responsive' width={100} height={20} className='w-full opacity-10' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
          <p className='font-merriweather text-center text-xl md:text-[70px] text-[#ffffff] font-bold'>Get In Touch</p>
          <p className='font-roboto mt-6 md:mt-10 text-center text-[20px]'>Want to get in touch? we&apos;d love to hear from you. Here&apos;s how you can reach us.</p>
        </div>
      </div>

      <div className='relative bg-gradient-to-b from-gray-200 via-gray-200/90 w-full flex flex-col md:flex-col lg:flex-row overflow-hidden'>

        <div className='p-5 md:p-10 flex justify-center items-center w-full md:w-full lg:w-1/2'>
          <iframe className='shadow-xl w-full h-[300px] md:h-[400px] lg:h-[500px]'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.775313606574!2d-122.03224420000001!3d37.2767548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e4ad38fa6a251%3A0x4462135701bcadcb!2sSaratoga%20Sunnyvale%20Rd%2C%20Saratoga%2C%20CA%2095070%2C%20USA!5e0!3m2!1sen!2srw!4v1726610527050!5m2!1sen!2srw"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className='flex flex-col p-10 md:p-5 md:mt-10 lg:mt-10 w-full md:w-full lg:w-1/2'>
          <p className='font-roboto text-center text-[#1e1e1e] mb-5 font-extralight md:max-w-[350px] lg:max-w-full'>Bookings for our cybersecurity consultations are managed by SecureTech Solutions</p>
          <h1 className='text-[1.7rem] text-[#1b396e] text-center font-normal font-merriweather pb-2'>Connect With Us</h1>

          <div className='flex flex-col mt-3 items-center'>
            <div className='flex flex-row items-center'>
              <Image src={message} alt="message image" width={20} />
              <p className='ml-2 text-[#1e1e1e] font-thin'>uwinezajd2@gmail.com</p>
            </div>

            <div className='flex flex-row items-center mt-2'>
              <Image src={telephone} alt="telephone image" width={20} />
              <p className='ml-2 text-[#1e1e1e] font-thin'>+250 789 4532</p>
            </div>

            <h1 className='text-[1.5rem] text-[#1b396e] text-center font-normal font-merriweather pb-2 mt-10 mb-3'>Where to Find Us</h1>

            <div className='flex flex-row items-center'>
              <Image src={location} alt="location image" width={20} />
              <p className='ml-2 mt-5 text-[#1e1e1e] font-thin text-center max-w-lg'>123 Sunnyvale Rd, San Jose California <br />
                United States</p>
            </div>

            <div className='flex flex-row items-center mt-2'>
              <Image src={time} alt="time image" width={20} />
              <p className='ml-2 text-[#1e1e1e] font-thin'>Mon-Fri 10am-5pm, Sat 1pm-5pm</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center rounded-xl mt-10'>
        <div className='flex flex-col items-center mb-16 md:mb-24'>
          <h1 className='font-merriweather text-[20px] md:text-[30px] lg:text-[30px] text-[#1b396e] font-bold'>Have a Question? Contact Us.</h1>
          <div className='bg-[#f39c12] w-32 h-2 md:w-48 lg:w-48 md:h-2 lg:h-2 rounded-2xl mt-2 md:mt-3' />
        </div>

        <div className='flex flex-col m-2'>
          <input type="text" placeholder='Please Enter Your name'
            className='bg-[#ffff] w-[350px] md:w-[700px] h-14 md:h-14 text-[#1e1e1e] border border-[#363636] outline-[#1b396e] text-[20px] font-roboto text-start pl-3 rounded-[5px]' />
        </div>

        <div className='flex flex-col m-2'>
          <input type="text" placeholder='Please Enter Your Email'
            className='bg-[#ffff] w-[350px] md:w-[700px] h-14 md:h-14 text-[#1e1e1e] border border-[#363636] outline-[#1b396e] text-[20px] font-roboto text-start pl-3 rounded-[5px]' />
        </div>

        <div className='flex flex-col m-2'>
          <input type="text" placeholder='Enter Subject'
            className='bg-[#ffff] w-[350px] md:w-[700px] h-14 md:h-14 text-[#1e1e1e] border border-[#363636] outline-[#1b396e] text-[20px] font-roboto text-start pl-3 rounded-[5px]' />
        </div>

        <div className='flex flex-col m-2'>
          <textarea placeholder='Enter Your Message'
            className='bg-[#ffff] w-[350px] md:w-[700px] min-h-52 md:min-h-72 text-[#1e1e1e] border border-[#363636] outline-[#1b396e] text-[20px] font-roboto text-start pl-3 rounded-[5px]' />
        </div>

        <div className='flex flex-col m-2'>
          <button id='submit'
            className='bg-[#1b396e] w-[350px] md:w-[700px] h-10 text-center border-none outline-none text-[20px] font-roboto pl-3 rounded-[5px] text-[#ffff] font-bold transition-all duration-300 ease-in-out hover:bg-[#2c3e5d~] active:bg-[#6f9be6]'>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
