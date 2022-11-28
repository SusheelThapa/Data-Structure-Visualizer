import React from "react";
import Button from "./Button";

import "../../assets/css/adtoperation.css";

const addButtonClass = (buttons) => {
  for (let button of buttons) {
    button["className"] = `btn btn-${button.type} m-2 btn-lg`;
  }
};

const ADTOperation = ({ data_type, buttons }) => {
  addButtonClass(buttons);
  return (
    <div id="adt-operation">
      <div id="buttons-heading" className="flex-c-c">
        {data_type} ADT Operation
      </div>

      <div id="buttons" className="m-4">
        {buttons.map((button) => {
          return <Button key={button.name} button={button} />;
        })}
      </div>
    </div>
  );
};

export default ADTOperation;