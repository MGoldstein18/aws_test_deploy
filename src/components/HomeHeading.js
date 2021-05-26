import React from "react";
import "./homeHeading.css";

function HomeHeading(props) {
  return (
    <p className="m-5 p-2" id="homeByLine">
      Here is every question you need to know about the Blockchain answered in{" "}
      <b>
        <i>less than 30 seconds</i>
      </b>
    </p>
  );
}

export default HomeHeading;
