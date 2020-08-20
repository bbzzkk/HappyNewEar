import React, { Component } from "react";

import { Slide } from "react-slideshow-image";

import NewArrivalItem from "./BestItem";

import BestListLayout from "../styles/BestListLayout";

class NewArrivalList extends Component {
  render() {
    const { categoryName, items} = this.props;
    return (
      // <Slide>
      <BestListLayout>
        <h2 className="title">WEEKLY BEST</h2>
        <div className="items-wrapper">
          {items.slice(-4).map((item) => (
            <NewArrivalItem
              key={item.id}
              item={item}
              categoryName={categoryName}
            />
          ))}
        </div>
      </BestListLayout>
      // </Slide>
    );
  }
}

export default NewArrivalList;
