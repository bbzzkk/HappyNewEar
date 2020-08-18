import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import PreViewList from '../components/PreViewList'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { PreViewWrapper, Category } from '../styles/PreViewLayout';

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
                <>
                    <Link to="/list" style={{color:'black'}}>
                        <Category onClick={() => this.OnCategoryClick(list.id)}>{list.category}</Category>
                    </Link> 
                    <PreViewList
                        OnitemClick={this.OnitemClick}
                        items={list.items}
                        itemjson = {list}>
                    </PreViewList>
                </>
            )
        })
        return (
            // <PreViewWrapper>
            <div>
                <div className="slide-container"  >
                    <Slide>
                        <div>
                            <img src={slideImages[0]} alt="test"/>
                        </div>
                        <div>
                            <img src={slideImages[1]} alt="test"/>
                        </div>
                        <div>
                            <img src={slideImages[2]} alt="test"/>
                        </div>
                        {/* <div className="each-slide" style={{'backgroundImage': `url(${slideImages[0]})`, height:'600px'}}>
                            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                            </div>
                        </div> */}
                        {/* <div className="each-slide" style={{'backgroundImage': `url(${slideImages[1]})`, height:'600px'}}>
                            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                            </div>
                        </div>
                        <div className="each-slide" style={{'backgroundImage': `url(${slideImages[2]})`, height:'600px'}}>
                            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            </div>
                        </div> */}
                    </Slide>
                </div>
                {previewList}
            {/* </PreViewWrapper> */}
            </div>
        );
    }
}

export default PreViewContainer;