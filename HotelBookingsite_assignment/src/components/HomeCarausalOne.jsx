import React, { useRef } from "react";
import { FaAngleLeft, FaAnglesLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { CarausalOneData } from "../Textfiles/webiste-Content";
import { HomeCarausalCardOne } from "./HomeCarausalCardOne ";

export default function HomeCarausalOne() {
 
  const boxRef = useRef(null);
  const handlePressPrevious = () => {

    const box = boxRef.current;
    if (box) {
      const width = box?.clientWidth;
      box.scrollLeft -= width;
    }
  };

  const handlePressNext = () => {
  
    const box = boxRef.current;
    if (box) {
      const width = box?.clientWidth;
      box.scrollLeft += width;
    }
  };

  return (
    <div className="w-full h-auto mb-10 pt-8 md:px-16 px:0 md:mb-6">
      <h1 className="text-4xl underline decoration-red-600 w-full text-center tracking-wide">
        Live Anywhere
      </h1>
      <div
        ref={boxRef}
        id="carausalContainer"
        className="mt-10 flex overflow-hidden scroll-smooth"
      >
        {CarausalOneData.map((item, index) => (
          <HomeCarausalCardOne
            key={index}
            imgUrl={item.imgurl}
            heading={item.heading}
          />
        ))}
      </div>
      <div className="w-full mt-8 text-center ">
        <button
          onClick={handlePressNext}
          className=" text-center px-4 py-2 border border-black text-red-600 text-xl font-bold rounded hover:bg-red-600 hover:text-white hover:border-none transition-all duration-75"
        >
          <FaAngleRight />
        </button>
        <button
          onClick={handlePressPrevious}
          className=" px-4 py-2 ml-3 border border-black text-red-600 text-xl font-bold rounded hover:bg-red-600 hover:text-white hover:border-none"
        >
          <FaAngleLeft />
        </button>
      </div>
    </div>
  );
}
