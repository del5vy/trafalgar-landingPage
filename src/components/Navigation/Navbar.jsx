import React from "react";
import { Logo } from "../../assets";

// const Navbar = (props) => {
const Navbar = ({ name, email }) => {
  const showName = () => {
    console.log("Dele");
  };
  // const name = props.name;
  // const email = props.email;
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <nav class="navbar navbar-expand-lg navbar-light mt-3">
            <a className="navbar-brand d-lg-none " href="#">
              <img src={Logo} alt="" />
            </a>
            <a className="navbar-brand d-none d-md-block ml-0" href="#">
              <img src={Logo} alt="" />
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active ">
                  <a className="nav-link home-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link home-link2" href="#">
                    Find a doctor <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link home-link2" href="#">
                    Apps <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link home-link2" href="#">
                    Testimonials <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link home-link2" href="#">
                    About Us <span class="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>

      {/* <h1>Hello {name}</h1>
      <p>I am learning react using {email}</p>
      <button className="btn btn-success" onClick={showName}>
        Click me
      </button> */}
    </React.Fragment>
  );
};

export default Navbar;
