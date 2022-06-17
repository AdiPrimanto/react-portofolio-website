import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
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
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            aliquid sint illum iure deserunt rem natus excepturi ratione facilis
            quidem, porro esse architecto alias minima perferendis magnam a,
            odit officia, quae assumenda quo adipisci nesciunt inventore.
            Cupiditate iure assumenda blanditiis libero, laboriosam esse
            accusantium minus sit provident dolore excepturi quam corrupti
            tenetur velit, odio minima earum, doloribus id? Ducimus sint ullam
            ipsam architecto id autem molestiae iure amet quas. Enim deleniti,
            inventore ipsa impedit ipsam doloribus quos dolorum, tempora
            repellendus quisquam cupiditate, ut quasi nulla cumque illo! Placeat
            est ut nobis cumque. Vitae explicabo minima quisquam ad assumenda
            soluta cupiditate.
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
