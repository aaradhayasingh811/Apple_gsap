import React, { useState } from "react";
import zoom from "../assets/images/zoom.jpg";
import camera from "../assets/images/camera.jpg"

import { useGSAP } from "@gsap/react";
import gsap, { Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Zoom = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [value, setValue] = useState("");
  const [activeButton, setActiveButton] = useState(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".zoom-text", {
      duration: 2,
      delay: 1,
      y: -50,
      opacity: 1,
      scrollTrigger: {
        trigger: ".zoom-text",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        scrub: 2,
      },
    });
   
  }, []);
  const zoomOnClick = (scale, e) => {
    setZoomLevel(scale / 100);
    const value = e.target.value;
    setValue(value);
    setActiveButton(e.target.value);
  };

  return (
    <div>
      <div className="sm:px-44 flex flex-col items-center justify-center">
        <div className="h-[70%] w-[70%] overflow-hidden">
          <img
            src={zoom}
            alt="zoom"
            className="image transition-transform duration-500 object-cover"
            style={{ transform: `scale(${zoomLevel})` }}
          />
        </div>

        <div className="flex flex-col items-center justify-center my-10">
          <div className="zoom-pallete text-[#f5f5f7] bg-[#333336] rounded-full lg:w-[70%] sm:w-[100%] sm:flex hidden p-2">
            <button
              className={`p-2 rounded-full ${
                activeButton === "0.5x Macro"
                  ? "bg-[#f5f5f7] text-[#333336]"
                  : ""
              }`}
              onClick={(e) => zoomOnClick(100, e)}
              value="0.5x Macro"
            >
              Macro
            </button>
            <button
              className={`p-2 rounded-full ${
                activeButton === "0.5x Ultra wide"
                  ? "bg-[#f5f5f7] text-[#333336]"
                  : ""
              }`}
              onClick={(e) => zoomOnClick(110, e)}
              value="0.5x Ultra wide"
            >
              13mm
            </button>
            <button
              className={`p-2 rounded-full ${
                activeButton === "1x Fusion 24 mm"
                  ? "bg-[#f5f5f7] text-[#333336]"
                  : ""
              }`}
              onClick={(e) => zoomOnClick(120, e)}
              value="1x Fusion 24 mm"
            >
              24mm
            </button>
            <button
              className={`p-2 rounded-full ${
                activeButton === "1x Fusion 28 mm"
                  ? "bg-[#f5f5f7] text-[#333336]"
                  : ""
              }`}
              onClick={(e) => zoomOnClick(130, e)}
              value="1x Fusion 28 mm"
            >
              28mm
            </button>
            <button
              className={`p-2 rounded-full ${
                activeButton === "1.5x Fusion 35 mm"
                  ? "bg-[#f5f5f7] text-[#333336]"
                  : ""
              } md:inline hidden`}
              onClick={(e) => zoomOnClick(150, e)}
              value="1.5x Fusion 35 mm"
            >
              35mm
            </button>
            <button
              className={`p-2 rounded-full ${
                activeButton === "2x Telephoto"
                  ? "bg-[#f5f5f7] text-[#333336]"
                  : ""
              } lg:inline hidden`}
              onClick={(e) => zoomOnClick(170, e)}
              value="2x Telephoto"
            >
              48mm
            </button>
            <button
              className={`p-2 rounded-full ${
                activeButton === "5x Telephoto"
                  ? "bg-[#f5f5f7] text-[#333336]"
                  : ""
              }`}
              onClick={(e) => zoomOnClick(200, e)}
              value="5x Telephoto"
            >
              120mm
            </button>
          </div>

          <div className="zoom-pallete text-[#f5f5f7] bg-[#333336] rounded-full w-[90%] sm:hidden flex p-2 flex-col">
            <div className="flex">
              <button
                className={`p-2 rounded-full ${
                  activeButton === "0.5x Ultra wide"
                    ? "bg-[#f5f5f7] text-[#333336]"
                    : ""
                }`}
                onClick={(e) => zoomOnClick(120, e)}
                value="0.5x Ultra wide"
              >
                13mm
              </button>
              <button
                className={`p-2 rounded-full ${
                  activeButton === "1x Fusion 24 mm"
                    ? "bg-[#f5f5f7] text-[#333336]"
                    : ""
                }`}
                onClick={(e) => zoomOnClick(140, e)}
                value="1x Fusion 24 mm"
              >
                24mm
              </button>
              <button
                className={`p-2 rounded-full ${
                  activeButton === "1x Fusion 28 mm"
                    ? "bg-[#f5f5f7] text-[#333336]"
                    : ""
                }`}
                onClick={(e) => zoomOnClick(150, e)}
                value="1x Fusion 28 mm"
              >
                28mm
              </button>
              <button
                className={`p-2 rounded-full ${
                  activeButton === "5x Telephoto"
                    ? "bg-[#f5f5f7] text-[#333336]"
                    : ""
                }`}
                onClick={(e) => zoomOnClick(200, e)}
                value="5x Telephoto"
              >
                120mm
              </button>
            </div>
          </div>

          <div className="text-center my-12 text-[#86868b] font-bold">
            {value}
          </div>
        </div>
      </div>
      <div className="sm:px-44 px-10 flex md:flex-row flex-col items-center justify-center gap-8">
        <div className="text-[#86868b] text-lg text-left md:w-1/2 zoom-text opacity-0 translate-y-16">
        More zoom? Boom. Now you can shoot in 120 mm with the 5x Telephoto camera on both Pro models and get <span className="text-white">sharper close-ups from farther away</span> . With multiple framing options, it’s like having seven pro lenses in your pocket, everywhere you go.
        </div>
        <div className="md:w-1/2">
            <img src={camera} alt="" className="object-cover" />
        </div>
      </div>
    </div>
  );
};