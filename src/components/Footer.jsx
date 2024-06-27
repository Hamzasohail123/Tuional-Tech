import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-blue-200 p-10">
        <div className='flex flex-col items-center justify-center'>
      {/* Notification Bar */}
      <div className="bg-blue-400 w-full lg:h-24 h-40 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-white p-4 rounded-md mb-10">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a.99.99 0 001.21-.08L21 8m-2 9H5c-.3 0-.58-.14-.77-.38a.99.99 0 01-.2-.85l1-5.02A1 1 0 016 10h12a1 1 0 01.97.82l1 5.02c.05.27.02.56-.1.82-.12.27-.33.47-.57.56l-1.53.64z" />
          </svg>
          <span className='font-bold'>Admission is open for the next year batch</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>+971 56 490 0376</span>
          <button className="bg-white text-blue-500 font-bold px-4 py-2 rounded-md hover:bg-blue-100">Contact us now</button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ">
        {/* About Us */}
        <div className='flex flex-col items-center'>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src="https://tuitionaledu.com/wp-content/uploads/2023/10/tuitional-logo.png" alt="Tuitional Logo" className="w-25 h-auto" />
          </div>
          <p className="text-gray-600">
            Tuitional is an Online Ed-Tech Platform. We do live tutoring classes for Grades 4-8, IGCSE, GCSE, & A-Levels etc for all boards like Cambridge, Pearson Edexcel.
          </p>        
        </div>
        <div className="flex gap-12 py-6 " >
            <a href="/" className="text-blue-500 hover:text-blue-600"><FaFacebookF size={24} /></a>
            <a href="/" className="text-blue-500 hover:text-blue-600"><FaInstagram size={24} /></a>
            <a href="/" className="text-blue-500 hover:text-blue-600"><FaLinkedin size={24} /></a>
          </div>
        </div>

        {/* Curriculums */}
        <div>
          <h3 className="font-bold text-xl mb-4">Curriculums</h3>
          <ul className="space-y-2 text-gray-600">
            <li>IGCSE Tuition</li>
            <li>IB Tuition</li>
            <li>PSLE Tuition</li>
            <li>Singapore O Level Tuition</li>
            <li>Singapore A Level Tuition</li>
            <li>SAT Tuition</li>
          </ul>
        </div>

        {/* Subjects */}
        <div>
          <h3 className="font-bold text-xl mb-4">Subjects</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Biology</li>
            <li>Mathematics</li>
            <li>Additional Mathematics</li>
            <li>Economics</li>
            <li>Accounting</li>
            <li>Business Studies</li>
            <li>Commerce</li>
            <li>Combined Science</li>
            <li>Double Science</li>
            <li>Triple Science</li>
          </ul>
        </div>

        {/* Get Help and About Us */}
        <div>
          <h3 className="font-bold text-xl mb-4">Get Help</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Features</li>
            <li>Privacy policy</li>
            <li>Terms & Conditions</li>
          </ul>
          <h3 className="font-bold text-xl mt-6 mb-4">About us</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Company</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-600">
        <hr className="border-gray-300 mb-4" />
        <p>All Rights Reserved ©2024 Tuitional</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
