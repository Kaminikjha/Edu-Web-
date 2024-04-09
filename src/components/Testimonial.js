import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Testimonial = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/reload");
  };
  return (
    <>
      <div className="flex items-center mb-10  sm:mb-20 ">
        <FaChevronLeft className="ml-2 h-8 w-8 sm:h-10 sm:w-10 sm:ml-32 " />
        <div className=" bg-green-700 h-1  rounded-l-full ml-2 w-96 sm:w-[1000px] sm:ml-2 "></div>
        <div className=" bg-green-700 h-1  rounded-r-full mr-5 w-[600px] sm:w-[2000px] sm:mr-32"></div>
      </div>
      <div className=" flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 mt-5">
        <div className="md:w-1/3 max-w-sm">
          <img
            className="md:img-left"
            src="https://img.freepik.com/free-vector/mathematics-concept-illustration_114360-3972.jpg?t=st=1712080775~exp=1712084375~hmac=df26792c2043eea51fced8c1fa0d29cee667fec869e9fc5f23dd49e1836955b0&w=740"
            alt="Sample image"
          />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <div className="text-center md:text-left pr-12">
            <h1 className="text-3xl text-bold text-black font-extrabold">
              You're on your way!
            </h1>

            <div class="flex items-center pl-5 pt-5">
              <svg
                class="w-8 h-8 text-yellow-400 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-8 h-8 text-yellow-400 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-8 h-8 text-yellow-400 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-8 h-8 text-yellow-400 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-8 h-8 ms-1 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>

            <h4 className=" 	font-style: italic text-left text-sm text-gray-600 pt-3 ml-7 ">
              "Through its engaging and well-structured courses, Brilliant has
              taught me mathematical concept that i previously struggled to
              understand. I now feel confident approaching both technical job
              interviews and real world program solve situations."
            </h4>
            <h4 className="	font-style: italic text-left text-sm text-gray-800 pt-3 ml-6">
              -Jacob S.
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

export default Testimonial;
