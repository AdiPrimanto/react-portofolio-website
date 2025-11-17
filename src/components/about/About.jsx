import React from "react";
import "./about.css";
import ME from "../../assets/my_foto.jpeg";
import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Go To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>+5 Years Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>+10 Completed</small>
            </article>
          </div>

          <p>
            My name is Adi Primanto, I am a Frontend Developer. Experienced
            Frontend Web Developer with a strong background in web development
            and a proven track record of delivering high-quality, responsive web
            applications. Proficient in HTML/CSS and JavaScript frameworks with
            experience in Agile methodologies. Passionate about learning and
            applying new technologies to drive project success.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
