import React from "react";
import "../Packages.css";

export default function Packages(props) {
  return (
    <div className="outer-div">
      <div className="inner-div">
        <span className="details">{props.price}</span>
        <span className="details">{props.duration}</span>
      </div>
    </div>
  );
}
