import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/adi-primanto-589a8214a/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://www.instagram.com/adiprimanto/" target="_blank">
        <BsInstagram />
      </a>
      <a href="https://github.com/AdiPrimanto" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
