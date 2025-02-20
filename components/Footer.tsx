import React from 'react';

const Footer = () => {
  return (
    <div className='max-w-[72rem] mx-auto py-10'>
      <div className='flex flex-col-reverse items-center md:flex-row md:justify-between'>
        <div className='text-center md:text-left mb-4 md:mb-0'>
          <p className='leading-[1.625rem]'>© Copyright 2023, All Rights Reserved</p>
        </div>
        <div className='w-full md:w-auto text-center md:text-left text-[1rem] font-normal text-[#12141D]'>
          <span className="block mb-2 md:inline-block md:mb-0 md:mr-10 leading-[1.5rem]">Support</span>
          <span className="block mb-2 md:inline-block md:mb-0 md:mr-10 leading-[1.5rem]">Terms & Conditions</span>
          <span className=" md:whitespace-nowrap leading-[1.5rem]">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
