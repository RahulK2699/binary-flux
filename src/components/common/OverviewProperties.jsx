import React from "react";

const OverviewProperties = ({ requestStatement, responseStatement }) => {
  return (
    <div className="flex flex-col gap-[6px] mb-5">
      <p className=" text-xs text-white text-opacity-60">{requestStatement}</p>
      <p className=" text-sm">{responseStatement}</p>
    </div>
  );
};

export default OverviewProperties;
