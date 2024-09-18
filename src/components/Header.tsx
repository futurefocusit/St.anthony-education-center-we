import React from 'react'
import NavigationBar from './HeaderAndFooter/Navigationbar';
import './HeaderAndFooter/style.css';

const Header = () => {
  return (
    <div className='h-fit pb-10' style={{
      backgroundImage: `url('https://images.pexels.com/photos/5380590/pexels-photo-5380590.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <NavigationBar />
      <div className='flex flex-col gap-2 lg:gap-5'>
        <p className='text-[#1ABC9C] lg:text-[48px] text-[28px] text-center'>OUR STORY</p>
        <p className='text-[#FFFFFF] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[80px] xl:text-[96px] lg:leading-[70px] text-center px-2'>
          Secure Your Business, Your Career  And Your Home By CyberPro Group
        </p>
        <div className='bg-[#1ABC9C] w-[200px] h-2 mx-auto rounded-lg' />
        <button className='button text-[16px] text-white w-fit mx-auto px-4 py-2'>READ MORE</button>
      </div>
    </div>
  )
}

export default Header;
