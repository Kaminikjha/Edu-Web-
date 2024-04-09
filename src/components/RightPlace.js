import React from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";

const RightPlace = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/comfortLevel");
  };
  return (
    <>
      <div className="flex items-center mb-10 sm:mb-20">
        <FaChevronLeft className="ml-2 h-8 w-8 sm:h-10 sm:w-10 sm:ml-32" />
        <div className=" bg-green-700 h-1  rounded-l-full ml-5 w-60 sm:w-[600px] sm:ml-2"></div>
        <div className=" bg-gray-200 h-1  rounded-r-full mr-5 w-[600px] sm:w-[2000px] sm:mr-32"></div>
      </div>

      <div className=" flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 mt-5">
        <div className="md:w-1/3 max-w-sm">
          <img
            className="md:img-left"
            src="https://img.freepik.com/free-vector/local-tourism-concept-illustrated_23-2148596365.jpg?t=st=1712068688~exp=1712072288~hmac=4f3b11e249f5d738a0aa5833b72839ccd2c060048fa653c8d515904925e15d79&w=996"
            alt="Sample image"
          />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <div className="text-center md:text-left">
            <h1 className="text-3xl text-bold text-black font-extrabold">
              You're in the right place
            </h1>
            <h4 className="text-left text-sm text-gray-600 pt-3 ml-6">
              Brilliant gets you hands-on to help improve your professional
              skills and knowledge. You'll interact with concepts and solve fun
              problems in math, science, and computer science.
            </h4>
          </div>
        </div>
      </div>
      <div className="flex-wrap text-center mt-20 ">
        <button
          type="button"
          className="btn bg-black btn-lg text-white mb-64 pl-10 pr-10 pt-2 pb-2"
          onClick={handleClick}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default RightPlace;
