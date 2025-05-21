import React, { useEffect, useRef } from 'react';
import App from './App';

const Loader = ({ onComplete }) => {
 const loaderRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.style.top = '-100%';
        if (onComplete) {
          onComplete(); // Notify App that loader animation is complete
        }
      }
    }, 4200);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-gradient-to-r from-orange-500 to-red-500 z-[999] flex items-center justify-center transition-all duration-700 ease-in-out"
    >
        <h1  className="absolute text-[4vw] font-bold bg-gradient-to-r from-black to-white bg-clip-text text-transparent animate-load0"

        style={{ animationDelay: '2s' }}>SKYBOUND STUDIO</h1>
      <div className="animate-load flex items-center justify-center flex-col ">
        <img
          src="src/assets/Logo/SKYBOUND.jpg"
          alt="Logo"
          className="w-[60vw] h-[60vw] md:w-[40vw] md:h-[30vw] animate-load rounded-full"
          style={{ animationDelay: '3s' }}
        />
       
      </div>

      <style jsx>{`
        @keyframes load0{
        0% {
          opacity: 0;
        }
        90% {
          opacity: 1;

        }
        100% {
          transform: translateY(230px);
          opacity: 0;
        }
        }
        @keyframes load {
          0% {
            opacity: 0;
          }
          10% {
            opacity: 1;
            // transform: translateX(40px);

          }   
          30%{
          transform: translateX(40px);
          }
          50%{
             transform: rotateY(30deg);
          }
          90% {
            opacity: 1;
            transform: translateY(100px);
          }
          100% {
             transform: translateY(-100px);
             opacity: 0;
          }
        }
        .animate-load {
          animation: load 4s linear forwards;
        }
        .animate-load0 {
          animation: load0 4s linear forwards;
        }
        @media (max-width: 600px) {
          h1 {
            font-size: 11vw;
            // margin-bottom: -280px;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;