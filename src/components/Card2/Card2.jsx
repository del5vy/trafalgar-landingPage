import React from "react";
import { DataArr } from "../../data";

const Card2 = ({ image, header, text, cardClass2, imgDetails2 }) => {
  return (
    <React.Fragment>
      <img className={imgDetails2} src={image} alt="" />
      <div className={`card ${cardClass2}`}>
        <h4 className="card2-header">{header}</h4>
        <p className="card2-para">{text}</p>
        <p className="card2-para2">Read more </p>
      </div>
    </React.Fragment>
  );
};

export default Card2;
