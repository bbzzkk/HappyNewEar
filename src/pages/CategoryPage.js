import React, { Component } from 'react';

import OverviewContainer from "../containers/OverviewContainer";

class CategoryPage extends Component {
  render() {
    const categoryId = this.props.match.params
    return (
      <>
        <OverviewContainer categoryId={categoryId} />
      </>
    );
  }
}

export default CategoryPage; 