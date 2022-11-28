import React from "react";

import "../../assets/css/button.css";

const Button = ({ button }) => {
  return (
    <button type="button" className={button.className} onClick={button.handler}>
      {button.name}
    </button>
  );
};

export default Button;
