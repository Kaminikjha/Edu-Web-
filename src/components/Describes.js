import React from "react";
import { useNavigate } from "react-router-dom";

import { FcManager } from "react-icons/fc";
import { PiStudentFill } from "react-icons/pi";
import { FcPortraitMode } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { GiTeacher } from "react-icons/gi";

const Describes = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/intrested");
  };

  return (
    <>
      <div>
        <div className="flex items-center mt-3 mb-10 sm:mb-20">
          <div className=" bg-green-700 h-1  rounded-l-full ml-5 w-20 sm:w-[200px] sm:ml-32"></div>
          <div className=" bg-gray-200 h-1  rounded-r-full mr-5 w-[600px] sm:w-[2000px] sm:mr-32"></div>
        </div>

        <h1 className="text-center text-3xl text-bold text-black min-[320px]:text-center max-[600px]:bg-sky-300 font-extrabold mt-5">
          Which Describes you best?
        </h1>
        <h2 className="text-center text-sm text-gray-600 pt-3 mb-5">
          This will help us personalize your experience
        </h2>

        <div className="flex items-center justify-center grid grid-row-3">
          <div className="border-2 border-gray-100 bg-white rounded-lg flex items-center  h-20 w-96 sm:w-[600px] mb-3">
            <FcManager className="w-8 h-8  m-3 " />
            <h1 className=" text-sm font-normal text-gray-600 ">
              <b className="font-medium text-black">Student</b> or soon to be
              enrolled
            </h1>
          </div>

          <div className="border-2 border-gray-100  bg-white rounded-lg flex items-center  h-20 w-96 sm:w-[600px] mb-3">
            <FcPortraitMode className="w-8 h-8  m-3 " />
            <h1 className=" text-sm font-normal  text-gray-600  ">
              <b className="font-medium text-black">Professional</b> pursuing a
              career
            </h1>
          </div>

          <div className="border-2 border-gray-100  bg-white rounded-lg flex items-center  w-96 sm:w-[600px] mb-3">
            <PiStudentFill className="w-8 h-8  m-3 " />
            <h1 className=" text-sm font-normal  text-gray-600  ">
              <b className="font-medium text-black"> Parent</b> of a school-age
              child
            </h1>
          </div>

          <div className="border-2 border-gray-100  bg-white rounded-lg flex items-center  h-20 w-96 sm:w-[600px] mb-3">
            <FcPortraitMode className="w-8 h-8  m-3 " />
            <h1 className=" text-sm font-medium text-black ">
              Lifelong learning
            </h1>
          </div>

          <div className="border-2 border-gray-100  bg-white rounded-lg flex items-center  h-20 w-96 sm:w-[600px] mb-3">
            <GiTeacher className="w-8 h-8  m-3 " />
            <h1 className=" text-sm font-medium text-black ">Teacher</h1>
          </div>

          <div className="border-2 border-gray-100  bg-white rounded-lg flex items-center  h-20 w-96 sm:w-[600px] mb-3">
            <CgProfile className="w-8 h-8  m-3 " />
            <h1 className=" text-sm font-medium text-black ">Other</h1>
          </div>
        </div>

        <div className=" text-center mt-3">
          <button
            type="button"
            class="btn bg-gray-200 btn-lg text-white hover:bg-black mb-64 pl-10 pr-10 pt-2 pb-2"
            onClick={handleClick}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Describes;
