import React, { Component } from 'react';

import { Link } from "react-router-dom";

import Item from "./Item";
import PreviewListLayout from '../styles/PreviewListLayout'

class PreviewList extends Component {
	render() {
		const {
      categoryItems: { id, category, items },
      OnClickCategory,
      OnClickItem,
      cartBtnClicked,
      OnClickCartBtn,
    } = this.props;
    console.log(items)
		return (
      <PreviewListLayout>
        <div className="category">
            <Link to="/category" className="category-link">
                <h2 onClick={() => OnClickCategory(id)}>{category}</h2>
            </Link>
        </div>
        <div>
            {items
            .filter((item) => item.id < 5)
            .map((item) => (
                <Item
                key={item.id}
                item={item}
                catetgoryId={id}
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