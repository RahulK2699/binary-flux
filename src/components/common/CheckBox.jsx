import React from "react";

const CheckBox = () => {
  return (
    <label for="my-checkbox" class="checkbox-container">
      <input type="checkbox" id="my-checkbox" class="custom-checkbox" />
      <span class="checkmark"></span>
    </label>
  );
};

export default CheckBox;
