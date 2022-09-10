import React from "react";
import { Col } from "react-bootstrap";
import { Insta, Linkdin, Youtube } from "src/svgs";
import "./header.css";

export const SocialLinks = () => {
  return (
    <div className="SocialContainer">
      <div className="vl" />
      <Linkdin style={{ position: "relative", marginTop: 27 }} />
      <Youtube
        style={{ position: "relative", marginTop: 40, marginBottom: 40 }}
      />
      <Insta style={{ position: "relative", marginBottom: 27 }} />
      <div className="vl" />
    </div>
  );
};
