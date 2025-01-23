// import React from 'react'
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <>
              <div key={index} className="masker">
                <div className="w-fit flex">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "8vw" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                      className="mr-[0.5vw] w-[8vw] h-[5vw] relative top-[1vw] bg-red-500 rounded"
                    ></motion.div>
                  )}
                  <h1 className="uppercase leading-[6vw] tracking-tighter text-[7vw] font-bold">
                    {item}
                  </h1>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-100 mt-20 flex justify-between items-center px-20 py-5">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-regular tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-4 py-2 border-[1px] border-zinc-400 rounded-full font-regular text-md uppercase">
            Start the project
          </div>
          <div className="w-10 h-10 border-[2px] border-zinc-400 flex items-center justify-center rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
