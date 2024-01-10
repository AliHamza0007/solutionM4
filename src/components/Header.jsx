import { Link } from "react-scroll";
import "../styles/Header.css";
import { FaSkype, FaTwitter } from "react-icons/fa";
import { BsRocketFill } from "react-icons/bs";
import { IoMenuOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark navbar-expand-lg shadow">
      <div className="container">
        <Link
          spy
          smooth
          duration={1000}
          className="navbar-brand  fw-bold fs-3"
          to="header"
        >
          SolutionM4
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <IoMenuOutline className="fa  fa-bars  fs-1 justify-content-center py-2 navbar-toggler-icon" />
          <MdOutlineClose className="fa   fa-times  fs-1 justify-content-center py-2 navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav  ms-auto mt-2 mt-lg-0 text-center">
            <li className="nav-item px-2">
              <Link
                spy
                smooth
                duration={1000}
                className="nav-link "
                to="about"
                aria-current="page"
              >
                About{" "}
              </Link>
            </li>

            <li className="nav-item px-2">
              <Link
                spy
                smooth
                duration={1000}
                className="nav-link "
                to="feature"
                aria-current="page"
              >
                Features
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link
                spy
                smooth
                duration={1000}
                className="nav-link "
                to="portfolio"
                aria-current="page"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link
                spy
                smooth
                duration={1000}
                className="nav-link "
                to="contact"
                aria-current="page"
              >
                Contacts
              </Link>
            </li>
          </ul>
          <div className="d-lg-flex mb-md-0 mb-2 justify-content-center align-items-center   ps-lg-5">
            <div className="d-flex mb-md-0 mb-2 justify-content-center align-items-center">
              <FaSkype className="nav-link  me-3 fs-4" />
              <FaTwitter className="nav-link me-3 fs-4" />
              <Link
                spy
                smooth
                duration={1000}
                className="nav-link  me-3 fs-4 fw-bold"
                to=""
                aria-current="page"
              >
                V
              </Link>
            </div>
            <Link
              spy
              smooth
              duration={1000}
              className="nav-link fw-normal btnGetStarted col-8  d-flex justify-content-center align-items-center border ms-lg-4  mx-auto border-primary p-2 px-4"
              to="footer"
              aria-current="page"
            >
              <BsRocketFill className="nav-link me-3 fs-4" /> GET STARTED
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
