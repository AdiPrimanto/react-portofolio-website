import React from "react";
import "./portofolio.css";
import webflix1 from "../../assets/portfolio/webflix/webflix1.png";
import webflix2 from "../../assets/portfolio/webflix/webflix2.png";
import webflix3 from "../../assets/portfolio/webflix/webflix3.png";
import d2c1 from "../../assets/portfolio/d2c/d2c1.png";
import d2c2 from "../../assets/portfolio/d2c/d2c2.png";
import d2c3 from "../../assets/portfolio/d2c/d2c3.png";
import portfolio1 from "../../assets/portfolio/vue-porto/portfolio1.png";
import portfolio2 from "../../assets/portfolio/vue-porto/portfolio2.png";
import portfolio3 from "../../assets/portfolio/vue-porto/portfolio3.png";
import emet1 from "../../assets/portfolio/emet/emet1.png";
import emet2 from "../../assets/portfolio/emet/emet2.png";
import emet3 from "../../assets/portfolio/emet/emet3.png";
import KiriminAJA1 from "../../assets/portfolio/KiriminAJA/KiriminAJA1.png";
import KiriminAJA2 from "../../assets/portfolio/KiriminAJA/KiriminAJA2.png";
import KiriminAJA3 from "../../assets/portfolio/KiriminAJA/KiriminAJA3.png";
import topupgame1 from "../../assets/portfolio/topupgame/topupgame1.png";
import topupgame2 from "../../assets/portfolio/topupgame/topupgame2.png";
import topupgame3 from "../../assets/portfolio/topupgame/topupgame3.png";
import adachat1 from "../../assets/portfolio/adachat/adachat1.png";
import adachat2 from "../../assets/portfolio/adachat/adachat2.png";
import adachat3 from "../../assets/portfolio/adachat/adachat3.png";
import d2c_v2_1 from "../../assets/portfolio/d2c_v2/d2c_v2_1.png";
import d2c_v2_2 from "../../assets/portfolio/d2c_v2/d2c_v2_2.png";
import d2c_v2_3 from "../../assets/portfolio/d2c_v2/d2c_v2_3.png";
import tokoonline1 from "../../assets/portfolio/tokoonline/tokoonline1.png";
import tokoonline2 from "../../assets/portfolio/tokoonline/tokoonline2.png";
import tokoonline3 from "../../assets/portfolio/tokoonline/tokoonline3.png";
import watchme1 from "../../assets/portfolio/watchme/watchme1.png";
import watchme2 from "../../assets/portfolio/watchme/watchme2.png";
import watchme3 from "../../assets/portfolio/watchme/watchme3.png";
import kinerjadosen1 from "../../assets/portfolio/kinerjadosen/kinerjadosen1.png";
import kinerjadosen2 from "../../assets/portfolio/kinerjadosen/kinerjadosen2.png";
import kinerjadosen3 from "../../assets/portfolio/kinerjadosen/kinerjadosen3.png";
import lazcoal1 from "../../assets/portfolio/lazcoal/lazcoal1.png";
import lazcoal2 from "../../assets/portfolio/lazcoal/lazcoal2.png";
import lazcoal3 from "../../assets/portfolio/lazcoal/lazcoal3.png";
import hefa1 from "../../assets/portfolio/hefa/hefa1.png";
import hefa2 from "../../assets/portfolio/hefa/hefa2.png";
import hefa3 from "../../assets/portfolio/hefa/hefa3.png";
import bumaA1 from "../../assets/portfolio/buma/bumaA1.png";
import bumaA2 from "../../assets/portfolio/buma/bumaA2.png";
import bumaA3 from "../../assets/portfolio/buma/bumaA3.png";
import bumaM1 from "../../assets/portfolio/buma/bumaM1.png";
import bumaM2 from "../../assets/portfolio/buma/bumaM2.png";
import bumaM3 from "../../assets/portfolio/buma/bumaM3.png";
import admin1 from "../../assets/portfolio/foreman/admin1.png";
import admin2 from "../../assets/portfolio/foreman/admin2.png";
import admin3 from "../../assets/portfolio/foreman/admin3.png";
import member1 from "../../assets/portfolio/foreman/member1.png";
import member2 from "../../assets/portfolio/foreman/member2.png";
import member3 from "../../assets/portfolio/foreman/member3.png";
import hwi1 from "../../assets/portfolio/hwi/hwi1.png";
import profilhwi1 from "../../assets/portfolio/hwi/profilhwi1.png";
import profilhwi2 from "../../assets/portfolio/hwi/profilhwi2.png";
import profilhwi3 from "../../assets/portfolio/hwi/profilhwi3.png";

