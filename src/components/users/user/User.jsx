import React from "react";
import photo from "../../../assests/photo.png";

const User = () => {
  return (
    <div className="flex py-3  justify-between items-center ">
      <div>
        <picture>
          <img src={photo} alt="" />{" "}
        </picture>
      </div>
      <div>
        <h2 className="font-pop font-semibold text-[18px]">Tanvir Hossan</h2>
        <p className="text-[#4D4D4D] font-pop text-[14px]">hello every one</p>
      </div>
      <div>
        <button className="bg-bgprimary px-2 text-white rounded-md py-2">add request</button>
      </div>
    </div>
  );
};

export default User;
