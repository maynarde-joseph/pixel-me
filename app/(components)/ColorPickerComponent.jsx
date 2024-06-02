"use client";
import React, { useState } from "react";
import ColorPicker from "react-pick-color";

const ColorPickerComponent = ({ color, setColor }) => {
  return (
    <div>
      <div className="mb-4">
        <ColorPicker color={color} onChange={(color) => setColor(color.hex)} />
      </div>
      <div className="flex flex-row gap-2">
        <div
          className="rounded-sm outline w-16"
          style={{ backgroundColor: color }}
        />
        <div className="">{color}</div>
      </div>
    </div>
  );
};

export default ColorPickerComponent;
