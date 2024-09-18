import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skill = ({ title }) => (
  <article className="experience__details">
    <BsPatchCheckFill className="experience__details-icon" />
    <div>
      <h4>{title}</h4>
    </div>
  </article>
);

const ExperienceSection = ({ title, skills }) => (
  <div className={`experience__${title.toLowerCase().replace(" ", "")}`}>
    <h3>{title}</h3>
    <div className="experience__content">
      {skills.map((skill) => (
        <Skill key={skill} title={skill} />
      ))}
    </div>
  </div>
);

const Experience = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "Jquery",
    "Wordpress",
    "Bootstrap",
    "Tailwind",
    "Vue JS",
    "Nuxt JS",
    "Pinia",
    "Vuex",
    "Axios",
    "React JS",
    "Next JS",
    "PHP",
    "MySQL",
    "Laravel",
    "Git",
    "Github",
    "Gitlab",
  ];

  // const backendSkills = ["PHP", "MySQL", "Laravel"];

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <ExperienceSection title="Software Engineer" skills={frontendSkills} />
        {/* <ExperienceSection title="Backend Development" skills={backendSkills} /> */}
      </div>
    </section>
  );
};

export default Experience;
