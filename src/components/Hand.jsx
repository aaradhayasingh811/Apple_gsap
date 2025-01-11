import React from "react";
import texthand from "../assets/images/text-hand.jpg";
import hand from "../assets/images/hand.jpg";
import { useGSAP } from "@gsap/react";
import gsap, { Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Hand = () => {
    gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".image-hand", {
      duration: 3,
      rotateY: 45,
      delay: 1,
      scrollTrigger: {
        trigger: ".image-hand",
        start: "top 70%",
        end: "bottom 40%",
        scrub: 3,
      },
    });
    gsap.to(".hand-text", {
      duration: 2,
      delay: 1,
      y: -50,
      opacity: 1,
      scrollTrigger: {
        trigger: ".hand-text",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        scrub: 2,
      },
    });
    gsap.to(".hand-border", {
      duration: 2,
      delay: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: ".hand-border",
        start: "top 60%",
        end: "bottom 30%",
        toggleActions: "play none none none",
        scrub: 2,
      },
    });
  }, []);
  return (
    <div className="pb-20 flex items-center justify-center flex-col ">
      <div
        className="hand-border opacity-0 h-[50px] blur-2xl"
        style={{
          background: "linear-gradient(90deg, #007aff, #ff2d55, #ff9500)",
        }}
      ></div>
      <div className="">
        <img src={texthand} alt="" />
      </div>
      <div className="flex justify-center image-hand">
        <img
          src={hand}
          alt=""
          className="h-[40vh]"
          style={{ height: "30%", width: "60%" }}
        />
      </div>
      <div className="sm:w-[40%] w-[80%] text-[#86868b] translate-y-20 hand-text sm:text-xl text-lg sm:my-0 my-4 font-semibold text-center opacity-0">
        <p>
          iPhone 16 Pro is built for Apple Intelligence, the personal
          intelligence system that helps you{" "}
          <span className="text-white">
            write, express yourself and get things done effortlessly
          </span>
          . With groundbreaking privacy protections, it gives you peace of mind
          that no one else can access your data — not even Apple.
        </p>
      </div>
    </div>
  );
};
