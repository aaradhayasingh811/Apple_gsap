import React, { useRef, useEffect } from "react";
import logo from "../assets/images/chip.jpeg";
import frameVideo from "../assets/videos/frame.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Video = () => {
   const imgRef = useRef(null)
   useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".bottom-content", {
      duration: 2,
      delay: 1,
      y: -50,
      opacity: 1,
      scrollTrigger: {
        trigger: ".bottom-content",
        start: "top 80%", 
        end: "bottom 20%", 
        toggleActions: "play none none none", 
        scrub:2
      },
    });
    gsap.from(imgRef.current, {
        duration: 1,
        // delay: 1,
        scale: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".logo",
          start: "top 70%",
          end: "bottom 20%",
        //   scrub: 2,
        },
      });
      
  }, []);

  

  return (
    <div className="sm:px-44 px-5">
      {/* Logo Section */}
      <div className="flex justify-center mt-20 logo" ref={imgRef} >
        <img src={logo} alt="Chip Logo" className="w-44 h-44" />
      </div>

      {/* Header and Description */}
      <div className="flex flex-col items-center">
        <h2 className="text-center font-semibold text-7xl my-10 text-gray-100 mb-10">
          A17 Pro chip.
          <br /> A monster win for gaming.
        </h2>

        <p className="text-gray font-semibold text-xl md:text-2xl py-10 text-center text-[#86868b]">
          It's here. The biggest redesign in the history of Apple GPUs.
        </p>
      </div>

      {/* Video Section */}
      <div
        className="flex flex-col justify-center items-center mx-auto rounded-lg"
        style={{ width: "65%" }}
      >
        <video
          className="pointer-events-none"
          playsInline
          preload="none"
          muted
          autoPlay
        >
          <source src={frameVideo} type="video/mp4" />
        </video>
        <p className="text-gray font-semibold text-center mt-3 text-[#86868b]">
          Honkai: Star Rail
        </p>
      </div>

      {/* Animated Bottom Content */}
      <div className="mb-32 mt-16 flex bottom-content opacity-0 translate-y-20 sm:flex-row flex-col">
        <div>
          <p className="text-[#86868b] text-xl">
            A17 Pro is an entirely new class of iPhone chip that <br /> delivers
            our
            <span className="text-white"> best graphic performance by far</span>
            .
          </p>
          <br />
          <br />
          <p className="text-[#86868b] text-xl">
            Mobile{" "}
            <span className="text-white">
              games will look and feel so immersive
            </span>
            , with <br /> incredibly detailed environments and more realistic{" "}
            <br /> characters. And with industry-leading speed and <br />
            efficiency, A17 Pro takes fast and runs with it.
          </p>
        </div>
        <div className="flex flex-col sm:ml-10">
          <p className="text-[#86868b] text-xl">New</p>
          <br />
          <p className="text-5xl">Pro-class GPU</p>
          <p className="text-xl text-[#86868b] my-2">with 6 cores</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
