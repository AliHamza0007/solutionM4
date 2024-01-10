import "../styles/Portfolio.css";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { IoPlayOutline } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import s1 from "../assets/swiperImg1.jpg";
import s2 from "../assets/swiperImg2.jpg";
import s3 from "../assets/swiperImg3.jpg";
import watchVedio from "../assets/watchVedio.jpg";
const Portfolio = () => {
  return (
    <>
      <div className="portfolioBG">
        <div className="container text-center py-5">
          <div className="row py-5">
            <h1 className="fw-semibold text-white display-5">Our Portfolio</h1>
            <h5 className="text-secondary col-md-7 col mx-auto pt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h5>
          </div>

          <Swiper
            modules={[Navigation, EffectFade, Autoplay, Pagination]}
            effect="slide"
            speed="1000"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              425: { slidesPerView: 1 },
            }}
            spaceBetween={30}
            className="swiper "
          >
            <SwiperSlide>
              <div className="  position-relative overflow-hidden swiperImgDiv">
                <img src={s1} alt="s1" className="img-fluid swiperImg" />
                <div className="bgShade" />
                <div className="swiperContent  py-5 px-md-5 px-1">
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </h3>
                  <div className="my-4 col-9 mx-auto border-bottom border-secondary" />
                  <h5 className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="position-relative overflow-hidden swiperImgDiv">
                <img src={s2} alt="s1" className="img-fluid swiperImg" />
                <div className="bgShade" />
                <div className="swiperContent  py-5 px-md-5 px-1">
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </h3>
                  <div className="my-4 col-9 mx-auto border-bottom border-secondary" />
                  <h5 className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="  position-relative overflow-hidden swiperImgDiv">
                <img src={s3} alt="s1" className="img-fluid swiperImg" />
                <div className="bgShade" />
                <div className="swiperContent  py-5 px-md-5 px-1">
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </h3>
                  <div className="my-4 col-9 mx-auto border-bottom border-secondary" />
                  <h5 className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="bg2 text-white">
        <div className="container text-center pt-5">
          <div className="row pt-5">
            <h1 className="fw-semibold text-white display-5">
              Watch the Video
            </h1>
            <h5 className="text-secondary col-md-9 col-12 mx-auto pt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h5>

            <div className=" vedioBox position-relative  mt-4 pt-5">
              <img
                src={watchVedio}
                alt="watchVedio"
                className="img-fluid watchVedio"
              />

              <IoPlayOutline className="playIcon " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
