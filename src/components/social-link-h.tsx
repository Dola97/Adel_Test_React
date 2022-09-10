import React from "react";
import { Insta, Linkdin, Youtube } from "src/svgs";
import "./header.css";
export const SocialLinkH = () => {
  return (
    <div className="HorizontalLink">
      <Linkdin />
      <Youtube style={{ marginRight: 20, marginLeft: 20 }} />
      <Insta />
    </div>
  );
};
