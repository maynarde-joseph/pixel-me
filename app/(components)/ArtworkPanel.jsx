"use client";
import React, { useRef } from "react";
import Row from "./Row";

export default function ArtworkPanel(props) {
  const { width, height, selectedColor } = props;

  const panelRef = useRef();

  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />);
  }

  return (
    <div id="drawingPanel" className="flex flex-col ">
      <div id="pixels" ref={panelRef}>
        {rows}
      </div>
    </div>
  );
}
