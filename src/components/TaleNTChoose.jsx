import React from 'react';
import about1 from '../Assests/about1.png'
import about3 from '../Assests/about3.png'

const TalentChoose = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6 lg:p-12 lg:mb-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Images Section */}
        <div className="flex border-0 border-red-500 relative mt-16 lg:mt-0 ">
          <div className="md:ml-[25%] lg:ml-[0%] left-[25%] lg:left-[0%]">
            <img
              src={about1} 
              alt="Man with Tablet"
              className=" rounded-lg shadow-lg"
            />
            {/* <div className="absolute inset-0  opacity-30 rounded-lg"></div> */}
          </div>
          <div className="absolute top-[50%] left-[25%] md:left-[40%] lg:left-[25%] lg:top-[50%]">
            <img
              src={about3} 
              alt="Woman with Laptop"
              className=" rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-6 border-0 border-red-500 mt-48 lg:mt-0">
          <h2 className="text-3xl font-bold">
            Why Top Talent Chooses <span className="text-blue-500">Tuitional</span>
          </h2>
          <p className="text-gray-600">
            Tuitional builds products that transform experience and know-how into thriving businesses. We believe shared knowledge has the power to change lives, and by enabling people to share what they know we create a better world together.
          </p>
          <p className="text-gray-600">
            We’re on a mission to empower creators to transform their knowledge into income. We’re looking for talented individuals with diverse interests to help power what we do.
          </p>
          <button className="bg-[#41d2f7] w-auto self-start text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#38b5d4] transition duration-300">
            Get In Touch
          </button>
        </div>

      </div>
    </div>
  );
}

export default TalentChoose;
