import React, { useRef, useEffect } from "react";
import hero from "../assets/images/hero.jpeg";
import videoSrc from "../assets/videos/hero.mp4"
import smallVideoSrc from "../assets/videos/smallHero.mp4"
import gsap from "gsap";

const Hero = () => {
  const textRef = useRef(null);
  const iphoneRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current,
         { y: -30,
         duration: 1,
         delay:2,
         opacity:1,
         scrollTrigger:{
          trigger:textRef.current,
         }
        
        });
        gsap.to(iphoneRef.current,
            { 
            duration: 1,
            delay:2,
            opacity:1
           
           });
  }, []);

  return (
    <div style={{minHeight:"90vh"}}>
      <div className="">
        <h1 ref={iphoneRef} className="text-3xl font-semibold text-center text-[#94928d] sm:mt-16 mt-10 opacity-0">
          iPhone 15 Pro
        </h1>
      </div>
      <div className="sm:px-32 px-10 py-3 flex items-center justify-center">
        {/* <img src={hero} alt="hero_section" className="px-32 py-3" /> */}
        <video className="sm:block hidden pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
          <video className="sm:hidden h-96 block pointer-events-none" autoPlay muted playsInline={true} key={videoSrc} style={{width:"80%"}}>
            <source src={smallVideoSrc} type="video/mp4" />
          </video>
      </div>
      <div className="flex flex-col items-center opacity-0 translate-y-20" ref={textRef}>
        <div className="flex justify-center">
          <button className="px-5 py-2 text-white bg-[#2997ff] rounded-2xl w-max">
            Buy
          </button>
        </div>
        <div className="text-center my-5 font-normal text-lg">
          From $199/month or $999
        </div>
      </div>
    </div>
  );
};

export default Hero;
