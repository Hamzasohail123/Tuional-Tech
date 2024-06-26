import React from "react";
import girlImage from '../Assests/girl-with-book 1.png'

function HeroSection() {

  const gradientStyle = {
    background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(116, 203, 254,1) 100%)',
    // height: '100vh', 
    // width: '100%' 
    };

  return (
    <div className="mt-5 h-300px">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8" style={gradientStyle}>
        <div className="flex flex-col items-center lg:items-start justify-center mx-10">
            <h1 className="mt-10 lg:mt-0 text-3xl lg:text-4xl leading-[3.1rem] font-semibold text-center lg:text-start">Let's build Awesome things <span className="font-bold text-[#51B893]">together</span> </h1>
            <p className="text-md  lg:text-xl my-5 text-center lg:mb-10 lg:text-start">Passionate Educators and change Lives</p>
            <button className="border bg-[#41d2f7] font-semibold p-4 rounded-lg text-white">Get in Touch</button>
        </div>
        <div className="lg:col-span-2 mt-10 md:mt-0 " >
            <img src={girlImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
