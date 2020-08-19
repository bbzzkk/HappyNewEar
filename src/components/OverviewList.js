import React, { Component } from 'react';

import Item from './Item';

import OverviewListLayout from "../styles/OverviewListLayout";
class OverviewList extends Component {
	render() {
		const { items, OnClickItem } = this.props;
		return (
      <OverviewListLayout>
        {items.map((item) => (
        <Item key={item.id} item={item} OnClickItem={OnClickItem} />
        ))}
      </OverviewListLayout>
    );
	}
}

export default OverviewList;