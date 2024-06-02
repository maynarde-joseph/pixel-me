"use client";
import React, { useState } from "react";
import ArtworkPanel from "./ArtworkPanel";
import { GrPowerReset, GrUpload } from "react-icons/gr";

export default function Editor({ color }) {
  const [panelKey, setPanelKey] = useState(1);

  const resetPanel = () => {
    setPanelKey((prevKey) => prevKey + 1);
  };

  return (
    <div id="editor">
      <h1 className="text-lg">Pixel Editor</h1>
      <div className="flex flex-row gap-2 pb-1">
        <div className="flex flex-row gap-1 items-center">
          <GrUpload />
          <h3>Upload</h3>
        </div>
        <div
          className="flex flex-row gap-1 items-center cursor-pointer"
          onClick={resetPanel}
        >
          <GrPowerReset />
          <h3>Reset</h3>
        </div>
      </div>

      <ArtworkPanel
        width={32}
        height={32}
        selectedColor={color}
        key={panelKey}
      />
    </div>
  );
}
