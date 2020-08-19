import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import PreViewList from '../components/PreViewList'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { PreViewWrapper } from '../styles/PreViewLayout';

const slideImages = [
    'images/slider/case.jpg',
    'images/slider/event.jpg',
    'images/slider/yellow.jpg'
]

@inject((stores) => ({
    previewStore: stores.previewStore,
}))
@observer
class PreViewContainer extends Component {
    OnCategoryClick = (id) => {
        console.log("categoryClick");
        this.props.previewStore.CategoryClick(id);
    }
    OnitemClick = (ItemId, CategoryId) => {
        console.log("itemClick");
        this.props.previewStore.ItemClickDetail(ItemId, CategoryId);
    }
    render() {
        const { itemjson } = this.props.previewStore;
        const previewList = itemjson.map(list => {
            return (
                <PreViewWrapper>
                   <Link to="/list">
                   <h1 onClick={() => this.OnCategoryClick(list.id)}>{list.category}</h1>
                   </Link> 
                    <PreViewList
                        OnitemClick={this.OnitemClick}
                        items={list.items}
                        itemjson = {list}
                        >
                    </PreViewList>
                </PreViewWrapper>
            )
        })
        return (
            <div>
                <div className="slide-container" height="fit-content" style={{paddingTop: '8em'}}>
                    <Slide>
                        <div className="each-slide" style={{'backgroundImage': `url(${slideImages[0]})`, height:'700px'}}>
                            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                            </div>
                        </div>
                        <div className="each-slide" style={{'backgroundImage': `url(${slideImages[1]})`, height:'700px'}}>
                            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                            </div>
                        </div>
                        <div className="each-slide" style={{'backgroundImage': `url(${slideImages[2]})`, height:'700px'}}>
                            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            </div>
                        </div>
                    </Slide>
                </div>
                {previewList}
            </div>  
        );
    }
}

export default PreViewContainer;