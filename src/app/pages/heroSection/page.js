import React from 'react'
import InfiniteText from '@/app/components/ui-components/InfinityText/page'

const HeroSection = () => {
  return (
    <div 
      className=" bg-[#999d9e] w-full h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Arrow + Label */}
      <div className="absolute right-5 bottom-[30%] md:right-24 md:bottom-2/3 md:translate-y-1/2 flex flex-col  gap-1 md:gap-2 z-50">
        {/* Arrow tilted */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 md:w-10 md:h-10 text-white animate-bounce rotate-[30deg]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 5v14m7-7-7 7-7-7"
          />
        </svg>

        {/* Text */}
        <span className="text-md md:text-4xl text-white  font-normal ">
          Freelance <br /> Designer & Developer
        </span>
      </div>

      {/* Location badge */}
      <div className="absolute left-0 bottom-3/4  md:bottom-80 flex items-center gap-2 md:gap-4 px-4 md:px-6 py-2 md:py-3 bg-[#1c1d21] rounded-r-full text-white">
        <span className="text-md md:text-lg font-medium whitespace-nowrap">
          Located <br/> in the <br /> India
        </span>

        <div className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-[#999d9e] flex items-center justify-center overflow-hidden">
          <img
            src="/globe1.png"
            alt="Globe"
            className="w-4 h-4 md:w-12 md:h-12 animate-spin-slow"
          />
        </div>
      </div>

      {/* Hero image */}
      <img
        src="/profile.png"
        alt="Profile"
        className="rounded-xl object-cover w-[400px] h-[500px] md:w-[500px] md:h-[600px] absolute bottom-0"
      />

      {/* Infinite Text */}
      <InfiniteText />
    </div>
  )
}

export default HeroSection
