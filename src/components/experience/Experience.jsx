import React, { useEffect, useRef } from "react";
import "./experience.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiJquery,
  SiWordpress,
  SiBootstrap,
  SiTailwindcss,
  SiVuedotjs,
  SiNuxtdotjs,
  SiReact,
  SiNextdotjs,
  SiPhp,
  SiMysql,
  SiLaravel,
  SiGit,
  SiPython,
} from "react-icons/si";

const skillCategories = [
  {
    category: "Frontend Core",
    eyebrow: "01",
    skills: [
      { title: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
      { title: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
      { title: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { title: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { title: "jQuery", icon: <SiJquery />, color: "#0769AD" },
      { title: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
      { title: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
      { title: "WordPress", icon: <SiWordpress />, color: "#21759B" },
    ],
  },
  {
    category: "Frameworks",
    eyebrow: "02",
    skills: [
      { title: "React JS", icon: <SiReact />, color: "#61DAFB" },
      { title: "Next JS", icon: <SiNextdotjs />, color: "#ffffff" },
      { title: "Vue JS", icon: <SiVuedotjs />, color: "#42B883" },
      { title: "Nuxt JS", icon: <SiNuxtdotjs />, color: "#00DC82" },
      { title: "Pinia", icon: <SiVuedotjs />, color: "#42B883" },
      { title: "Vuex", icon: <SiVuedotjs />, color: "#42B883" },
    ],
  },
  {
    category: "Backend & Tools",
    eyebrow: "03",
    skills: [
      { title: "PHP", icon: <SiPhp />, color: "#777BB4" },
      { title: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
      { title: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      { title: "Python", icon: <SiPython />, color: "#3776AB" },
      { title: "Git", icon: <SiGit />, color: "#F05032" },
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="exp__header fade-up">
          <div className="section-eyebrow">
            <span>// 02</span> Skills
          </div>
          <h2>
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="exp__subtitle">
            Technologies I use to build products — from pixel to production.
          </p>
        </div>

        {/* Skill categories */}
        <div className="exp__categories">
          {skillCategories.map(({ category, eyebrow, skills }) => (
            <div className="exp__category fade-up" key={category}>
              {/* Category label */}
              <div className="exp__cat-header">
                <span className="exp__cat-num">{eyebrow}</span>
                <h3 className="exp__cat-title">{category}</h3>
                <div className="exp__cat-line" />
              </div>

              {/* Skills grid */}
              <div className="exp__skills">
                {skills.map(({ title, icon, color }) => (
                  <div
                    className="exp__skill"
                    key={title}
                    style={{ "--skill-color": color }}
                  >
                    <span className="exp__skill-icon">{icon}</span>
                    <span className="exp__skill-title">{title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom marquee — all skills scrolling */}
        <div className="exp__marquee fade-up">
          <div className="exp__marquee-track">
            {[
              ...skillCategories.flatMap((c) => c.skills),
              ...skillCategories.flatMap((c) => c.skills),
            ].map(({ title, icon }, i) => (
              <span className="exp__marquee-item" key={i}>
                <span className="exp__marquee-icon">{icon}</span>
                {title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
