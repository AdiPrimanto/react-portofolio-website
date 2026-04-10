import React, { useEffect, useRef } from "react";
import "./about.css";
import ME from "../../assets/my_foto.jpeg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { HiOutlineCode } from "react-icons/hi";
import { BsArrowUpRight } from "react-icons/bs";

const stats = [
  {
    icon: <FaAward />,
    value: "5+",
    label: "Years",
    sub: "Experience",
  },
  {
    icon: <VscFolderLibrary />,
    value: "30+",
    label: "Projects",
    sub: "Completed",
  },
  {
    icon: <HiOutlineCode />,
    value: "AI",
    label: "Powered",
    sub: "Learning",
  },
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="container about__container">
        {/* LEFT — Photo block */}
        <div className="about__visual fade-up">
          <div className="about__photo-wrap">
            {/* Decorative corner accents */}
            <span className="about__corner about__corner--tl" />
            <span className="about__corner about__corner--br" />

            <div className="about__photo">
              <img src={ME} alt="Adi Primanto" />
              <div className="about__photo-overlay" />
            </div>

            {/* Floating badge */}
            <div className="about__badge">
              <span className="about__badge-dot" />
              Open to work
            </div>
          </div>

          {/* Code snippet decoration */}
          <div className="about__code-deco">
            <span className="code-comment">{"// about me"}</span>
            <span>
              <span className="code-key">const</span>{" "}
              <span className="code-name">adi</span>{" "}
              <span style={{ color: "var(--color-muted)" }}>=</span>{" "}
              <span className="code-val">{"{ curious: true }"}</span>
            </span>
          </div>
        </div>

        {/* RIGHT — Content */}
        <div className="about__content">
          <div className="fade-up">
            <div className="section-eyebrow">
              <span>// 01</span> About Me
            </div>
            <h2 className="about__title">
              I build things
              <br />
              for the <span className="gradient-text">web.</span>
            </h2>
          </div>

          {/* Stats row */}
          <div className="about__stats fade-up">
            {stats.map(({ icon, value, label, sub }) => (
              <div className="about__stat" key={label}>
                <div className="about__stat-icon">{icon}</div>
                <div className="about__stat-num">{value}</div>
                <div className="about__stat-label">{label}</div>
                <div className="about__stat-sub">{sub}</div>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div className="about__bio fade-up">
            <p>
              Saya adalah seorang <strong>Frontend Developer</strong> dengan
              pengalaman lebih dari 5 tahun membangun web application yang
              responsif dan performant. Profisien di React ecosystem dan
              JavaScript frameworks, dengan pendekatan Agile dalam setiap
              project.
            </p>
            <p>
              Saat ini saya sedang mengeksplorasi{" "}
              <strong>backend Python</strong> dan{" "}
              <strong>AI-powered chatbot</strong> — membangun jembatan antara
              frontend yang indah dan backend yang cerdas.
            </p>
          </div>

          {/* CTA row */}
          <div className="about__actions fade-up">
            <a href="#contact" className="btn btn-primary">
              Let's Talk <BsArrowUpRight />
            </a>
            <a href="#portfolio" className="btn btn-outline">
              See My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
