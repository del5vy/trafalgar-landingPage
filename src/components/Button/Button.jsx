import React from "react";

const Button = ({ children, button2, button3,button4 }) => {
  return (
    <div>
      <button className={`btn-style ${button2} ${button3} ${button4}`}>{children}</button>
    </div>
  );
};

export default Button;
