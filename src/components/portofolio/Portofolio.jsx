import React from "react";
import "./portofolio.css";
import IMG1 from "../../assets/webflix1.png";
import IMG2 from "../../assets/webflix2.png";
import IMG3 from "../../assets/webflix3.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "MovieHub",
    github: "https://github.com",
    demo: "https://dribble.com/adiprimanto",
  },
  {
    id: 2,
    image: IMG2,
    title: "MovieHub",
    github: "https://github.com",
    demo: "https://dribble.com/adiprimanto",
  },
  {
    id: 3,
    image: IMG3,
    title: "MovieHub",
    github: "https://github.com",
    demo: "https://dribble.com/adiprimanto",
  },
];

const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>This is portfolio item title</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}

        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://dribble.com/adiprimanto"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://dribble.com/adiprimanto"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portofolio;
