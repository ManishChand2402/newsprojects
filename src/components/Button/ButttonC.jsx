import React from "react";
import { FaPlus } from "react-icons/fa";

export const ButttonC = ({ icon, bgColor, titel, btnPX, btnPY }) => {
  return (
    <div
      className={`flex items-center gap-x-[0.1rem] ${bgColor} rounded-xl ${btnPX} ${btnPY}`}
    >
      <span>{icon}</span>
      <h1 className="font-semibold text-[0.8rem]">{titel}</h1>
    </div>
  );
};
// Get there btns
export const ButttonD = ({ icon, titel }) => {
  return (
    <div
      className={`flex items-center gap-x-[0.1rem] bg-[#53e80d33] rounded-full px-[1rem] py-[0.6rem] `}
    >
      <span className="mr-1">{icon}</span>
      <h1 className="font-semibold text-[0.7rem]">{titel}</h1>
    </div>
  );
};

// What's inCluded btns

export const Para = ({ icon, titel }) => {
  return (
    <div className={`flex items-center gap-x-[0.1rem]  pr-1 py-1 `}>
      <span className="text-red-700 mr-1">{icon}</span>
      <p className="font-semibold text-[0.7rem] text-gray-800">{titel}</p>
    </div>
  );
};
// smalls titel heaings

export const Heading = ({ titel }) => {
  return <h1 className="font-semibold text-[0.9rem] text-gray-900">{titel}</h1>;
};
export const ImageS = ({ titel, img }) => {
  return (
    <div className=" ">
      <img src={img} alt="" className="" width={300} height={200} />
      <p className="text-[0.6rem] py-[0.7rem] ">{titel}</p>
    </div>
  );
};
export const Faqs = ({ titel, Days }) => {
  return (
    <div className="flex justify-between border-2 rounded-3xl items-center my-2 px-[1rem] py-[0.8rem]">
      <div className="border-2 py-[0.5rem] px-[2.5rem] ml-[0.4rem] rounded-xl">
        <h1 className="text-[0.9rem]">{Days}</h1>
      </div>
      <p className="font-medium text-[1.1rem] mx-[0.8rem]">{titel}</p>
      <button className="text-[1.2rem] mr-[1rem]">
        <FaPlus />
      </button>
    </div>
  );
};
