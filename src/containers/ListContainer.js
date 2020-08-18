import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import List from "../components/List"

@inject((stores) => ({
    previewStore: stores.previewStore,
  }))
@observer

class ListContainer extends Component {
    
    render() {
        const { SelectCategory } = this.props.previewStore;
        console.log(SelectCategory);
        const SelectCategoryItems = SelectCategory.items;
        console.log(SelectCategoryItems);

        return (
            <List items = {SelectCategoryItems}>


            </List>
        );
    }
}

export default ListContainer;