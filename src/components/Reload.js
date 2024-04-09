import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FcSynchronize } from "react-icons/fc";

const Reload = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/learningPath");
    }, 3000);
  }, []);
  return (
    <>
      <div className=" flex justify-center pt-48 space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <FcSynchronize className="color-orange-400 h-28 w-28" />
      </div>
      <div>
        <h1
          className="text-2xl text-bold text-black text-center font-semibold pl-6 pr-6
          "
        >
          Finding learning path recommendations for you based on
          <h1 className="text center mb-64">your responses</h1>
        </h1>
      </div>
    </>
  );
};

export default Reload;
