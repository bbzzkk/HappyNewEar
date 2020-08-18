import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import PreViewList from '../components/PreViewList'
import ListContainer from './ListContainer';
import { Link } from "react-router-dom";

@inject("HomeStore")
@observer

class PreViewContainer extends Component {
    
    OnCategoryClick = (id) => {
        console.log("categoryClick");
        this.props.HomeStore.CategoryClick(id);
    }

    itemClick = () => {
        console.log("itemClick");
    }
    render() {
        const { ItemJson } = this.props.HomeStore;
        const previewList = ItemJson.map(list => {
            return (
                <div>
                   <Link to="/list">
                   <h1 onClick={() => this.OnCategoryClick(list.id)}>{list.category}</h1>
                   </Link> 
                    
                    <PreViewList
                        items={list.items}
                        >
                    </PreViewList>
                </div>
            )
        })
        return (
            previewList
        );
    }
}

export default PreViewContainer;