import background from "../assets/background.jpg";
import "../styles/Home.css";
import { LiaTelegramPlane } from "react-icons/lia";
import { Link } from "react-scroll";
import { FaRegPenToSquare } from "react-icons/fa6";

import { FaLongArrowAltRight } from "react-icons/fa";
import { LuCircleDollarSign } from "react-icons/lu";
import { MdOutlineRocket } from "react-icons/md";
import { BsMagic } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div className="position-relative">
      <img src={background} alt="background" className="img-fluid background" />
      <div className="container  py-5 text-center align-items-center justify-content-center z-2">
        <h1 className="cb display-1  mt-5 fw-bold ">
          <strong>
            MARKETING <br /> SOLUTION AGENCY
          </strong>
          <br />
        </h1>
        <h3 className="text-secondary mx-md-5 px-md-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
        <div className="btnDiv  py-5">
          <Link
            className="nav-link fw-normal btnGetStarted2 col-lg-2  col-md-4 col-8 mx-auto  d-flex justify-content-center align-items-center p-3"
            to=""
            aria-current="page"
          >
            <LiaTelegramPlane className="nav-link me-3 fs-4" /> GET STARTED
          </Link>{" "}
        </div>
      </div>

      <div className="bgDark">
        <div className="container py-5  text-center">
          <div className="row pt-5 px-1 position-relative">
            <div className="col-lg-4 col-md-6 col-12 backBox ">
              <div className="card   py-4 px-3 align-items-center">
                <LiaTelegramPlane className="cb icon display-5 mb-4" />
                <h2 className="text-white">Digital Marketing</h2>
                <h5 className="text-secondary">
                  Lorem ipsum dolor sit mattis amet consectetur adipiscing
                </h5>
                <div className="arrowRight my-3">
                  <FaLongArrowAltRight className="text-secondary icon fs-5  " />
                </div>
              </div>
              <div className="box1 "></div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 ">
              <div className="card   py-4 px-3 align-items-center">
                <LuCircleDollarSign className="cb icon display-5 mb-4" />
                <h2 className="text-white">Trade Shows</h2>
                <h5 className="text-secondary">
                  Lorem ipsum dolor sit mattis amet consectetur adipiscing
                </h5>
                <div className="arrowRight my-3">
                  <FaLongArrowAltRight className="text-secondary icon fs-5  " />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 ">
              <div className="card   py-4 px-3 align-items-center">
                <MdOutlineRocket className=" icon  display-5 mb-4" />
                <h2 className="text-white">Branding</h2>
                <h5 className="text-secondary">
                  Lorem ipsum dolor sit mattis amet consectetur adipiscing
                </h5>
                <div className="arrowRight my-3">
                  <FaLongArrowAltRight className="text-secondary icon fs-5  " />
                </div>
              </div>
            </div>
          
            <div className="col-lg-4 col-md-6 col-12  ">
              <div className="card   py-4 px-3 align-items-center">
                <FaRegPenToSquare className="cb icon display-5 mb-4" />
                <h2 className="text-white">Content Creation</h2>
                <h5 className="text-secondary">
                  Lorem ipsum dolor sit mattis amet consectetur adipiscing
                </h5>
                <div className="arrowRight my-3">
                  <FaLongArrowAltRight className="text-secondary icon fs-5  " />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 ">
              <div className="card   py-4 px-3 align-items-center">
                <BsMagic className=" icon  display-5 mb-4" />
                <h2 className="text-white">Graphic Design</h2>
                <h5 className="text-secondary">
                  Lorem ipsum dolor sit mattis amet consectetur adipiscing
                </h5>
                <div className="arrowRight my-3">
                  <FaLongArrowAltRight className="text-secondary icon fs-5  " />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 backBox">
              {" "}
              <div className="box2 "></div>
              <div className="card   py-4 px-3 align-items-center">
                <IoCartOutline className="cb icon display-5 mb-4" />
                <h2 className="text-white">Media Buying</h2>
                <h5 className="text-secondary">
                  Lorem ipsum dolor sit mattis amet consectetur adipiscing
                </h5>
                <div className="arrowRight my-3">
                  <FaLongArrowAltRight className="text-secondary icon fs-5  " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
