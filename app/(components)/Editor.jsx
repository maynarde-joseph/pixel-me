"use client";
import React, { useState } from "react";
import ArtworkPanel from "./ArtworkPanel";

export default function Editor({ color }) {
  return (
    <div id="editor">
      <h1>Pixel Editor</h1>
      <div className="flex flex-row gap-2">
        <h2>Show grid</h2>
        <h2>Undo</h2>
        <h3>Reset</h3>
      </div>

      <ArtworkPanel width={32} height={32} selectedColor={color} />
    </div>
  );
}
