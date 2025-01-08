import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import rightImg from "../assets/images/right.svg";
import watchImg from "../assets/images/watch.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoCara from "./VideoCara";

const Highlights = () => {

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".textRef",{
      y:-50,
      duration:2,
      stagger:0.1,
      opacity:1,
      scrollTrigger:{
        trigger: ".textRef",
        start:"top 80%",
        end:"bottom 20%",
        scrub:3
      }
    })
  })


  return (
    <>
      <div className="highlights overflow-hidden" style={{background:"#101010"}}>
        <div className="flex md:px-44 py-20 sm:px-20 px-10 overflow-hidden justify-center md:flex-row flex-col ">
        <div className="">
          <h1 className="textRef sm:text-6xl text-3xl text-[#86868b] opacity-0">Get the highlights.</h1>
        </div>
        <div className="flex items-end sm:justify-center justify-start md:my-0 mt-6">
          <div className="flex items-center w-max me-4 text-xl text-[#2997ff] hover:underline">
            <h1 className="textRef w-max me-2 opacity-0 translate-y-10">Watch the film </h1>
            <img src={watchImg} alt="" className="textRef w-4 h-4 opacity-0 translate-y-10" />
          </div>
          <div className="flex items-center w-max mx-4 text-xl text-[#2997ff] hover:underline">
            <h1 className="textRef w-max me-2 opacity-0 translate-y-10">Watch the event </h1>
          <img src={rightImg} alt="" className="textRef w-4 h-4 opacity-0 translate-y-10" />
          </div>
          </div>
        </div>
        <VideoCara/>
      </div>
    </>
  );
};

export default Highlights;
