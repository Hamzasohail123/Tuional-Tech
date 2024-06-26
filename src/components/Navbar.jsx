import React from "react";
import { FaBars } from 'react-icons/fa';
import { TbBackground } from "react-icons/tb";

function Navbar() {

  const gradientStyle = {
    // background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 15%, rgba(116, 203, 254,1) 100%)',
    // height: '100vh', 
    // width: '100%' 
    background: 'linear-gradient(180deg, lightblue, transparent)',
    };

  return (
    <div style={{gradientStyle}} className="border-0 border-red-500">
      <header className="py-5 bg-white shadow-lg mx-8 rounded-lg border-0 border-red-500 mt-6">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <img
                  src="https://tuitionaledu.com/wp-content/uploads/2023/10/tuitional-logo.png"
                  className="w-[10rem] md:w-30 md:h-10"
                  alt=""
                />
              </a>
            </div>
            <div className="lg:hidden block">
             <FaBars size={24} style={{ color: '#38B6FF' }}/>
            </div>
            <div className="hidden lg:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="transition font-semibold mx-2 xl:mx-3 hover:text-gray-500/75"
                      href="/"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="transition font-semibold mx-2 xl:mx-3 hover:text-gray-500/75"
                      href="/"
                    >
                      {" "}
                      Careers{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="transition font-semibold mx-2 xl:mx-3 hover:text-gray-500/75"
                      href="/"
                    >
                      {" "}
                      History{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="transition font-semibold mx-2 xl:mx-3 hover:text-gray-500/75"
                      href="/"
                    >
                      {" "}
                      Services{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="transition font-semibold mx-2 xl:mx-3 hover:text-gray-500/75"
                      href="/"
                    >
                      {" "}
                      Projects{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="transition font-semibold mx-2 xl:mx-3 hover:text-gray-500/75"
                      href="/"
                    >
                      {" "}
                      Blog{" "}
                    </a>
                  </li>

                  <li>
                    <button className="hidden xl:block p-4 px-6 xl:px-10 bg-transparent font-semibold text-green-800 border-[3px] border-green-800 rounded-lg">
                      AI Digital Sat
                    </button>
                  </li>
                  <li>
                    <button className="p-4 px-6 xl:px-10 bg-[#38B6FF] text-white font-semibold  rounded-lg shadow-md">
                      Book Demo Classes
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            {/* <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
            href="/"
          >
            AI Digital Sat
          </a>

          <div className="hidden sm:flex">
            <a
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
              href="/"
            >
              Book Demo Classes
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div> */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
