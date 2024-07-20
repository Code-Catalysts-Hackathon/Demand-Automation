import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#3C5564] bg-opacity-60 z-[100] flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 250 250"
        fill="none"
        color="#FFFFFF"
        style={{ animation: 'spin 600ms linear infinite' }}>
        <defs>
          <linearGradient id="spinner-secondHalf">
            <stop offset="0%" stopOpacity="0" stopColor="currentColor" />
            <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
          </linearGradient>
          <linearGradient id="spinner-firstHalf">
            <stop offset="0%" stopOpacity="1" stopColor="currentColor" />
            <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
          </linearGradient>
        </defs>

        <g style={{ transform: 'translate(25px, 25px)' }} strokeWidth="15">
          <path stroke="url(#spinner-secondHalf)" d="M 4 100 A 96 96 0 0 1 196 100" />
          <path stroke="url(#spinner-firstHalf)" d="M 196 100 A 96 96 0 0 1 4 100" />

          <path stroke="currentColor" strokeLinecap="round" d="M 4 100 A 96 96 0 0 1 4 98" />
        </g>
      </svg>
    </div>
  );
};

export default Loader;
