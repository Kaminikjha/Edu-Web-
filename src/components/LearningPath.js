import React from "react";

const LearningPath = () => {
  return (
    <>
      <h1 className="text-center text-3xl text-bold text-black mt-3 min-[320px]:text-center max-[600px]:bg-sky-300  font-extrabold">
        Learning paths best on your answers
      </h1>
      <h2 className="text-center text-sm text-gray-600 pt-3 pb-5">
        Choose one to get started. You can switch anytime.
      </h2>

      <div className="flex flex-space-evenly justify-center items-center mb-64">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
          <div className="flex items-center border-2 boder-gray-500 h-40 w-96 m-3 pl-2 rounded-md">
            <h4 className="text-left text-sm text-black  font-normal pl-3">
              <b font-medium text-black>
                Foundational math
              </b>{" "}
              Build your foundational skills in algebra, geometry, and
              probability.
            </h4>
            <img
              className="block h-36 w-32  sm:w-40 flex-none bg-cover"
              src="https://img.freepik.com/free-vector/school-background-illustration-with-icons_1416-276.jpg?w=740"
            />
          </div>
          <div className="flex items-center border-2 boder-gray-500 h-40 w-96 m-3 pl-2 rounded-md">
            <h4 className="text-left text-sm text-black  font-normal pl-3">
              <b font-medium text-black>
                Mathematical Thinking
              </b>{" "}
              Build your foundational skills in algebra, geometry, and
              problability.
            </h4>
            <img
              className="block h-36 w-36 sm:w-40 flex-none bg-cover"
              src="https://img.freepik.com/premium-vector/calculation-isometric-vector-illustration-isometric-flat-design-style-financial-accounting-concept-calculator-clipboard-pencil-isolated-objects-mathematic-concept_153097-1951.jpg?w=740"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningPath;
