import React from "react";
import "./portofolio.css";
import { data } from "./data.js";

import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const Portofolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, description, tools }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                {/* <img src={image} alt={title} /> */}

                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  pagination={true}
                  className="mySwiper"
                >
                  {image.map((listImage, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <Zoom>
                          <img src={listImage} alt="" />
                        </Zoom>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>

              <h3 style={{ marginBottom: "0" }}>{title}</h3>
              <p>{description}</p>
              <small>Tools: {tools}</small>

              <div
                className="portfolio__item-cta"
                style={{ marginTop: "1rem" }}
              >
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
                    Link
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portofolio;
