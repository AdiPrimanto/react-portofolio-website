import React from "react";
import "./portofolio.css";
import webflix from "../../assets/portfolio/webflix.png";
import watchme from "../../assets/portfolio/WatchMe.png";
import memet from "../../assets/portfolio/memet.png";
import portfolio from "../../assets/portfolio/portfolio.png";
import d2c1 from "../../assets/portfolio/d2c1.png";
import lazcoal from "../../assets/portfolio/lazcoal.png";
import tokoonline from "../../assets/portfolio/tokoonline.png";
import kinerjadosen from "../../assets/portfolio/kinerjadosen.png";
import hefa from "../../assets/portfolio/hefa.png";
import adachat from "../../assets/portfolio/adachat.png";
import topupgame from "../../assets/portfolio/topupgame.png";

const data = [
  {
    id: 1,
    image: webflix,
    title: "Weebflix",
    github: "https://github.com/AdiPrimanto/webflix",
    demo: "https://webflix-rose.vercel.app/",
  },
  {
    id: 2,
    image: watchme,
    title: "WatchMe",
    github: "https://github.com",
    demo: "https://watchme-five.vercel.app/",
  },
  {
    id: 3,
    image: memet,
    title: "Landing Page e-Meterai",
    github: "https://github.com/AdiPrimanto/memet",
    demo: "https://memet-adiprimanto.vercel.app/",
  },
  {
    id: 4,
    image: portfolio,
    title: "Portfolio Vue",
    github: "https://github.com/AdiPrimanto/Portofolio",
    demo: "https://portofolio-adiprimanto.vercel.app/",
  },
  {
    id: 5,
    image: d2c1,
    title: "D2C Gaming Store",
    demo: "https://d2cgamingstore.com/",
  },
  {
    id: 6,
    image: lazcoal,
    title: "Laz Coal Mandiri",
    demo: "https://lazcoal.hjmail.id/",
  },
  {
    id: 7,
    image: tokoonline,
    title: "Toko Online",
    github: "https://github.com/AdiPrimanto/shayna-store",
  },
  {
    id: 8,
    image: kinerjadosen,
    title: "Kinerja Akademik Dosen",
    github: "https://github.com/AdiPrimanto/sistemfuzzy",
    demo: "http://kinerjaakademikdosen.herokuapp.com/",
  },
  {
    id: 9,
    image: adachat,
    title: "Ada Chat",
    github: "https://github.com/AdiPrimanto/ada-chat",
    demo: "https://hopeful-dubinsky-0519b1.netlify.app/",
  },
  {
    id: 10,
    image: topupgame,
    title: "Topup Voucher Game",
    github: "https://github.com/AdiPrimanto/topup-voucher-game",
    demo: "https://topup-voucher-game.vercel.app/",
  },
  {
    id: 11,
    image: hefa,
    title: "Hefa Store",
    github: "https://github.com/AdiPrimanto/hefa-store",
    demo: "https://heefa-store.netlify.app/",
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
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    className="btn"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                )}
                {demo && (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
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
