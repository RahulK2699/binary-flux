import React from "react";

const Box = (props) => {
  const { header, value, icon, status, log } = props;
  return (
    <div className=" py-3 px-[14px] bg-binarypurplelight rounded-[4px] max-w-[284px]">
      <p className=" font-nunitobold text-sm text-secondary mb-2">{header}</p>

      <div className=" flex gap-1 items-center mb-1">
        <h1 className=" font-nunitoextrabold text-xl">{value}</h1>
        <img src={icon} alt="" />
        <p className=" font-nunitosemibold text-xs">{status}</p>
      </div>
      <p className=" text-xs text-white text-opacity-60">{log}</p>
    </div>
  );
};

export default Box;
