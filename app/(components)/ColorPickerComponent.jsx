"use client";
import React, { useState } from "react";
import ColorPicker from "react-pick-color";

const ColorPickerComponent = () => {
  const [color, setColor] = useState("#fff");

  return (
    <div>
      <ColorPicker color={color} onChange={(color) => setColor(color.hex)} />
      <div className="flex flex-row">
        <div className="w-30 h-12 m-0 p-0">{color}</div>
        <div className="w-30 h-12 m-0 p-0 border outline rounded-xl"></div>
      </div>
    </div>
  );
};

export default ColorPickerComponent;
