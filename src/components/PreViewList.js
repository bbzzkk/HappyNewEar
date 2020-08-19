import React, { Component } from 'react';

import { Link } from "react-router-dom";

import Item from "./Item";

class PreviewList extends Component {
	render() {
		const {
      categoryItems: { id, category, items },
      OnClickCategory,
      OnClickItem,
    } = this.props;
    console.log(items)
		return (
      <>
        <Link to="/category">
          <h3 onClick={() => OnClickCategory(id)}>{category}</h3>
        </Link>
        {items
          .filter((item) => item.id < 5)
          .map((item) => (
            <Item
              key={item.id}
              item={item}
              catetgoryId={id}
              OnClickItem={OnClickItem}
              items={items}
            />
          ))}
      </>
    );
	}
}

export default PreviewList;