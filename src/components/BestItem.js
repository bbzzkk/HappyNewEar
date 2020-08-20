import React, { Component } from "react";

import { Link } from "react-router-dom";

import { observer, inject } from "mobx-react";

import { Card } from "semantic-ui-react";
import BestItemLayout from "../styles/BestItemLayout";
import { CardContent } from "@material-ui/core";

@inject((stores) => ({
  itemStore: stores.itemStore,
}))
@observer
class NewItem extends Component {
  
  render() {
    const { item, categoryName } = this.props;
    const { id, imageUrl } = item;

    return (
      <BestItemLayout>
        <Card className="card">
          <CardContent className="type">BEST OF BEST</CardContent>
          <Link to={`/${categoryName}/${id}`}>
            <img className="item-image" alt="test" src={imageUrl} />
          </Link>
        </Card>
      </BestItemLayout>
    );
  }
}

export default NewItem;
