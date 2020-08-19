import React, { Component } from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "images/slider/slider1.jpg",
  "images/slider/slider2.jpg",
  "images/slider/slider3.jpg",
];

class Slider extends Component {
  render() {
    return (
      <div className="slide-container">
        <Slide>
            <img className="slide-img" src={slideImages[0]} alt="test"/>
            <img className="slide-img" src={slideImages[1]} alt="test"/>
            <img className="slide-img" src={slideImages[2]} alt="test"/>
        </Slide>
      </div>
    );
  }
}

export default Slider