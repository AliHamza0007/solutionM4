import imgAbout from "../assets/imgAbout.jpg";
import imgAbout2 from "../assets/imgAbout2.jpg";
import "../styles/About.css";
import { TbFilePencil } from "react-icons/tb";
import { IoReload } from "react-icons/io5";

const About = () => {
  return (
    <>
      <div className="bgAbout text-white">
        <div className="container py-5">
          <div className="row py-3 align-items-center justify-content-center">
            <div className="col-md-6 col-12">
              <img src={imgAbout} alt="imgAbout" className="img-fluid " />
            </div>
            <div className="col-md-6 col-12 ps-md-5 py-5 text-md-start text-center">
              <div className="hr" />
              <h1 className=" fw-semibold py-4">About Us</h1>
              <p className="text-secondary fs-5 fw-light ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh
                sollicitudin tincidunt gravida. Nam convallis justo et ligula
                luctus suscipit. Etiam eu nisi turpis. Donec sollicitudin
                accumsan quam, rhoncus sagittis metus semper quis. Praesent
                convallis mauris sed ipsum lobortis facilisis. Nulla cursus sem
                non nunc sagittis, a volutpat mauris lobortis. Nulla ut feugiat
                tellus. Nam dictum nisi nec scelerisque auctor
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bgDark">
        <div className="container py-5">
          <div className="row py-3 align-items-center justify-content-center">
            <div className="col-md-6 col-12 py-5 text-md-start text-center">
              <div className="hr" />
              <h1 className=" fw-semibold py-4 display-5 text-white">
                We are Professionals
              </h1>
              <p className="text-secondary fs-4 fw-light ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                eiusmod tempor incididunt ut labore.
              </p>
              <div className="d-md-flex justify-content-center  py-3">
                <TbFilePencil className="cb  display-1 " />
                <div className="ps-3">
                  <h4 className=" fw-semibold text-white">Ideas & Plans</h4>
                  <p className="text-secondary fs-5 fw-light ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusmod.
                  </p>
                </div>
              </div>
              <div className="d-md-flex justify-content-center  py-3">
                <IoReload className="cb  display-1 " />
                <div className="ps-3 ">
                  <h4 className=" fw-semibold text-white">Prompt Strategies</h4>
                  <p className="text-secondary fs-5 fw-light ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusmod.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <img src={imgAbout2} alt="imgAbout2" className="img-fluid " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
