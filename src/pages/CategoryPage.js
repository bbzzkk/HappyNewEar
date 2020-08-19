import React, { Component } from 'react';

import { Route } from "react-router-dom";

import OverviewContainer from "../containers/OverviewContainer";

class CategoryPage extends Component {
  render() {
    const {match} = this.props
    console.log(this.props)
    // const mapStateToProps = (state)
    return (
    <>
      <OverviewContainer categoryId = {match.params.categoryId}/>
    </>
    )
  }
}

export default CategoryPage; 