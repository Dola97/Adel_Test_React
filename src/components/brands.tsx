import React from "react";
import { Hammer, Lemsip, Mascus, Vikings } from "src/svgs";
import "./header.css";

export const Brands = () => {
  return (
    <div className="brandContainer">
      <Hammer className="Icon" />
      <Vikings className="Icon" />
      <Mascus className="Icon" />
      <Lemsip style={{ position: "relative", zIndex: 1 }} />
    </div>
  );
};
