import React from "react";
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
} from "react-icons/si";

const skillsData = [
  { title: "HTML", icon: <SiHtml5 /> },
  { title: "CSS", icon: <SiCss3 /> },
  { title: "Javascript", icon: <SiJavascript /> },
  { title: "Typescript", icon: <SiTypescript /> },
  { title: "Jquery", icon: <SiJquery /> },
  { title: "Wordpress", icon: <SiWordpress /> },
  { title: "Bootstrap", icon: <SiBootstrap /> },
  { title: "Tailwind", icon: <SiTailwindcss /> },
  { title: "Vue JS", icon: <SiVuedotjs /> },
  { title: "Nuxt JS", icon: <SiNuxtdotjs /> },
  { title: "Pinia", icon: <SiVuedotjs /> },
  { title: "Vuex", icon: <SiVuedotjs /> },
  { title: "Axios", icon: <SiJavascript /> },
  { title: "React JS", icon: <SiReact /> },
  { title: "Next JS", icon: <SiNextdotjs /> },
  { title: "PHP", icon: <SiPhp /> },
  { title: "MySQL", icon: <SiMysql /> },
  { title: "Laravel", icon: <SiLaravel /> },
  { title: "Ajax", icon: <SiJavascript /> },
  { title: "Git", icon: <SiGit /> },
  // { title: "Github", icon: <SiGithub /> },
  // { title: "Gitlab", icon: <SiGitlab /> },
];

const Skill = ({ title, icon }) => (
  <article className="experience__details">
    <span className="experience__details-icon">{icon}</span>
    <div>
      <h4>{title}</h4>
    </div>
  </article>
);

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__softwareengineer">
          <h3>Software Engineer</h3>
          <div className="experience__content">
            {skillsData.map((skill) => (
              <Skill key={skill.title} title={skill.title} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
