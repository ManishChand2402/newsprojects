import React from "react";

//--------------------Img Grid Template for laptop size screens starting----------------
export const ImgGridTemplate = () => {
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-1 rounded-md xl:gap-0">
      <div className="row-span-2">
        <img src="/1gridImg.svg" alt="" className=" rounded-l-2xl" />
      </div>
      <div className="">
        <img src="/2gridImg.svg" alt="" />
      </div>
      <div className="">
        <img src="/3gridImg.svg" alt="" />
      </div>
      <div className="">
        <img src="/4gridImg.svg" alt="" className="rounded-tr-2xl" />
      </div>
      <div className="">
        <img src="/5gridImg.svg" alt="" className="rounded-br-2xl" />
      </div>
    </div>
  );
};
//--------------------Img Grid Template for laptop size screens End----------------
