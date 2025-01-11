import React from "react";
import a from "../assets/videos/explore.mp4";
import b from "../assets/images/explore1.jpg";
import c from "../assets/images/explore2.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Explore = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".word-play", {
      duration: 3,
      y: -50,
      opacity: 1,
      scrollTrigger: {
        trigger: ".word-play",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 2,
      },
    }),
      gsap.from(".img-exp", {
        duration: 5,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".img-exp",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 2,
        },
      }),
      gsap.to(".con-bottom",{
        duration: 2,
      delay: 1,
      y: -50,
      opacity: 1,
      scrollTrigger: {
        trigger: ".con-bottom",
        start: "top 80%", 
        end: "bottom 20%", 
        toggleActions: "play none none none", 
        scrub:2
      },
      })

  }, []);
  return (
    <div className="bg-[#101010] overflow-x-hidden w-full">
      <div className="sm:px-44 px-4 py-5">
        <div className="my-6 ">
          <h1 className="sm:text-6xl text-2xl font-semibold my-10 text-[#86868b] word-play opacity-0 translate-y-15">
            Explore the full story.
          </h1>
        </div>
        <div className="my-32 ms:mx-24 mx-14">
          <p className="sm:text-7xl text-5xl sm:my-4 font-bold">iPhone</p>
          <p className="sm:text-7xl text-5xl text-wrap sm:my-4 font-bold">
            Forged in titanium
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center">
            <video
              playsInline
              preload="none"
              className="object-cover object-center  h-[50vh] sm:w-[60vw] w-[100vw] "
              muted
              autoPlay
              loop
            >
              <source src={a} type="video/mp4" />
            </video>
          </div>
          <div className="flex sm:flex-row flex-col justify-center items-center">
            <div className="h-[50vh] sm:w-[30vw] w-[90vw] overflow-hidden">
              <img
                src={b}
                alt=""
                className="img-exp w-full h-full object-cover object-center scale-150  "
              />
            </div>
            <div className="h-[50vh] sm:w-[30vw] w-[90vw] overflow-hidden">
              <img
                src={c}
                alt=""
                className="img-exp w-full h-full object-cover object-center scale-150"
              />
            </div>
          </div>
        </div>
        <div className="con-bottom flex sm:flex-row flex-col text-[#86868b] text-lg my-20 w-[60vw] mx-auto font-medium opacity-0">
          <div className="">
            <p>
              {" "}
              iPhone 15 Pro is{" "}
              <span className="text-white">
                the first iPhone to feature an <br />
                aerospace-grade titanium design
              </span>
              , using the same <br /> alloy that spacecrafts use for missions to
              Mars.
            </p>
          </div>
          <div className="">
            <p>
              Titanium has one of the best strength-to-weight <br /> ratios of
              any metal, making these our{" "}
              <span className="text-white">
                lightest Pro <br /> models ever.
              </span>
              You'll notice the difference the <br /> moment you pick one up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
