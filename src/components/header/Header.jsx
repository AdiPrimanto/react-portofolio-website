import React, { useEffect, useRef } from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/me.png";

const Header = () => {
  const nameRef = useRef(null);

  useEffect(() => {
    // Staggered reveal on mount
    const els = document.querySelectorAll(".header__animate");
    els.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.15}s`;
      el.classList.add("header__animate--active");
    });
  }, []);

  return (
    <header id="home">
      {/* Grid background */}
      <div className="header__grid" />

      {/* Glow orbs */}
      <div className="header__glow header__glow--1" />
      <div className="header__glow header__glow--2" />

      <div className="container header__container">
        {/* LEFT — Socials */}
        <HeaderSocials />

        {/* CENTER — Main content */}
        <div className="header__center">
          <div className="header__badge header__animate">
            <span className="header__badge-dot" />
            Available for projects
          </div>

          <p className="header__greeting header__animate">
            <span className="header__greeting-line" />
            Hello, I'm
          </p>

          <h1 className="header__name header__animate" ref={nameRef}>
            <span className="header__name-solid">ADI</span>
            <span className="header__name-outline">PRIMANTO</span>
          </h1>

          <p className="header__role header__animate">
            <span className="header__role-tag">{"<"}</span>
            Software Engineer
            <span className="header__role-tag">{" />"}</span>
          </p>

          <p className="header__desc header__animate">
            Crafting <strong>pixel-perfect interfaces</strong> with React.js &
            Vue.js. Now exploring <strong>AI-powered backends</strong> with
            Python.
          </p>

          <CTA />
        </div>

        {/* RIGHT — Photo */}
        <div className="header__photo-wrap header__animate">
          <div className="header__photo-ring" />
          <div className="header__photo-ring header__photo-ring--2" />
          <div className="header__photo">
            <img src={ME} alt="Adi Primanto" />
          </div>
          <div className="header__photo-label">
            <span className="header__photo-label-dot" />
            Software Engineer
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="header__scroll header__animate">
        <span className="header__scroll-text">Scroll</span>
        <div className="header__scroll-line">
          <div className="header__scroll-dot" />
        </div>
      </a>
    </header>
  );
};

export default Header;
