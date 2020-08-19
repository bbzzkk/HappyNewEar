import React, { Component } from 'react';

import { Redirect } from "react-router-dom";

import OverviewContainer from "../containers/OverviewContainer";

class CategoryPage extends Component {
  render() {
    const categoryId = this.props.match.params
    console.log(categoryId)
    return (
      <>
        {this.props.match.params !== "signin" ? (
          <OverviewContainer categoryId={categoryId} />
        ) : (
          <Redirect to="/signin" />
        )}
      </>
    );
  }
}

export default CategoryPage; 