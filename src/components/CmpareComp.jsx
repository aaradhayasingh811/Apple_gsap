import React from "react";
import PropTypes from "prop-types";
import right from "../assets/images/right.svg";
import int from "../assets/images/int.png";
import battery from "../assets/images/battery.png";

const PButton = ({ col }) => {
  return (
    <button
      className="p-2 w-2"
      style={{ borderRadius: "50%", backgroundColor: col }}
    ></button>
  );
};

const CmpareComp = ({
  imgSrc,
  name,
  core,
  coreimg,
  camera,
  proCam,
  camList,
  batteryHour,
  cost,
  colorList = [],
}) => {
  return (
    <div className="text-white py-10 rounded-lg flex flex-col justify-center items-center text-center gap-y-4">
      {/* Product Image */}
      <div className="mb-4 flex justify-center">
        <img
          src={imgSrc}
          alt={`${name} image`}
          className="rounded-md h-72 w-56 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Color Options */}
      <div className="flex gap-x-2 mb-4 justify-center">
        {colorList.map((col, index) => (
          <PButton col={col} key={index} />
        ))}
      </div>

      {/* Product Details */}
      <div className="text-[#ff791b] text-xs uppercase mb-2">New</div>
      <div className="text-3xl font-semibold mb-2">{name}</div>
      <div className="text-lg font-semibold mb-4">From ₹{cost} *</div>

      {/* Buttons */}
      <div className="mb-4">
        <button className="bg-blue-400 text-white px-4 py-2 rounded-2xl w-max mb-2">
          Learn more
        </button>
        <a href="#" className="flex items-center justify-center px-4 text-blue-500 hover:underline">
          Buy <img src={right} alt="Arrow" className="h-4 w-4 ms-1 " />
        </a>
      </div>

      <hr className="my-4 border-gray-700" />

      {/* Features */}
      <div className="mb-4 gap-y-4 flex flex-col">
        <div className="flex items-center flex-col gap-y-2 justify-center mb-2">
          <img src={int} alt="Built for Apple Intelligence" className="h-16 w-16 mr-2" />
          Built for Apple Intelligence
        </div>
        <div className="flex items-center flex-col gap-y-2 justify-center mb-2">
          <img src={coreimg} alt="Core Chip" className="h-16 w-16 mr-2" />
          A18 Pro chip with {core}-core GPU
        </div>
        <div className="flex items-center flex-col gap-y-2 justify-center mb-2">
          <img src={camera} alt="Camera Control" className="h-16 w-16 mr-2" />
          Camera Control
        </div>
        <div className="flex flex-col gap-y-2 items-center mb-2">
          <img
            src={proCam}
            alt="Pro Camera Features"
            className="h-16 w-16 mb-2"
          />
          {camList.map((item, index) => (
            <p key={index} className="text-center text-sm">
              {item}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-y-2 items-center justify-center mb-2">
          <img src={battery} alt="Battery Life" className="h-16 w-16 mr-2" />
          <p>Up to {batteryHour} hours video playback</p>
        </div>
      </div>
    </div>
  );
};

// PropTypes for validation
CmpareComp.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  core: PropTypes.string.isRequired,
  coreimg: PropTypes.string.isRequired,
  camera: PropTypes.string.isRequired,
  proCam: PropTypes.string.isRequired,
  camList: PropTypes.arrayOf(PropTypes.string).isRequired,
  batteryHour: PropTypes.number.isRequired,
  cost: PropTypes.string.isRequired,
  colorList: PropTypes.arrayOf(PropTypes.string),
};

// Default props for optional values
CmpareComp.defaultProps = {
  colorList: [],
};

export default CmpareComp;
