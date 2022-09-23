import React from "react";

const Error = ({ message }) => {
  return (
    <p
      className="border-2 my-5 border-solid border-red-700
     rounded-lg text-[20px] font-pop outline-0 w-full bg-red-700 text-white text-center py-[10px] px-[15px]"
    >
      {message}
    </p>
  );
};

export default Error;
