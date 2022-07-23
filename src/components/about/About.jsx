import React from "react";
import "./about.css";
import ME from "../../assets/my_foto.jpg";
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
              <small>2+ Years Working</small>
            </article>

            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            Nama saya Adi Primanto, saya seorang Frontend Developer dengan
            pengalaman kurang lebih dua tahun. Saya dapat membangun tampilan
            antarmuka web yang menarik dan memastikan web yang dibuat responsif
            saat digunakan, baik dalam mode web, mode tab, atau mode seluler.
            Saya familiar dengan vue js dan alat kolaborasi seperti trello,
            github, dan teknologi lainnya untuk pengembangan website.
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
