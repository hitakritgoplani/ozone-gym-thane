import React from "react";
import "../Header.css";
import gymLogo from '../images/ozone.jpeg'

export default function Header() {
  return (
    <>
      <header className="behind">
		<img src={gymLogo} className="logo"/>
		<span className="ffc">Family Fitness Center</span>
		<img src={gymLogo} className="logo"/>
      </header>
    </>
  );
}
