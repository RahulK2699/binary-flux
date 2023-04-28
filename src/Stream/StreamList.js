import React from "react";
import CheckBox from "../components/common/CheckBox";
import optionIcon from "../assets/images/option.svg";
import { useState } from "react";
import { useRef } from "react";

const StreamList = (props) => {
  const {
    headerText,
    time,
    currentStatus,
    lastUpdatedDate,
    isExpanded = false,
    children,
    id,
  } = props;

  const [showOptions, setShowOptions] = useState(false);
  const ref = useRef();

  const handleClick = (id) => {
    if (ref.current.target && id) setShowOptions(!showOptions);
  };
  return (
    <div ref={ref} className=" relative py-5 px-4 w-full ">
      <div className=" flex justify-between relative">
        <div>
          {" "}
          <CheckBox id={id} />
          <p className=" font-nunitoextrabold max-w-[602px] overflow-hidden text-secondary">
            {headerText}
          </p>
        </div>
        <div className=" flex  justify-between max-w-[180px]">
          <p className=" font-nunitoextrabold text-xl">{time}</p>
          <div className="p-1 cursor-pointer" onClick={() => handleClick(id)}>
            <img src={optionIcon} alt="icon" />
          </div>
        </div>
        <div className=" bg-binarypurplelight absolute right-5 top-10 transition-width duration-300  ease-in-out">
          <p className=" px-3 py-2 font-nunitobold text-sm border-b border-b-white border-opacity-30">
            Resolve
          </p>
          <p className=" px-3 py-2 font-nunitobold text-sm border-b border-b-white border-opacity-30">
            Copy
          </p>
          <p className=" px-3 py-2 font-nunitobold text-sm border-b border-b-white border-opacity-30">
            Share
          </p>
          <p className=" px-3 py-2 font-nunitobold text-sm border-b border-b-white border-opacity-30">
            Assign
          </p>
        </div>
      </div>

      <div className=" flex gap-1 ml-8">
        <p className=" px-[6px] py-1 bg-alert rounded-[3px] font-barlow font-extrabold text-[10px]">
          {currentStatus}
        </p>
        <div className=" w-2 h-2 rounded-[4px] bg-binaryblue bg-opacity-40"></div>
        <p className=" text-white text-opacity-60 text-xs">
          Last Update{" "}
          <span className=" text-white text-opacity-100 ">
            {lastUpdatedDate}
          </span>
        </p>
      </div>

      <div
        className={`h-[48px] overflow-hidden my-2 ${
          isExpanded
            ? "ease-in-out transition-width duration-300 h-[392px] overflow-y-scroll"
            : " ease-in-out transition-width duration-300 h-[48px]"
        }`}
      >
        {children}
      </div>
      <p className=" text-binaryblue font-nunitosemibold text-sm ml-8">
        {isExpanded ? "Collapse" : "Expand"}
      </p>
    </div>
  );
};

export default StreamList;
