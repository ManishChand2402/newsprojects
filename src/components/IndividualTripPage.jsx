import React from "react";
import {
  ButttonC,
  ButttonD,
  Para,
  Heading,
  ImageS,
  Faqs,
} from "./Button/ButttonC";
import {
  FaAngleLeft,
  FaAngleRight,
  FaInfoCircle,
  FaStar,
} from "react-icons/fa";
import { MdOutlineFoodBank, MdOutlineWorkspacePremium } from "react-icons/md";
import { TbHeartCheck } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { GiCommercialAirplane, GiSandsOfTime } from "react-icons/gi";
import { LuTrain } from "react-icons/lu";
import { PiTicketThin, PiVanLight } from "react-icons/pi";

function IndividualTripPage() {
  return (
    <>
      <div>
        <div className="">
          <div className=" h-[20.7rem] w-[100%] bg-[url('./pexels-oliver.svg')]  bg-no-repeat bg-cover">
            <div className=" flex justify-between px-3 pt-4">
              <img width={45} src="./back-icon.svg" alt="" />
              <div className="flex gap-x-3 ">
                <img width={38} src="./save-icon.svg" alt="" />
                <img width={38} src="./share-icon.svg" alt="" />
              </div>
            </div>
            <div className="mt-[6rem]">
              <div className="flex justify-between items-center mx-[1rem]">
                <FaAngleLeft className="invert cursor-pointer" />
                <FaAngleRight className="invert cursor-pointer" />
              </div>
              <div className="mt-[7.6rem] flex justify-end mr-[1rem] ">
                <p className="text-white rounded-xl bg-[#ffffff3e] text-[0.8rem] py-1 px-2">
                  1/7
                </p>
              </div>
            </div>
            {/* img numbering */}
            {/* <div></div> */}
          </div>
        </div>
        {/* heading section staring */}
        <div className="border-b-2 pb-[2rem] mt-4">
          <div className="max-w-[93%] mx-auto">
            <div>
              {/* main heading */}
              <h1 className="text-[1.3rem] text-gray-950 font-semibold">
                6 Night 5 Days Honeymoon Package From Munnar
              </h1>
              <div>
                {/* rating section staring*/}
                <div className="flex items-center my-2">
                  <FaStar className="w-[2rem] mb-1 ml-[-0.4rem]" />
                  <div className="mr-2">
                    <h1 className="font-bold text-[1.2rem]">
                      4.5/5{" "}
                      <span className="text-gray-500 text-[1rem] font-normal mx-1">
                        (1k+ ratings){" "}
                      </span>{" "}
                    </h1>
                  </div>
                  <div>
                    <FaInfoCircle className="text-red-300 cursor-pointer" />
                  </div>
                </div>
                {/* rating section end*/}

                <div className="flex flex-wrap gap-1">
                  <ButttonC
                    bgColor={"bg-[#53e80d8f]"}
                    icon={<MdOutlineWorkspacePremium />}
                    titel={"Premium"}
                    btnPX={"px-2"}
                    btnPY={"py-1"}
                  />
                  <ButttonC
                    bgColor={"bg-[#ddfacf] "}
                    icon={<TbHeartCheck />}
                    titel={"Honeymoon"}
                    btnPX={"px-2"}
                    btnPY={"py-1"}
                  />
                  <ButttonC
                    bgColor={"bg-[#161edd26] "}
                    icon={<BsPeople />}
                    titel={"Member price available"}
                    btnPX={"px-2"}
                    btnPY={"py-1"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[93%] mx-auto mt-3">
          <Heading titel={"Get there"} />
          <div className="flex flex-wrap gap-2 my-[0.5rem]">
            <ButttonD
              icon={<GiCommercialAirplane />}
              titel={"Cochin International Airport"}
            />
            <ButttonD icon={<LuTrain />} titel={"Ernakulam Junction"} />
          </div>
          <div className="my-[1rem]">
            <Heading titel={"What's included"} />
            <div className="flex flex-wrap gap-x-1 ">
              <Para icon={<GiSandsOfTime />} titel={"5 days of 6 nights"} />
              <Para icon={<MdOutlineFoodBank />} titel={"Food included"} />
              <Para icon={<PiVanLight />} titel={"Transportaion"} />
              <Para icon={<PiTicketThin />} titel={"All Tickets"} />
            </div>
          </div>
          <div className="">
            <Heading titel={"What you'll see"} />
            <div className="flex gap-x-2 overflow-auto mt-1">
              <ImageS
                img={"./pexels-oliver2.svg"}
                titel={"Lorem ipsum dolor sit amet consectetur."}
              />
              <ImageS
                img={"./pexels-oliver2.svg"}
                titel={"Lorem ipsum dolor sit amet consectetur."}
              />
            </div>
          </div>
          <div>
            <Heading titel={"Itinerary"} />
            <Faqs titel={"Lorem ipsum dolor sit"} Days={"Day 1"} />
            <Faqs titel={"Lorem ipsum dolor sit"} Days={"Day 2"} />
            <Faqs titel={"Lorem ipsum dolor sit"} Days={"Day 3"} />
            <Faqs titel={"Lorem ipsum dolor sit"} Days={"Day 4"} />
            <Faqs titel={"Lorem ipsum dolor sit"} Days={"Day 5"} />
            <Faqs titel={"Lorem ipsum dolor sit"} Days={"Day 6"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default IndividualTripPage;
