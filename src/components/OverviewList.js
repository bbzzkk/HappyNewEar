import React, { Component } from 'react';

import Item from './Item';

import OverviewListLayout from "../styles/OverviewListLayout";
class OverviewList extends Component {
	render() {
    const { categoryName, items, OnClickItem } = this.props;
    console.log(categoryName)
    return (
      <OverviewListLayout>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            categoryName={categoryName}
            OnClickItem={OnClickItem}
          />
        ))}
      </OverviewListLayout>
    );
	}
}

export default OverviewList;