'use client';

import {showToastDevelopment} from '@/utils/showToast';

const HHHeader = () => {
  return (
    <header className="bg-[#f4f4f4] text-black text-lg p-4 w:lg-1/3 mx-auto mt-10 rounded-full font-sans">
      <div className="flex justify-center text-[#4F4F4F]">
        <a
          className="flex justify-center mx-12 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            showToastDevelopment();
          }}
        >
          <h3 className="text-left">Research Group Information</h3>
          <svg
            className="mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M7.58331 18.4166L18.4166 7.58331"
              stroke="#36DDC4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.58331 7.58331H18.4166V18.4166"
              stroke="#36DDC4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <a
          className="flex justify-center mx-12 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            showToastDevelopment();
          }}
        >
          <h3 className="text-right">Project Information</h3>
          <svg
            className="mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M7.58331 18.4166L18.4166 7.58331"
              stroke="#36DDC4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.58331 7.58331H18.4166V18.4166"
              stroke="#36DDC4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </header>
  );
};

export default HHHeader;
