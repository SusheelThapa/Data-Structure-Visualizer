import React from "react";
import Container from "./common/Container";
import "../assets/css/stack_container.css";

const StackContainer = ({ stack }) => {
  return (
    <Container>
      <div id="stack-container-diagram" className="flex-c-c">
        {stack.length === 0 && (
          <div className="stack-diagram-data" style={{ visibility: "hidden" }}>
            000
          </div>
        )}
        {stack.length > 0 && (
          <div>
            {stack.map((stack_data) => {
              return (
                <div key={stack_data} className="stack-diagram-data flex-c-c">
                  {stack_data}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Container>
  );
};

export default StackContainer;
