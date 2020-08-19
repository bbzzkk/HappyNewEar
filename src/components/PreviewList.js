import React, { Component } from 'react';

import { Link } from "react-router-dom";

import Item from "./Item";
import PreviewListLayout from '../styles/PreviewListLayout'

class PreviewList extends Component {
	render() {
   	const {
      categoryItems: { id, routeName, category, items },
      OnClickItem,
      cartBtnClicked,
      OnClickCartBtn,
    } = this.props;
		return (
      <PreviewListLayout>
        <div className="category">
          <Link to={`/${routeName}`}>
            <h3>{category}</h3>
          </Link>
        </div>
        <div>
          {items
            .filter((item) => item.id < 5)
            .map((item) => (
              <Item
                key={item.id}
                item={item}
                categoryId={id}
                categoryName={routeName}
                OnClickItem={OnClickItem}
                items={items}
                cartBtnClicked={cartBtnClicked}
                OnClickCartBtn={OnClickCartBtn}
              />
            ))}
        </div>
      </PreviewListLayout>
    );
	}
}

export default PreviewList;