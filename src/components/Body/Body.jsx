import React from "react";
import { HeaderImage1 } from "../../assets";
import { Rectangle } from "../../assets";
import Card from "../Card/Card";
import { DataArr } from "../../data";
import Button from "../Button/Button";
import { LeadingImg } from "../../assets";
import { LeadingImg2 } from "../../assets";
import { faceImg } from "../../assets";
import Card2 from "../Card2/Card2";

const Body = () => {
  return (
    <React.Fragment>
      <div class="row">
        <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
              <div className="virtual-div">
                <h2 className="virtual-header">
                  Virtual healthcare<br></br> for you
                </h2>
                <p className="trafalgar-para">
                  Trafalgar provides progressive, and affordable<br></br>{" "}
                  healthcare, accessible on mobile and online<br></br> for
                  everyone
                </p>
                <Button>Consult Today</Button>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7 img-header">
              <img src={HeaderImage1} alt="" />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10">
          <section className="service-section">
            <h2 className="service-header">Our services</h2>
            <img className="rect-img" src={Rectangle} alt="" />
            <p className="rect-para">
              We provide to you the best choiches for you. Adjust it to your
              health needs and make sure your undergo treatment<br></br> with
              our highly qualified doctors you can consult with us which type of
              service is suitable for your health
            </p>
          </section>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10 card-div">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <Card
                imgDetails="img1"
                headerDetails={"headerClass1"}
                textPara="textClass1"
                {...DataArr[0]}
              />
              <Card
                cardClass="card2"
                imgDetails="img1"
                headerDetails={"headerClass1"}
                textPara="textClass1"
                {...DataArr[4]}
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <Card
                imgDetails="img1"
                headerDetails={"headerClass1"}
                textPara="textClass1"
                {...DataArr[1]}
              />
              <Card
                cardClass="card2"
                imgDetails="img1"
                headerDetails={"headerClass1"}
                textPara="textClass1"
                {...DataArr[3]}
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <Card
                imgDetails="img1"
                headerDetails={"headerClass1"}
                textPara="textClass1"
                {...DataArr[2]}
              />
              <Card
                cardClass="card2"
                imgDetails="img1"
                headerDetails={"headerClass1"}
                textPara="textClass1"
                {...DataArr[5]}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10 btn-div2">
          <Button button2="button2">Learn more</Button>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7 leadingImg-div">
              <img className="leadingImg" src={LeadingImg} alt="" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
              <section className="leading-sec">
                <h2 className="leading-header">
                  Leading healthcare<br></br> providers
                </h2>
                <img src={Rectangle} alt="" />
                <p className="leading-para">
                  Trafalgar provides progressive, and affordable<br></br>{" "}
                  healthcare, accessible on mobile and online for<br></br>{" "}
                  everyone. To us, it’s not just work. We take pride<br></br> in
                  the solutions we deliver
                </p>
                <Button button2="button2">Learn more</Button>
              </section>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
              <section className="download-sec">
                <h2>
                  Download our<br></br>mobile apps
                </h2>
                <img src={Rectangle} alt="" />
                <p className="dedicated-para">
                  Our dedicated patient engagement app and<br></br>
                  web portal allow you to access information<br></br>{" "}
                  instantaneously (no tedeous form, long calls,<br></br>
                  or administrative hassle) and securely
                </p>
                <Button button2="button2 button3">Download</Button>
              </section>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7 leadingImg2-div">
              <img src={LeadingImg2} alt="" />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10">
          <div className="row-cont">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10 cust-div">
                <h2>What our customers are saying</h2>
                <div className="rect-div"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5 faceImg3">
                    <img src={faceImg} alt="" />
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7">
                    <div className="edward-div">
                      <h4>Edward Newgate</h4>
                      <p>Founder Circle</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7 dedi-div">
                <p className="dedi-para">
                  “Our dedicated patient engagement app and<br></br> web portal
                  allow you to access information<br></br> instantaneously (no
                  tedeous form, long calls,<br></br> or administrative hassle)
                  and securely”
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10 latest-cont">
          <div className="latest-div">
            <h2>Checkout our latest article</h2>
            <img src={Rectangle} alt="" />
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10 card2-cont">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <Card2
                cardClass2="card2Details"
                imgDetails2="imgDetails2"
                {...DataArr[6]}
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <Card2
                cardClass2="card2Details"
                imgDetails2="imgDetails2"
                {...DataArr[7]}
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <Card2
                cardClass2="card2Details"
                imgDetails2="imgDetails2"
                {...DataArr[8]}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10 btn4-div">
          <Button button2="button2 button3 button4">View All</Button>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
      </div>
    </React.Fragment>
  );
};

export default Body;
