/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
// import { FaFacebookF } from "react-icons/fa";
// import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ADI PRIMANTO
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/adi-primanto-589a8214a/"
          rel="noreferrer"
          target="_blank"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://www.instagram.com/hi.adiprimanto/"
          rel="noreferrer"
          target="_blank"
        >
          <FiInstagram />
        </a>
        <a
          href="https://github.com/AdiPrimanto"
          rel="noreferrer"
          target="_blank"
        >
          <FiGithub />
        </a>
        {/* <a href="https://twitter.com/AdiPRim_">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com/AdiPRim_">
          <IoLogoTwitter />
        </a> */}
      </div>

      <div className="footer__copyright">
        <small>&copy; Adi Primanto. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
