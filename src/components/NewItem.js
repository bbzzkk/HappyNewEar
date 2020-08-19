import React, { Component } from "react";

import { Link } from "react-router-dom";

import { observer, inject } from "mobx-react";

import { Card, Icon, Image, Grid } from "semantic-ui-react";
import ItemLayout from "../styles/ItemLayout";

@inject((stores) => ({
  itemStore: stores.itemStore,
}))
@observer
class NewItem extends Component {
  
  render() {
    const { item, categoryName } = this.props;
    const { id, imageUrl } = item;

    return (
      <ItemLayout>
        <Card>
          <Link to={`/${categoryName}/${id}`}>
            <img className="item-image" alt="test" src={imageUrl} />
          </Link>
        </Card>
      </ItemLayout>
    );
  }
}

export default NewItem;
