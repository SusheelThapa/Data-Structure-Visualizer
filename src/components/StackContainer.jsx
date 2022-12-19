import React from "react";
import "../assets/css/stack_container.css";

const StackContainer = ({ stack }) => {
  return (
    <div id="stack-container-diagram" className="flex-c-c">
      {stack.length === 0 && (
        <div className="stack-diagram-data" style={{ visibility: "hidden" }}>
          000
        </div>
      )}
      {stack.length > 0 &&
        stack.map((stack_data) => {
          return (
            <div key={stack_data} className="stack-element">
              {stack_data}
            </div>
          );
        })}
    </div>
  );
};

export default StackContainer;
