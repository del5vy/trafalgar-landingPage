import React from "react";
import { FooterLogo, FooterLogo2, FooterLogo3 } from "../../assets";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className=" text-white foot-sec">
        <div className="container p-4 pb-0">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
                  <div className="logo-div">
                    <img className="foot-logo1" src={FooterLogo} alt="" />
                    <img className="foot-logo3" src={FooterLogo3} alt="" />
                    <img className="foot-logo2" src={FooterLogo2} alt="" />
                  </div>
                  <p className="foot-para1">
                    Trafalgar provides progressive, and affordable<br></br>{" "}
                    healthcare, accessible on mobile and online<br></br> for
                    everyone
                  </p>
                  <p className="foot-para2">
                    ©Trafalgar PTY LTD 2020. All rights reserved
                  </p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 offset-lg-1 col-lg-3 offset-xl-1 col-xl-3">
                      <h5 className="foot-comp-header">Company</h5>
                      <p className="foot-para2">About</p>
                      <p className="foot-para2">Testimonials</p>
                      <p className="foot-para2">Find a doctor</p>
                      <p className="foot-para2">Apps</p>
                    </div>
                    <div className="col-sm-12 col-md-12 offset-lg-1 col-lg-3 offset-xl-1 col-xl-3">
                      <h5 className="foot-comp-header">Region</h5>
                      <p className="foot-para2">Indonesia</p>
                      <p className="foot-para2">Singapore</p>
                      <p className="foot-para2">Hong kong</p>
                      <p className="foot-para2">Canada</p>
                    </div>
                    <div className="col-sm-12 col-md-12 offset-lg-1 col-lg-3 offset-xl-1 col-xl-3">
                      <h5 className="foot-comp-header">Help</h5>
                      <p className="foot-para2">Help center</p>
                      <p className="foot-para2">Contact support</p>
                      <p className="foot-para2">Instructions</p>
                      <p className="foot-para2">How it works</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
