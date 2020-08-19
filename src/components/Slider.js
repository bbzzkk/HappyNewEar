import React, { Component } from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "images/slider/case.jpg",
  "images/slider/event.jpg",
  "images/slider/yellow.jpg",
];

class Slider extends Component {
  render() {
    return (
      <div className="slide-container" height="fit-content" style={{paddingTop: '8em'}}>
        <Slide>
          <div
            className="each-slide"
            style={{
              backgroundImage: `url(${slideImages[0]})`,
              height: "700px",
            }}
          >
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          </div>
          <div
            className="each-slide"
            style={{
              backgroundImage: `url(${slideImages[1]})`,
              height: "700px",
            }}
          >
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          </div>
          <div
            className="each-slide"
            style={{
              backgroundImage: `url(${slideImages[2]})`,
              height: "700px",
            }}
          >
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
          </div>
        </Slide>
      </div>
    );
  }
}

export default Slider