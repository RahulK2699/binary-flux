import React from "react";
import search from "../../assets/images/search.svg";

const Search = (props) => {
  const { ClassName, onChange, type = "text", placeholder } = props;

  return (
    <div className="relative w-full">
      <input
        style={{ background: "transparent" }}
        className={` h-8 pl-10 pr-3 text-white border-opacity-40 outline-none  w-full border border-white rounded placeholder:text-white ${ClassName}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      <div className=" absolute top-[0.43rem] left-3 ">
        <img className="" src={search} alt="search" />
      </div>
    </div>
  );
};

export default Search;
