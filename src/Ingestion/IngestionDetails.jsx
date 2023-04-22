import React from "react";
import MenuButton from "./MenuButton";

import updateIcon from "../assets/images/update.svg";
import deleteIcon from "../assets/images/delete.svg";
import testIcon from "../assets/images/testImage.svg";
import editIcon from "../assets/images/editIcon.svg";
import OverviewProperties from "../components/common/OverviewProperties";

const IngestionDetails = () => {
  return (
    <div className=" m-5 mb-0 ingestion-height overflow-y-scroll ">
      <div className=" flex items-start justify-between gap-[120px]">
        <div>
          <p className=" font-nunitoextrabold text-lg">
            <span className=" text-white text-opacity-70 font-nunitoregular">
              # &nbsp;
            </span>
            US Jumpcloud Cisco{" "}
          </p>

          <div className="flex items-center gap-1 pt-2">
            <p className=" text-xs text-white text-opacity-60">
              Last Update{" "}
              <span className="text-white text-opacity-100">12 May 2021</span>
            </p>

            <div className=" w-1 h-1 border bg-binaryblue rounded-[2px]"></div>
            <p className=" text-xs text-white text-opacity-60">
              Status <span className="text-white text-opacity-100">Active</span>
            </p>
          </div>
        </div>

        <div className=" flex gap-3">
          <MenuButton icon={editIcon} menuName="Edit" onClick={() => {}} />
          <MenuButton icon={deleteIcon} menuName="Delete" onClick={() => {}} />
          <MenuButton icon={updateIcon} menuName="Update" onClick={() => {}} />
          <MenuButton icon={testIcon} menuName="Test" onClick={() => {}} />
        </div>
      </div>

      <div className=" mt-4 pt-1  text-white text-opacity-60 font-nunitobold border-b border-b-white border-opacity-40 flex">
        <p className="mx-4 pb-[6px] border-b border-b-binaryblue  text-white">
          Overview
        </p>
        <p className="pb-[6px]">Events</p>
      </div>

      <div className=" flex flex-col  pt-5 pl-6 bg-darkblue mt-4 mr-2">
        <h3 className=" font-nunitoextrabold text-base mb-4">Properties</h3>
        <OverviewProperties
          requestStatement="Name"
          responseStatement="orem ipsum dolor sit amet, co"
        />

        <OverviewProperties
          requestStatement="Description"
          responseStatement="Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetur"
        />

        <div className="flex flex-col mb-11">
          <div className=" grid grid-cols-2">
            <OverviewProperties
              requestStatement="Api url to connect"
              responseStatement="http://example.com"
            />
            <OverviewProperties
              requestStatement="Services to pull events for"
              responseStatement="All"
            />
          </div>
          <div className=" grid grid-cols-2 ">
            <OverviewProperties
              requestStatement="orgid secret name"
              responseStatement="inim veniam"
            />
            <OverviewProperties
              requestStatement="Start time"
              responseStatement="19:20"
            />
          </div>
          <div className=" grid grid-cols-2 ">
            <OverviewProperties
              requestStatement="orgid secret name"
              responseStatement="x-org-id"
            />
            <OverviewProperties
              requestStatement="Start time"
              responseStatement="2021-07-14T23:00:00Z"
            />
          </div>
          <div className=" grid grid-cols-2 ">
            <OverviewProperties
              requestStatement="aws access key id"
              responseStatement="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
            />
            <OverviewProperties
              requestStatement="End Time"
              responseStatement="19:20"
            />
          </div>
        </div>

        <h3 className=" font-nunitoextrabold text-base mb-4">Encryption</h3>

        <OverviewProperties
          requestStatement="Enable Encryption?"
          responseStatement="Yes"
        />

        <h3 className=" font-nunitoextrabold text-base mb-4">Encryption</h3>

        <OverviewProperties
          requestStatement="Enable Masking?"
          responseStatement="Yes"
        />
      </div>
    </div>
  );
};

export default IngestionDetails;
