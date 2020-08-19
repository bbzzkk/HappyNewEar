import React, { Component } from 'react';

import Item from './Item';

import OverviewListLayout from "../styles/OverviewListLayout";

class OverviewList extends Component {
	render() {
    const { categoryName, items, OnClickItem } = this.props;
    console.log(categoryName)
    return (
      <OverviewListLayout>
        <div className="items-wrapper">
          {items.map((item) => (
            <div className="item-wrapper">
              <Item
                key={item.id}
                item={item}
                categoryName={categoryName}
                OnClickItem={OnClickItem}
              />
            </div>
          ))}
        </div>
      </OverviewListLayout>
    );
	}
}

export default OverviewList;