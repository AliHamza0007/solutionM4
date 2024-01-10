import "../styles/Testimonials.css";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import u1 from "../assets/users/u1.jpg";
import u2 from "../assets/users/u2.jpg";
import u3 from "../assets/users/u3.jpg";
import u4 from "../assets/users/u4.jpg";
import u5 from "../assets/users/u5.jpg";
const Testimonials = () => {
  return (
    <>
      <div className="portfolioBG ">
        <div className="container text-center pt-5">
          <div className="row pt-5">
            <h1 className="fw-semibold text-white display-5">
              Customer Testimonials
            </h1>
            <h5 className="text-secondary  pt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </h5>
          </div>
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
          className="swiper px-5"
        >
          <SwiperSlide>
            <div className="card text-center  py-4 px-1 align-items-center">
              <img src={u1} className="img-fluid userImg my-3" />
              <h3 className="text-white  py-4">Marie Jordan</h3>
              <h5 className="text-secondary">
                Lorem ipsum dolor sit mattis amet consectetur adipiscing
              </h5>
              <div className="d-flex my-4 justify-content-center align-items-center gap-3">
                <MdOutlineStarBorderPurple500 className=" cb  fs-2  " />
                <MdOutlineStarBorderPurple500 className=" cb  fs-2  " />
                <MdOutlineStarBorderPurple500 className=" cb  fs-2  " />
                <MdOutlineStarBorderPurple500 className=" cb  fs-2  " />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card text-center  py-4 px-1 align-items-center">
              <img src={u2} className="img-fluid userImg my-3" />
              <h3 className="text-white  py-4">Ann Brown</h3>
              <h5 className="text-secondary">
                Lorem ipsum dolor sit mattis amet consectetur adipiscing
              </h5>
              <div className="d-flex my-4 justify-content-center align-items-center gap-3">
                <MdOutlineStarBorderPurple500 className=" cb  fs-2  " />
                <MdOutlineStarBorderPurple500 className=" cb  fs-2  " />
                <MdOutlineStarBorderPurple500 className=" cb  fs-2  " />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card text-center  py-4 px-1 align-items-center">
              <img src={u3} className="img-fluid userImg my-3" />
              <h3 className="text-white  py-4">Andrew Bill</h3>
              <h5 className="text-secondary">
                Lorem ipsum dolor sit mattis amet consectetur adipiscing
              </h5>
              <div className="d-flex my-4 justify-content-center align-items-center gap-3">
                <MdOutlineStarBorderPurple500 className=" cb  fs-2  " />
                <MdOutlineStarBorderPurple500 className=" cb  fs-2  " />
                <MdOutlineStarBorderPurple500 className=" cb  fs-2  " />
                <MdOutlineStarBorderPurple500 className=" cb  fs-2  " />
                <MdOutlineStarBorderPurple500 className=" cb  fs-2  " />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="container d-md-flex justify-content-center align-items-center gap-4">
          <div className="card col-md-4 col text-center  py-4 px-1 align-items-center">
            <img src={u4} className="img-fluid userImg my-3" />
            <h3 className="text-white  py-4">Jason Stawer</h3>
            <h5 className="text-secondary">
              Lorem ipsum dolor sit mattis amet consectetur adipiscing
            </h5>
            <div className="d-flex my-4 justify-content-center align-items-center gap-3">
              <MdOutlineStarBorderPurple500 className=" cb  fs-2  " />
              <MdOutlineStarBorderPurple500 className=" cb  fs-2  " />
            </div>
          </div>
          <div className="card text-center  col-md-4 col  py-4 px-1 align-items-center">
            <img src={u5} className="img-fluid userImg my-3" />
            <h3 className="text-white  py-4">Lisa Green</h3>
            <h5 className="text-secondary">
              Lorem ipsum dolor sit mattis amet consectetur adipiscing
            </h5>
            <div className="d-flex my-4 justify-content-center align-items-center gap-3">
              <MdOutlineStarBorderPurple500 className=" cb  fs-2  " />
              <MdOutlineStarBorderPurple500 className=" cb  fs-2  " />
              <MdOutlineStarBorderPurple500 className=" cb  fs-2  " />
              <MdOutlineStarBorderPurple500 className=" cb  fs-2  " />
              <MdOutlineStarBorderPurple500 className=" cb  fs-2  " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
