import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import List from "../components/List"

@inject("HomeStore")
@observer

class ListContainer extends Component {
    
    render() {
        const { HomeStore } = this.props;
        const SelectCategory = HomeStore.SelectCategory;
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