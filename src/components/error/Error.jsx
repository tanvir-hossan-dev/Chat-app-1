import React from "react";

const Error = ({ message }) => {
  return (
    <p
      className="border-2 my-5 border-solid border-red-500
     rounded-lg text-[20px] font-pop outline-0 w-full text-red-500 text-center py-[10px] px-[15px]"
    >
      {message}
    </p>
  );
};

export default Error;
