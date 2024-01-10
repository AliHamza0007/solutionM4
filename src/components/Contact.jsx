import imgAbout2 from "../assets/imgAbout2.jpg";
import "../styles/Contact.css";
import { Link } from "react-scroll";
import { MdOutlinePhone } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  return (
    <>
      <div className="bgDark ">
        <div className="container py-5">
          <div className="row py-3 align-items-center justify-content-center">
            <div className="col-md-6 col-12 py-5 text-md-start text-center">
              <div className="hr" />
              <h1 className=" fw-semibold py-4 text-white">Let's Talk? </h1>
              <p className="text-secondary fs-4 fw-light ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                eiusmod tempor incididunt ut labore.
              </p>
              <form>
                <div className=" col-sm-12 form-group mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control  input"
                  />
                </div>
                <div className=" col-sm-12 form-group mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control  input"
                  />
                </div>
                <div className=" col-sm-12 form-group mb-3">
                  <input
                    type="number"
                    name="number"
                    placeholder="Phone"
                    className="form-control  input"
                  />
                </div>
                <div className="btnDiv  py-3">
                  <Link
                    className="nav-link fw-normal btnGetStarted2 d-inline  p-3 px-4 text-uppercase btn"
                    to=""
                    aria-current="page"
                  >
                    Contact Us
                  </Link>{" "}
                </div>
              </form>
            </div>
            <div className="col-md-6 col-12">
              <img src={imgAbout2} alt="imgAbout2" className="img-fluid " />
            </div>
          </div>
        </div>

        <div className="py-3" style={{ width: "100%" }}>
          <iframe
            width="100%"
            height={400}
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=lahore+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          >
            <a href="https://www.maps.ie/population/">Population mapping</a>
          </iframe>
        </div>
      </div>
      <div className="colorContainer">
        {" "}
        <div className="container   pb-5 text-center">
          <div className="row align-items-center justify-content-center pt-5 pb-1 px-1 position-relative">
            <div className="col-lg-4 col-md-6 col-12   backBox ">
              <div className="card   py-4 px-3 align-items-center">
                <MdOutlinePhone className="cb icon display-5 mb-4" />
                <h2 className="text-white">+425 235 712</h2>
                <h5 className="text-secondary">
                  Lorem ipsum dolor sit mattis amet consectetur adipiscing
                </h5>
                <div className="arrowRight my-3">
                  <FaLongArrowAltRight className="text-secondary icon fs-5  " />
                </div>
              </div>
              <div className="box1 "></div>
            </div>
            <div className="col-lg-4 col-md-6 col-12  ">
              <div className="card   py-4 px-3 align-items-center">
                <MdOutlineEmail className="cb icon display-5 mb-4" />
                <h2 className="text-white">info@yoursite.com</h2>
                <h5 className="text-secondary">
                  Lorem ipsum dolor sit mattis amet consectetur adipiscing
                </h5>
                <div className="arrowRight my-3">
                  <FaLongArrowAltRight className="text-secondary icon fs-5  " />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 position-relative backBox">
              <div className="box2 "></div>

              <div className="card   py-4 px-3 align-items-center">
                <CiLocationOn className=" icon  display-5 mb-4" />
                <h2 className="text-white">Office Street, 123</h2>
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
    </>
  );
};
export default Contact;
