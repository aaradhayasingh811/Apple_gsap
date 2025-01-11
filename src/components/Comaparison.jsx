import React from "react";
import CmpareComp from "./CmpareComp";
import right from "../assets/images/right.svg";
import phonea from "../assets/images/phone1.jpg";
import phoneb from "../assets/images/phone2.jpg";
import procam1 from "../assets/images/5x.png";
import procam2 from "../assets/images/2x.png";
import pro1 from "../assets/images/core.png";
import pro2 from "../assets/images/coren.png";
import cam from "../assets/images/cameraControl.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


const Comaparison = () => {

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".comp-text", {
      duration: 2,
      delay: 1,
      y: -30,
      opacity: 1,
      scrollTrigger: {
        trigger: ".comp-text",
        start: "top 80%", 
        end: "bottom 20%", 
        toggleActions: "play none none none", 
        scrub:2
      },
    });

  })
  const list1 = [
    "Pro camera system",
    "Our most advanced 48MP Fusion camera",
    "5x Telephoto camera",
    "48MP Ultra Wide camera",
  ];

  const list2 = [
    "Advanced dual camera system",
    "Advanced 48MP Fusion camera",
    "2x Telephoto",
    "12MP Ultra Wide camera",
  ];

  const color1 =[
    "#a8907e",
    "#a6a198",
    "#dbdad7",
    "#202121"
  ]

  const color2 =[
    "#6473b0",
    "#6473b0",
    "#c981b0",
    "#e0e0e0",
    "#191b1c"
  ]

  return (
    <div className="bg-[#101010] min-[817px]:px-44 px-10">
      <div className="flex justify-between sm:flex-row flex-col">
        <h1 className="sm:text-6xl text-3xl text-[#86868b] font-semibold w-max py-10 comp-text opacity-0 translate-y-16">
          Keep exploring iPhone.
        </h1>
        <a
          href="#"
          className="flex justify-center items-center text-blue-400 w-max text-nowrap hover:underline"
        >
          Explore all iPhones
          <img src={right} alt="Arrow" className="h-4 w-4 ms-1" />
        </a>
      </div>
      <div className="flex min-[600px]:flex-row flex-col">
      <div>
        <CmpareComp
          imgSrc={phonea}
          name="iPhone 16 Pro"
          core="6"
          coreimg={pro1}
          camera={cam}
          proCam={procam1}
          camList={list1}
          batteryHour={33} // Pass as a number
          cost="119900.00"
          colorList ={color1}
        />
      </div>
      <div>
        <CmpareComp
          imgSrc={phoneb}
          name="iPhone 16"
          core="5"
          coreimg={pro2}
          camera={cam}
          proCam={procam2}
          camList={list2}
          batteryHour={27} // Pass as a number
          cost="79900.00"
          colorList ={color2}
        />
      </div>
      </div>
    </div>
  );
};

export default Comaparison;
