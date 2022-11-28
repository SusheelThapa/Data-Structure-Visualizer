import React from "react";
import Container from "./common/Container";
import WalkingPerson from "../assets/images/walking-man.png";
import "../assets/css/queue_container.css";

const QueueContainer = ({ queue }) => {

 
  return (
    <Container>
      <div id="queue-container-diagram" className="flex-c-c">
        {queue.length === 0 && (
          <div
            className="queue_container_data flex-c-c"
            style={{ visibility: "hidden" }}
          >
            <img src={WalkingPerson} alt="Walking Person" />
            <div>000</div>
          </div>
        )}
        {queue.length > 0 &&
          queue.map((data) => (
            <div key={data} className="queue_container_data flex-c-c">
              <img src={WalkingPerson} alt="Walking Person" />
              <div>{data}</div>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default QueueContainer;
