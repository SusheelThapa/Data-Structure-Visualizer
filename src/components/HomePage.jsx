import React from "react";
import { Link } from "react-router-dom";
import StackImage from "../assets/images/stack.png";
import QueueImage from "../assets/images/queue.png";
import "../assets/css/homepage.css";

const HomePage = () => {
  return (
    <div id="homepage">
      <h1 className="flex-c-c">Choose Data Structure to visualize...</h1>
      <div>
        <Link to="/stack">
          <img src={StackImage} alt="queue of people"></img>
        </Link>
        <Link to="/queue">
          <img src={QueueImage} alt="stack of some things"></img>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
