import React from "react";

const CommonMenu = ({ icon, heading, introduction }) => {
  return (
    <div className="p-4 flex gap-5 bg-binarypurple rounded">
      <div className=" rounded-[4px] bg-binarypurpledark w-[51px] h-[42px]  p-[9px]">
        <img className=" " src={icon} alt="menuIcon" />
      </div>

      <div className=" flex flex-col gap-1">
        <h1 className=" font-nunitoextrabold text-xl">{heading}</h1>
        <p className=" text-sm text-textsecondar">{introduction}</p>
      </div>
    </div>
  );
};

export default CommonMenu;
