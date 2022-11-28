import React from "react";
import "../../assets/css/container.css";

const Container = ({ children: container_html }) => {
  return (
    <div id="container" className="flex-c-c">
      {container_html}
    </div>
  );
};

export default Container;
