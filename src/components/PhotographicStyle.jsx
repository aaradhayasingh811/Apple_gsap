import React from "react";
import a from "../assets/images/style1.jpg";
import b from "../assets/images/style2.jpg";
import c from "../assets/images/style3.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const PhotographicStyle = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    

    gsap.to(".text-style", {
      stagger: 1,
      scrollTrigger: {
        trigger: ".text-style",
        scrub: 1,
        start: "top 80%",
        end: "bottom 20%",
      },
    });
  }, []);

  return (
    <div className="sm:px-44 px-10 sm:my-32 my-20">
      <div className="text-center sm:text-6xl text-4xl mb-20 text-[#94928d]">
        <h1 className="my-3 font-semibold">Choose your</h1>
        <h1 className="my-3 font-semibold">Photographic Style.</h1>
        <h1 className="my-3 font-semibold">Change it up. Change it back.</h1>
      </div>
      <div className="flex flex-col sm:gap-y-0 gap-y-10 div-scroll">
        <div className="md:h-screen flex md:flex-row flex-col justify-center items-center">
          <div className="md:px-20 sm:px-10 px-5 flex flex-col items-center justify-center text-style">
            <h1 className="text-4xl font-semibold mb-8">Lock in your look.</h1>
            <p className="text-lg font-semibold text-[#86868b]">
              We’ve created new styles that let you{" "}
              <span className="text-white">
                dial in your exact desired look with more advanced skin-tone
                rendering
              </span>{" "}
              and set it across your photos.
            </p>
          </div>
          <div className="my-4 sm:mb-0 flex justify-center items-center">
            <img src={a} alt="Style 1" className="sm:h-screen w-[60%]" />
          </div>
        </div>
        <div className="md:h-screen flex md:flex-row flex-col justify-center items-center">
          <div className="md:px-20 sm:px-10 px-5 flex flex-col items-center justify-center text-style">
            <h1 className="text-4xl font-semibold mb-8">
              Align with your aesthetic.
            </h1>
            <p className="text-lg font-semibold text-[#86868b]">
              Our improved image pipeline also enables more creative styles,
              which allow you to{" "}
              <span className="text-white">
                customise the different moods of a photo
              </span>{" "}
              through colour.
            </p>
          </div>
          <div className="my-4 sm:mb-0 flex justify-center items-center">
            <img src={b} alt="Style 2" className="sm:h-screen w-[60%]" />
          </div>
        </div>
        <div className="md:h-screen flex md:flex-row flex-col justify-center items-center">
          <div className="md:px-20 sm:px-10 px-5 flex flex-col items-center justify-center text-style">
            <h1 className="text-4xl font-semibold mb-8">
              Make the most of your megapixels.
            </h1>
            <p className="text-lg font-semibold text-[#86868b]">
              Personalise every style even more with the new control pad, which
              makes it{" "}
              <span className="text-white">
                easy to adjust tone and colour simultaneously.
              </span>{" "}
              You can also use the slider to adjust the intensity of the
              specific colours, instead of applying a one-size-fits-all
              approach.
            </p>
          </div>
          <div className="my-4 sm:mb-0 flex justify-center items-center">
            <img src={c} alt="Style 3" className="sm:h-screen w-[60%]" />
          </div>
        </div>
      </div>
    </div>
  );
};
