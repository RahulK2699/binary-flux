import React from "react";
import CheckBox from "../components/common/CheckBox";
import LineChart from "../components/common/LineChart";

const Data = ({ id: checkboxId }) => {
  const arr = ["RULES", "POLICIES", "CRICTICAL ALTERS", "CRICTICAL ALTERS"];
  const num = [9, 4, 2, 2];
  return (
    <div className=" flex justify-between py-5 border-b border-b-binaryblue border-opacity-40 px-6">
      <div>
        <div className="flex gap-4">
          <CheckBox id={checkboxId} />
          <p className=" font-nunitobold text-sm text-white">
            <span className=" text-xl font-nunitoregular "># </span>
            Ingestion Name
          </p>
        </div>
        <div className=" flex flex-col gap-7">
          <div className="flex items-center gap-1 pt-2">
            <p className=" text-xs text-white text-opacity-60 ml-10">
              Last Update{" "}
              <span className="text-white text-opacity-100">12 May 2021</span>
            </p>

            <div className=" w-1 h-1 border bg-binaryblue rounded-[2px]"></div>
            <p className=" text-xs text-white text-opacity-60">
              Status <span className="text-white text-opacity-100">Active</span>
            </p>
          </div>

          <div className=" flex gap-3 ml-10 max-w-[380px] flex-wrap">
            {arr.map((item, index = 1) => {
              return (
                <p
                  className={`bg-lightgreen px-1 py-[3px] rounded-[3px] font-barlow text-[10px] text-white`}
                >
                  {num[index]} {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      {/* Graph */}
      <div className=" flex items-center">
        <div className=" relative z-[1]">
          <LineChart />
        </div>

        <div>
          <p className=" text-darkred font-nunitoextrabold text-sm">
            1000 Failed
          </p>
          <p className=" text-xs">24k total</p>
        </div>
      </div>
    </div>
  );
};

export default Data;
