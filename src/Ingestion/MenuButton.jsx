import React from "react";

const MenuButton = (props) => {
  const { icon, menuName, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="flex gap-1 items-center px-2 py-1 cursor-pointer"
    >
      <img src={icon} alt="menuButton" />
      <p className=" font-nunitosemibold text-sm text-white text-opacity-70">
        {menuName}
      </p>
    </div>
  );
};

export default MenuButton;
