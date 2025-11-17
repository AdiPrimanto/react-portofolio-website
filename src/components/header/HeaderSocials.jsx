import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/adi-primanto-589a8214a/"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.instagram.com/hi.adiprimanto/"
        rel="noreferrer"
        target="_blank"
      >
        <BsInstagram />
      </a>
      <a href="https://github.com/AdiPrimanto" rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
