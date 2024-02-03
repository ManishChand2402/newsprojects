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
    <div className="">
      <img src={img} alt="" className="min-w-[11.6rem]  " />
      <p className="text-[0.6rem] py-[0.7rem] pr-[2rem] ">{titel}</p>
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

export const StayPlace = ({ titel, img, icon }) => {
  return (
    <div className="shadow-lg px-[0.3rem] rounded-xl">
      <img src={img} alt="" className="min-w-[11.6rem] rounded-2xl " />
      <p className="text-[0.7rem] font-medium  py-[0.7rem] ml-1  ">
        {titel}
      </p>
      <div className="mb-4">
        <span className="text-yellow-400 flex gap-x-2 text-[0.8rem]">
          {icon} {icon} {icon} {icon} 
        </span>
      </div>
    </div>
  );
};
export const ActivitiesToDo = ({ titel, img, price, oldPrice, name }) => {
  return (
    <div className="shadow-lg px-[0.4rem] rounded-xl">
      <img src={img} alt="" className="min-w-[11.3rem] rounded-2xl " />
      <p className="text-[0.8rem] font-semibold text-black py-[0.3rem]  ">
        {titel}
      </p>
      
      <p className="text-[0.7rem] text-gray-500">{name}</p>
      <div className="mb-3 mt-2">
        <p className="text-[.93rem] text-gray-500 ">from
          <span className="text-[1rem] text-red-500 font-semibold"> {price} </span>
          <span className="line-through text-[0.8rem] text-gray-500">{oldPrice}</span> {""}
          (per adult)
        </p>
      </div>
    </div>
  );
};
