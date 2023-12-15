import React from "react";
import { DataArr } from "../../data";

const Card = ({
  image,
  header,
  text,
  imgDetails,
  headerDetails,
  textPara,
  cardClass,
}) => {
  return (
    <React.Fragment>
      <div className={`card ${cardClass}`}>
        <img className={imgDetails} src={image} alt="" />
        <h4 className={headerDetails}>{header}</h4>
        <p className={textPara}>{text}</p>
      </div>
    </React.Fragment>
  );
};

export default Card;
