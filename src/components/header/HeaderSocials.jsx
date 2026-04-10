import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials header__animate">
      <a
        href="https://www.linkedin.com/in/adi-primanto-589a8214a/"
        rel="noreferrer"
        target="_blank"
        aria-label="LinkedIn"
      >
        <BsLinkedin />
        <span className="header__social-label">LinkedIn</span>
      </a>
      <a
        href="https://github.com/AdiPrimanto"
        rel="noreferrer"
        target="_blank"
        aria-label="GitHub"
      >
        <FaGithub />
        <span className="header__social-label">GitHub</span>
      </a>
      <a
        href="https://www.instagram.com/adiprimanto/"
        rel="noreferrer"
        target="_blank"
        aria-label="Instagram"
      >
        <BsInstagram />
        <span className="header__social-label">Instagram</span>
      </a>
      <div className="header__socials-line" />
    </div>
  );
};

export default HeaderSocials;
