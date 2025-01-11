import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import a from '../assets/images/black.jpg';
import b from '../assets/images/blue.jpg';
import c from '../assets/images/white.jpg';
import d from '../assets/images/yellow.jpg';
import frame from '../assets/images/frame.png';

gsap.registerPlugin(ScrollTrigger);

const Model = () => {
  useGSAP(() => {
    gsap.to('.play', {
      duration: 2,
      y: -50,
      opacity: 1,
      scrollTrigger: {
        trigger: '.play',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 2,
      },
    });
  }, []);

  // Update image src dynamically
  const handleColorChange = (imageSrc) => {
    const imgElement = document.getElementById('mainImage');
    if (imgElement) {
      imgElement.src = imageSrc;
    }
  };

  return (
    <div className="bg-[#101010] overflow-x-hidden w-full relative">
      <div className="sm:px-44 px-4 py-5">
        <h1 className="text-5xl text-[#86868b] sm:py-20 play font-semibold opacity-0 sm:translate-y-15 translate-y-32 ">
          Take a Closer Look.
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center mx-auto rounded-lg relative my-20 h-[60vh] sm:h-[80vh]">
        {/* Frame */}
        <img
          src={frame}
          alt="Frame"
          className="bg-transparent relative sm:h-[40vh] sm:w-[70vw] h-[33vh] w-[92vw] lg:h-[44vh] z-10 rotate-90 lg:w-[55vw] md:h[44vh] md:w[30vw] overflow-hidden xl:h-[44vh] xl:w-[40vw]"
        />
        {/* Image inside the frame */}
        <img
          id="mainImage"
          src={a}
          alt="Main"
          className="absolute sm:h-[39vh] sm:w-[66vw] h-[30vh] w-[90vw] lg:w-[52vw] lg:h-[40vh] object-cover sm:rounded-[30px] rounded-[14px] rotate-90 md:h[44vh] md:w[30vw] xl:h-[42vh] xl:w-[38vw]"
        />
      </div>

      {/* Color Palette */}
      <div className="palette my-20 flex justify-center ">
        <div className=" bg-[#424245] w-max flex rounded-full p-2">
          {/* Buttons for changing colors */}
          <button
            style={{ borderRadius: '50%' }}
            className="mx-4 w-7 h-7 sm:w-10 sm:h-10 bg-[#1B1B1B]"
            onClick={() => handleColorChange(a)}
          ></button>
          <button
            style={{ borderRadius: '50%' }}
            className="mx-4 w-7 h-7 sm:w-10 sm:h-10 bg-[#2F4452]"
            onClick={() => handleColorChange(b)}
          ></button>
          <button
            style={{ borderRadius: '50%' }}
            className="mx-4 w-7 h-7 sm:w-10 sm:h-10 bg-[#DDDDDD]"
            onClick={() => handleColorChange(c)}
          ></button>
          <button
            style={{ borderRadius: '50%' }}
            className="mx-4 w-7 h-7 sm:w-10 sm:h-10 bg-[#E5E0C1]"
            onClick={() => handleColorChange(d)}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Model;
