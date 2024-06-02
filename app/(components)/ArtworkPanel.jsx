"use client";
import React, { useRef, useEffect, useState } from "react";
import Row from "./Row";
import { GrDownload } from "react-icons/gr";

export default function ArtworkPanel(props) {
  const { width, height, selectedColor } = props;
  const panelRef = useRef(null);
  const [exportComponentAsPNG, setExportComponentAsPNG] = useState(null);

  useEffect(() => {
    async function loadExportComponent() {
      const downloadImage = await import("react-component-export-image");
      setExportComponentAsPNG(() => downloadImage.exportComponentAsPNG);
    }

    if (typeof window !== "undefined") {
      loadExportComponent();
    }
  }, []);

  let rows = [];
  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />);
  }

  const handleExport = () => {
    if (exportComponentAsPNG && panelRef.current) {
      exportComponentAsPNG(panelRef);
    }
  };

  return (
    <div id="drawingPanel" className="flex flex-col">
      <div id="pixels" ref={panelRef}>
        {rows}
      </div>
      <div
        className="flex flex-row gap-1 items-center cursor-pointer m-auto"
        onClick={handleExport}
      >
        <GrDownload />
        <h3>Download</h3>
      </div>
    </div>
  );
}
