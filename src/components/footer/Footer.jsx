import React from "react";
import "./footer.css";
import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import { BsArrowUp } from "react-icons/bs";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  {
    href: "https://www.linkedin.com/in/adi-primanto-589a8214a/",
    icon: <FiLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/AdiPrimanto",
    icon: <FiGithub />,
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/hi.adiprimanto/",
    icon: <FiInstagram />,
    label: "Instagram",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* Top border glow line */}
      <div className="footer__topline" />

      <div className="container footer__container">
        {/* LEFT — Brand */}
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <span className="footer__logo-dot" />
            ADI PRIMANTO
          </a>
          <p className="footer__tagline">Frontend Engineer · Indonesia 🇮🇩</p>
          <p className="footer__sub">
            Building pixel-perfect interfaces
            <br />
            and AI-powered experiences.
          </p>
        </div>

        {/* CENTER — Nav links */}
        <div className="footer__nav">
          <p className="footer__nav-title">Navigation</p>
          <ul>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>
                  <span className="footer__nav-arrow">→</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — Socials + CTA */}
        <div className="footer__right">
          <p className="footer__nav-title">Find Me</p>
          <div className="footer__socials">
            {socials.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="footer__social"
              >
                {icon}
                <span>{label}</span>
              </a>
            ))}
          </div>

          <a href="mailto:adiprimanto.98@gmail.com" className="footer__cta">
            adiprimanto.98@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <small className="footer__copyright">
            <span className="footer__copy-symbol">©</span>
            {year} Adi Primanto. All rights reserved.
          </small>

          {/* <span className="footer__made">
            Designed & built with
            <span className="footer__heart">♥</span>
          </span> */}

          {/* Back to top */}
          <a href="#home" className="footer__totop" aria-label="Back to top">
            <BsArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
