import React from "react";
import "./testimonial.css";
import AVT1 from "../../assets/avatar1.svg";
import AVT2 from "../../assets/avatar2.svg";
import AVT3 from "../../assets/avatar3.svg";
import AVT4 from "../../assets/avatar4.svg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVT1,
    name: "Mohammad Ahsan",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum suscipit earum laboriosam saepe voluptate facilis expedita eaque, dolores vitae, dolorem commodi sint in natus quidem autem optio deserunt eum quod.",
  },
  {
    avatar: AVT2,
    name: "Kevin Sanjaya",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum suscipit earum laboriosam saepe voluptate facilis expedita eaque, dolores vitae, dolorem commodi sint in natus quidem autem optio deserunt eum quod.",
  },
  {
    avatar: AVT3,
    name: "Greysia Polii",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum suscipit earum laboriosam saepe voluptate facilis expedita eaque, dolores vitae, dolorem commodi sint in natus quidem autem optio deserunt eum quod.",
  },
  {
    avatar: AVT4,
    name: "Liliyana Natsir",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum suscipit earum laboriosam saepe voluptate facilis expedita eaque, dolores vitae, dolorem commodi sint in natus quidem autem optio deserunt eum quod.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
