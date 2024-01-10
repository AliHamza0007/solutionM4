import { IoAddSharp } from "react-icons/io5";
import "../styles/Feature.css";
const Feature = () => {
  return (
    <>
      <div className="featureBG">
        <div className="container text-center py-5">
          <div className="row py-5">
            <h1 className="fw-semibold text-white display-5">Our Features</h1>
            <h5 className="text-secondary pt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor.
            </h5>

            <div className="dropdown my-3">
              <div
                className="d-flex px-4 p-3   featureDropdown justify-content-between align-items-center"
                data-bs-toggle="dropdown"
                aria-expanded="true"
                type="button"
              >
                <h4 className="text-secondary fs-5">Digital Marketing</h4>

                <IoAddSharp className="iconAdd cb fs-2" />
              </div>
              <p className=" dropdown-menu text-secondary fs-5 text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et elit vitae lectus convallis scelerisque. Cras vestibulum
                blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis
                nec neque sed semper. Mauris viverra, sapien sed fringilla
                egestas, sem felis condimentum augue, vitae sodales sem metus in
                ex. Aenean massa velit, sollicitudin quis elementum sit amet,
                vehicula sed nunc.
              </p>
            </div>
            <div className="dropdown mb-3">
              <div
                className="d-flex px-4 p-3   featureDropdown justify-content-between align-items-center"
                data-bs-toggle="dropdown"
                aria-expanded="true"
                type="button"
              >
                <h4 className="text-secondary fs-5">Trade Shows</h4>

                <IoAddSharp className="iconAdd cb fs-2" />
              </div>
              <p className=" dropdown-menu text-secondary fs-5 text-start">
                Donec facilisis felis arcu, vitae vestibulum massa lobortis
                eget. Ut pellentesque purus feugiat, tristique magna ac, luctus
                est. Vivamus sit amet magna venenatis, bibendum erat eu,
                tincidunt justo. Aenean viverra sollicitudin neque, sed bibendum
                nulla mollis id. Proin sit amet aliquet dui. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Mauris et elit vitae
                lectus convallis scelerisque.
              </p>
            </div>
            <div className="dropdown mb-3">
              <div
                className="d-flex px-4 p-3   featureDropdown justify-content-between align-items-center"
                data-bs-toggle="dropdown"
                aria-expanded="true"
                type="button"
              >
                <h4 className="text-secondary fs-5">Branding</h4>

                <IoAddSharp className="iconAdd cb fs-2" />
              </div>
              <p className=" dropdown-menu text-secondary fs-5 text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et elit vitae lectus convallis scelerisque. Cras vestibulum
                blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis
                nec neque sed semper. Mauris viverra, sapien sed fringilla
                egestas, sem felis condimentum augue, vitae sodales sem metus in
                ex. Aenean massa velit, sollicitudin quis elementum sit amet,
                vehicula sed nunc.
              </p>
            </div>
            <div className="dropdown mb-3">
              <div
                className="d-flex px-4 p-3   featureDropdown justify-content-between align-items-center"
                data-bs-toggle="dropdown"
                aria-expanded="true"
                type="button"
              >
                <h4 className="text-secondary fs-5">Content Creation</h4>

                <IoAddSharp className="iconAdd cb fs-2" />
              </div>
              <p className=" dropdown-menu text-secondary fs-5 text-start">
                Donec facilisis felis arcu, vitae vestibulum massa lobortis
                eget. Ut pellentesque purus feugiat, tristique magna ac, luctus
                est. Vivamus sit amet magna venenatis, bibendum erat eu,
                tincidunt justo. Aenean viverra sollicitudin neque, sed bibendum
                nulla mollis id. Proin sit amet aliquet dui. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Mauris et elit vitae
                lectus convallis scelerisque.
              </p>
            </div>
            <div className="dropdown mb-3">
              <div
                className="d-flex px-4 p-3   featureDropdown justify-content-between align-items-center"
                data-bs-toggle="dropdown"
                aria-expanded="true"
                type="button"
              >
                <h4 className="text-secondary fs-5">Graphic Design</h4>

                <IoAddSharp className="iconAdd cb fs-2" />
              </div>
              <p className=" dropdown-menu text-secondary fs-5 text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et elit vitae lectus convallis scelerisque. Cras vestibulum
                blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis
                nec neque sed semper. Mauris viverra, sapien sed fringilla
                egestas, sem felis condimentum augue, vitae sodales sem metus in
                ex. Aenean massa velit, sollicitudin quis elementum sit amet,
                vehicula sed nunc.
              </p>
            </div>
            <div className="dropdown mb-3">
              <div
                className="d-flex px-4 p-3   featureDropdown justify-content-between align-items-center"
                data-bs-toggle="dropdown"
                aria-expanded="true"
                type="button"
              >
                <h4 className="text-secondary fs-5">Media Buying</h4>

                <IoAddSharp className="iconAdd cb fs-2" />
              </div>
              <p className=" dropdown-menu text-secondary fs-5 text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et elit vitae lectus convallis scelerisque. Cras vestibulum
                blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis
                nec neque sed semper. Mauris viverra, sapien sed fringilla
                egestas, sem felis condimentum augue, vitae sodales sem metus in
                ex. Aenean massa velit, sollicitudin quis elementum sit amet,
                vehicula sed nunc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
