import React, { Component } from 'react';

import OverviewContainer from "../containers/OverviewContainer";

class CategoryPage extends Component {
  render() {
    const {match} = this.props.match.params
    console.log(this.props.match.params.categoryId)
    // const mapStateToProps = (state)
    return (
    <>
      <OverviewContainer categoryId = {match.params.categoryId}/>
    </>
    )
  }
}

export default CategoryPage; 