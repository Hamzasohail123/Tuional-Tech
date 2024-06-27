import React from 'react';
import applyImg from '../Assests/apply.png'

const ApplyNow = () => {

    const gradientStyle = {
        background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(116, 203, 254,1) 100%)',
        // height: '100vh', 
        // width: '100%' 
        };

  return (
    <div style={gradientStyle} className="min-h-screen flex items-center justify-center p-6">
      <div  className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
        <img
            src={applyImg} // Replace with the actual image URL
            alt="Person"
            className="w-130 h-130"
          />
       
        </div>

        {/* Right Section */}
        <div className="order-1 lg:order-2 bg-white p-8 rounded-lg shadow-lg relative">
          <h2 className="text-2xl font-bold mb-6">Apply Now</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name*"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="I am parent*"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Country*"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Phone No*"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              placeholder="Position Apply For*"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center space-x-4">
              <label className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-300 transition duration-300">
                Choose File
                <input type="file" className="hidden" />
              </label>
              <span>No File Chosen</span>
            </div>
            <button className="bg-blue-500 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
              Submit Now
            </button>
          </form>
          <div className="absolute top-0 right-0 bg-blue-500 w-16 h-16 rounded-full transform translate-x-8 -translate-y-8"></div>
          <div className="absolute bottom-0 left-0 bg-blue-500 w-16 h-16 rounded-full transform -translate-x-8 translate-y-8"></div>
        </div>
      </div>
    </div>
  );
}

export default ApplyNow;
