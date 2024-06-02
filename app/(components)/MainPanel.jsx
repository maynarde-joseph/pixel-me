"use client";
import React, { useState } from "react";
import Editor from "./Editor";
import ColorPickerComponent from "./ColorPickerComponent";

export const MainPanel = () => {
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="flex flex-row gap-4 items-center justify-between">
      <Editor color={color} />
      <ColorPickerComponent color={color} setColor={setColor} />
    </div>
  );
};
