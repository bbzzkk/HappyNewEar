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
        //const item = ItemJson;
        const { ItemJson } = this.props.HomeStore;
       // const ItemJson = HomeStore.getItemJson;

        // const previewList = item.map(list => {
        //     return (
        //         <div>
        //             <h1 onClick={this.categoryClick}>{list.category}</h1>
        //             <PreViewList 
        //             items={list.items}
        //             itemClick={this.itemClick}
        //             ></PreViewList>
        //         </div>
        //     );
        // });

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
            // previewList  원래 있던거 

            // <PreViewList ItemJson = {ItemJson} 
            // PreviewItems = {PreviewItems}
            //  onCategoryClick={this.OncategoryClick} />
            previewList
        );
    }
}

export default PreViewContainer;