import React, { Component } from 'react';

import { Link } from "react-router-dom";

import Item from "./Item";
import PreviewListLayout from '../styles/PreviewListLayout'

class PreviewList extends Component {
	render() {
   	const {
      categoryItems: { id, routeName, category, items },
      OnClickItem,
    } = this.props;
		return (
      <PreviewListLayout>
        <Link to={`/${routeName}`}>
          <h3>{category}</h3>
        </Link>
        {items
          .filter((item) => item.id < 7)
          .map((item) => (
            <Item
              key={item.id}
              item={item}
              categoryName={routeName}
              catetgoryId={id}
              OnClickItem={OnClickItem}
              items={items}
            />
          ))}
      </PreviewListLayout>
    );
	}
}

export default PreviewList;