import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const data = [
  {
    id: 1,
    image: [profilhwi1, profilhwi2, profilhwi3],
    title: "Profile Health Wealth International",
    description: "Website Profile HWI (Health Wealth International)",
    tools: "Vue JS, Element UI, Vuex, Sass",
    demo: "https://www.healthwealthint.com/profile-hwi",
  },
  {
    id: 2,
    image: [hwi1],
    title: "MLM Distributor Health Wealth International",
    description: "Website MLM HWI (Health Wealth International)",
    tools: "Vue JS, Element UI, Vuex, Sass",
    demo: "https://member.healthwealthint.com/#/login",
  },
  {
    id: 3,
    image: [bumaA1, bumaA2, bumaA3],
    title: "MLM Buma Admin",
    description: "Website MLM Buma",
    tools: "Vue JS, Element UI, Vuex, Sass",
  },
  {
    id: 4,
    image: [bumaM1, bumaM2, bumaM3],
    title: "MLM Buma Member",
    description: "Website MLM Buma",
    tools: "Vue JS, Element UI, Vuex, Sass",
  },
  {
    id: 5,
    image: [admin1, admin2, admin3],
    title: "MLM Foreman Admin",
    description: "Website MLM Foreman",
    tools: "Vue JS, Element UI, Vuex, Sass",
  },
  {
    id: 6,
    image: [member1, member2, member3],
    title: "MLM Foreman Member",
    description: "Website MLM Foreman",
    tools: "Vue JS, Element UI, Vuex, Sass",
  },
  {
    id: 7,
    image: [adachat1, adachat2, adachat3],
    title: "Ada-Chat",
    github: "https://github.com/AdiPrimanto/ada-chat",
    demo: "https://ada-chat.vercel.app/",
    description: "Website chat",
    tools: "Vue JS, Tailwind, Pinia",
  },
  {
    id: 8,
    image: [webflix1, webflix2, webflix3],
    title: "Weebflix",
    github: "https://github.com/AdiPrimanto/webflix",
    demo: "https://webflix-rose.vercel.app/",
    description: "Website clone netflix",
    tools: "Vue JS, Tailwind, Sass, Vuex",
  },
  {
    id: 9,
    image: [tokoonline1, tokoonline2, tokoonline3],
    title: "Shayna Store",
    github: "https://github.com/AdiPrimanto/shayna-store",
    description:
      "Website toko online yang menyajikan informasi dan dapat melakukan checkout produk",
    tools: "Vue JS, Bootstrap, Vuex",
  },
  {
    id: 10,
    image: [portfolio1, portfolio2, portfolio3],
    title: "Portfolio Vue",
    github: "https://github.com/AdiPrimanto/Portofolio",
    demo: "https://portofolio-adiprimanto.vercel.app/",
    description: "Website portofolio",
    tools: "Vue JS, Sass",
  },
  {
    id: 11,
    image: [KiriminAJA1, KiriminAJA2, KiriminAJA3],
    title: "Company Profile KiriminAja",
    github: "https://github.com/AdiPrimanto/kirimin_aja",
    demo: "https://kirimin-aja-kappa.vercel.app/",
    description: "Website company profile KiriminAja",
    tools: "Vue JS, Tailwind, Sass, Vuex",
  },
  {
    id: 12,
    image: [emet1, emet2, emet3],
    title: "Landing Page e-Meterai",
    github: "https://github.com/AdiPrimanto/memet",
    demo: "https://memet-adiprimanto.vercel.app/",
    description: "Website landing page e-meterai",
    tools: "Next JS, Typescript, Tailwind",
  },
  {
    id: 13,
    image: [watchme1, watchme2, watchme3],
    title: "WatchMe",
    github: "https://github.com/AdiPrimanto/watchme",
    demo: "https://watchme-five.vercel.app/",
    description: "Website list movie",
    tools: "Next JS, Tailwind",
  },
  {
    id: 14,
    image: [topupgame1, topupgame2, topupgame3],
    title: "Topup Game Voucher",
    github: "https://github.com/AdiPrimanto/topup-voucher-game",
    demo: "https://topup-voucher-game.vercel.app/",
    description: "Website topup game voucher",
    tools: "Next JS, Tailwind",
  },
  {
    id: 15,
    image: [d2c1, d2c2, d2c3],
    title: "D2C Gaming Store",
    demo: "https://d2cgamingstore.com/",
    description: "Website platform topup game",
    tools: "PHP, Bootstrap, Javascript, Jquery, CSS",
  },
  {
    id: 16,
    image: [d2c_v2_1, d2c_v2_2, d2c_v2_3],
    title: "D2C Gaming Store v2",
    demo: "http://demo.hjcorp.id/",
    description: "Website platform topup game versi 2",
    tools: "PHP, Bootstrap, Javascript, Jquery, CSS",
  },
  {
    id: 17,
    image: [lazcoal1, lazcoal2, lazcoal3],
    title: "Laz Coal Mandiri",
    demo: "https://lazcoalmandiri.co.id/",
    description: "Website company profile Laz Coal Mandiri",
    tools: "PHP, Bootstrap, Javascript",
  },
  {
    id: 18,
    image: [kinerjadosen1, kinerjadosen2, kinerjadosen3],
    title: "Kinerja Akademik Dosen",
    github: "https://github.com/AdiPrimanto/sistemfuzzy",
    demo: "http://kinerjaakademikdosen.herokuapp.com/",
    description: "Aplikasi penilaian kinerja akademik dosen STMIK AKAKOM",
    tools: "Laravel, Bootstrap",
  },
  {
    id: 19,
    image: [hefa1, hefa2, hefa3],
    title: "Hefa Store",
    github: "https://github.com/AdiPrimanto/hefa-store",
    demo: "https://heefa-store.netlify.app/",
    description: "Website toko online",
    tools: "Bootstrap, Javascript",
  },
];

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
                        <img src={listImage} alt="" />
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
                    Live Demo
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
