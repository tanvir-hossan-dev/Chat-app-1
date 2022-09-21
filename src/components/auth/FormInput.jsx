import React from "react";

const FormInput = ({ name, placeholder, type, onChange, value }) => {
  return (
    <div className="my-4 ">
      <label className="font-pop block font-medium text-[22px] text-textprimary">{placeholder}</label>
      <input
        type={type}
        name={name}
        className=" border-2  border-solid border-[#B8B9CE]
     rounded-lg text-[20px] font-pop outline-0 w-full text-textprimary py-[10px] px-[15px]"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
