import React from "react";
import { useNavigate } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";
import { SiCompilerexplorer } from "react-icons/si";
import { FcRefresh } from "react-icons/fc";
import { PiTargetDuotone } from "react-icons/pi";
import { AiOutlineEye } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa6";

const Intrested = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/rightPlace");
  };
  return (
    <>
      <div className="flex items-center mb-10 sm:mb-20">
        <FaChevronLeft className="ml-2 h-8 w-8 sm:h-10 sm:w-10 sm:ml-32" />
        <div className=" bg-green-700 h-1  rounded-l-full ml-2 w-40 sm:w-[400px] sm:ml-2"></div>
        <div className=" bg-gray-200 h-1  rounded-r-full mr-5 w-[600px] sm:w-[2000px] sm:mr-32"></div>
      </div>

      <h1 className="text-center text-3xl text-bold text-black min-[320px]:text-center max-[600px]:bg-sky-300 font-extrabold mt-5">
        Which are you most intrested in?
      </h1>
      <h2 className="text-center text-sm text-gray-600 pt-3 mb-5">
        Choose just one. This will help us get you started (but won't limit your
        experience)
      </h2>

      <div className="flex items-center justify-center grid grid-row-3">
        <div className="border-2 border-yellow-300 shadow-sm bg-white rounded-lg flex items-center  h-20 w-96 sm:w-[600px] mb-3">
          <BsGraphUp className="w-8 h-8  m-3 " />
          <h1 className=" text-sm font-normal  ">
            Learning specific skills to advance my career
          </h1>
        </div>
        <div className="border-2 border-gray-100 bg-white rounded-lg flex items-center h-20 w-96 sm:w-[600px] mb-3">
          <SiCompilerexplorer className="w-8 h-8  m-3 " />
          <h1 className=" text-sm font-normal  ">
            Exploring new topic i'm interested in
          </h1>
        </div>
        <div className="border-2 border-gray-100 bg-white rounded-lg flex items-center h-20 w-96 sm:w-[600px] mb-3">
          <FcRefresh className="w-8 h-8  m-3 " />
          <h1 className=" text-sm font-normal  ">
            Refreshing my math foundations
          </h1>
        </div>
        <div className="border-2 border-gray-100 bg-white rounded-lg flex items-center h-20 w-96 sm:w-[600px] mb-3">
          <PiTargetDuotone className="w-8 h-8  m-3 " />
          <h1 className=" text-sm font-normal  ">
            Excercising my brain to stay sharp
          </h1>
        </div>
        <div className="border-2 border-gray-100 bg-white rounded-lg flex items-center h-20 w-96 sm:w-[600px] mb-3">
          <AiOutlineEye className="w-8 h-8  m-3 " />
          <h1 className=" text-sm font-normal  ">Something else</h1>
        </div>
      </div>
      <div className=" text-center mt-3">
        <button
          type="button"
          class="btn bg-black btn-lg text-white mb-64 pl-10 pr-10 pt-2 pb-2"
          onClick={handleClick}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default Intrested;
