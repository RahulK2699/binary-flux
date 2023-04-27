import React from "react";

const CheckBox = ({ id = "mycheckbox" }) => {
  return (
    <label for={id} class="checkbox-container">
      <input type="checkbox" id={id} class="custom-checkbox" />
      <span class="checkmark"></span>
    </label>
  );
};

export default CheckBox;
