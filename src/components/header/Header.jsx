import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/me.png";
import { BsChevronDown } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      {/* Animated background orbs */}
      <div className="header__orb header__orb--1"></div>
      <div className="header__orb header__orb--2"></div>
      <div className="header__orb header__orb--3"></div>

      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className="header__name">Adi Primanto</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Adi Primanto" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down <BsChevronDown />
        </a>
      </div>
    </header>
  );
};

export default Header;
