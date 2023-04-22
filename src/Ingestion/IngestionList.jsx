import React from "react";
import Search from "../components/common/Search";
import CheckBox from "../components/common/CheckBox";
import Data from "./Data";

import updateIcon from "../assets/images/update.svg";
import deleteIcon from "../assets/images/delete.svg";
import testIcon from "../assets/images/testImage.svg";
import addNewIcon from "../assets/images/addNew.svg";
import optionIcon from "../assets/images/option.svg";

import searchFilter from "../assets/images/searchFilter.svg";
import MenuButton from "./MenuButton";
import IngestionDetails from "./IngestionDetails";

const IngestionList = () => {
  return (
    <div className=" grid grid-cols-ingestionnormal 2xl:grid-cols-ingestionxl">
      <div className="bg-darkblue">
        <div className="py-3 flex items-center gap-6  pl-6 pr-2">
          <Search
            ClassName={""}
            onChange={() => {}}
            type="text"
            placeholder="Search"
          />
          <img className=" mr-3" src={searchFilter} alt="searchfilter" />
        </div>

        {/* Menu Options */}
        <div className=" flex justify-between px-6 py-3 border-b border-b-binaryblue border-opacity-20">
          <div className=" flex gap-2 items-center">
            <CheckBox />
            <p className=" text-xs text-white text-opacity-60">200 Results</p>
          </div>
          <div className=" flex gap-3">
            <MenuButton
              icon={updateIcon}
              menuName="Update"
              onClick={() => {}}
            />
            <MenuButton
              icon={deleteIcon}
              menuName="Delete"
              onClick={() => {}}
            />
            <MenuButton icon={testIcon} menuName="Test" onClick={() => {}} />
            <MenuButton
              icon={addNewIcon}
              menuName="Add New"
              onClick={() => {}}
            />

            <img src={optionIcon} alt="optionIcon" />
          </div>
        </div>

        {/* Data Component */}
        <div className="   max-h-[790px] overflow-y-scroll">
          <Data />
          <Data />
          <Data />
          <Data />
          <Data />
          <Data />
        </div>
      </div>

      <IngestionDetails />
    </div>
  );
};

export default IngestionList;
