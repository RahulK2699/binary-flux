import React, { useState } from "react";

import IngestionMenu from "../Ingestion/IngestionMenu";

import binaryFluxLogo from "../assets/images/binaryFluxLogo.svg";
import arrowDown from "../assets/images/arrowDown.svg";
import profile from "../assets/images/profile.jpg";
import insight from "../assets/images/insight.svg";
import notification from "../assets/images/notification.svg";

export const Navbar = () => {
  const [showComponent, setShowComponent] = useState(false);
  return (
    <div>
      <div className=" fixed top-0 left-0 h-[66px] flex justify-between px-6 bg-darkblue border-b border-b-binaryblue w-full z-[10]">
        <div className="flex gap-5 items-center">
          <img src={binaryFluxLogo} alt="companyLogo" />
          <p className=" w-[2px] h-[29px]  bg-white bg-opacity-20"></p>
          <div>
            <div
              onClick={() => {
                setShowComponent(!showComponent);
              }}
              className=" flex gap-3 items-center cursor-pointer active:text-opacity-40 active:text-white  w-fit"
            >
              <h2 className=" font-nunitobold text-xl text-white">Ingestion</h2>
              <img src={arrowDown} alt="arrowDown" />
            </div>
            <p className=" text-white text-opacity-60">
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit a
            </p>
          </div>
        </div>

        <div className=" flex gap-5 items-center relative ">
          <img className=" mr-6" src={insight} alt="worldsearch" />
          <img src={notification} alt="worldsearch" />
          <div className=" flex gap-2 items-center">
            <img
              className=" w-6 h-6 rounded-xl object-fill"
              src={profile}
              alt="profile"
            />
            <p className=" text-xs font-semibold text-white">Zara Larsson</p>
          </div>
        </div>
      </div>
      {showComponent ? (
        <div className="mytransition">
          <IngestionMenu />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
