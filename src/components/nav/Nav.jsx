import React, { useState, useEffect } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const navItems = [
  { href: "#home", icon: <AiOutlineHome />, label: "Home" },
  { href: "#about", icon: <AiOutlineUser />, label: "About" },
  { href: "#experience", icon: <BiBook />, label: "Experience" },
  { href: "#portfolio", icon: <RiServiceLine />, label: "Portfolio" },
  { href: "#contact", icon: <BiMessageSquareDetail />, label: "Contact" },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  // Scroll spy — auto-highlight active section
  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.4 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  return (
    <nav>
      <div className="nav__inner">
        {navItems.map(({ href, icon, label }) => (
          <a
            key={href}
            href={href}
            onClick={() => setActiveNav(href)}
            className={`nav__item ${activeNav === href ? "active" : ""}`}
            aria-label={label}
          >
            <span className="nav__icon">{icon}</span>
            <span className="nav__tooltip">{label}</span>
            {activeNav === href && <span className="nav__active-dot" />}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
