import React, { Component } from 'react';
//import PreViewList from '../components/PreViewList'
import Detail from '../components/Detail';
import { observer, inject } from "mobx-react";

@inject((stores) => ({
    previewStore: stores.previewStore,
  }))

@observer

class DetailContainer extends Component {
    render() {
        const { ItemDetail } = this.props.previewStore;
        console.log(ItemDetail);
        const {ItemDetailObject} = this.props.previewStore;
        console.log(ItemDetailObject);

        return (
            <Detail detailObject = {ItemDetailObject}>


            </Detail>
        );
    }
    
}

export default DetailContainer;