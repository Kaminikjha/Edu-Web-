import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ComfortLevel = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/testimonial");
  };
  return (
    <div>
      <div className="flex items-center mb-10 ">
        <FaChevronLeft className="ml-2 h-10 w-10 sm:h-10 sm:w-10 sm:ml-32" />
        <div className=" bg-green-700 h-1  rounded-l-full ml-5 w-96 sm:w-[1000px] sm:ml-2 "></div>
        <div className=" bg-gray-200 h-1  rounded-r-full mr-5 w-[600px] sm:w-[2000px] sm:mr-32"></div>
      </div>

      <h1 className="text-center text-3xl text-bold text-black mt-20 min-[320px]:text-center max-[600px]:bg-sky-300 font-extrabold ">
        What is your math comfort level?
      </h1>
      <h2 className="text-center text-sm text-gray-800 pt-3 pb-5">
        Choose the highest level you feel confident in - you can always adjust
        later
      </h2>
      <div className="flex flex-space-evenly justify-center items-center ">
        <div className="grid grid-cols-1 items-center  sm:grid-cols-2 sm:items-center  lg:grid-cols-4 ">
          <div className="h-48 w-48 m-8 border-2 boder-gray-500 rounded-md sm:h-48 sm:w-48">
            <p className="text-center text-3xl mt-5 mb-3">5*1/2=?</p>
            <h4 className=" text-center text-sm text-gray-800 mt-4 ">
              Arthmetic
            </h4>
            <h4 className=" text-center text-base text-gray-400 mt-2 ">
              Introductory
            </h4>
          </div>
          <div className="h-48 w-48 m-8 border-2 boder-gray-500 rounded-md sm:h-48 sm:w-48">
            <p className="text-center text-3xl mt-5 mb-3">3x+5=4</p>
            <h4 className=" text-center text-sm text-gray-800 mt-4 ">
              Basic Algebra
            </h4>
            <h4 className=" text-center text-base text-gray-400 mt-2 ">
              Foundational
            </h4>
          </div>
          <div className="h-48 w-48 m-8 border-2 boder-gray-500 rounded-md sm:h-48 sm:w-48">
            <p className="text-center text-3xl mt-5 mb-3">5*1/2=?</p>
            <h4 className=" text-center text-sm text-gray-800 mt-4 ">
              Arthmetic
            </h4>
            <h4 className=" text-center text-base text-gray-400 mt-2 ">
              Introductory
            </h4>
          </div>
          <div className="h-48 w-48 m-8 border-2 boder-gray-500 rounded-md sm:h-48 sm:w-48">
            <p className="text-center text-3xl mt-5 mb-3">3x+5=4</p>
            <h4 className=" text-center text-sm text-gray-800 mt-4 ">
              Basic Algebra
            </h4>
            <h4 className=" text-center text-base text-gray-400 mt-2 ">
              Foundational
            </h4>
          </div>
        </div>
      </div>

      <div className=" text-center mt-5 ">
        <button
          type="button"
          class="btn bg-black btn-lg text-white mb-64 pl-10 pr-10 pt-2 pb-2"
          onClick={handleClick}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ComfortLevel;
