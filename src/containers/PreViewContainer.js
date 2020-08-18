import React, { Component } from 'react';

import { observer, inject } from "mobx-react";

import { Link } from "react-router-dom";

import PreViewList from '../components/PreViewList'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

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
    itemClick = () => {
        console.log("itemClick");
    }
    render() {
        const { itemjson } = this.props.previewStore;
        console.log(itemjson);
        const previewList = itemjson.map(list => {
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
            <div>
                 {/* {previewList} */}
                <div className="slide-container" height="fit-content">
                    <Slide>
                        <div className="each-slide" style={{'backgroundImage': `url(${slideImages[0]})`, height:'700px'}}>
                            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                            <span>Slide 1</span>
                            </div>
                        </div>
                        <div className="each-slide" style={{'backgroundImage': `url(${slideImages[1]})`, height:'700px'}}>
                            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                            <span>Slide 2</span>
                            </div>
                        </div>
                        <div className="each-slide" style={{'backgroundImage': `url(${slideImages[2]})`, height:'700px'}}>
                            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            <span>Slide 3</span>
                            </div>
                        </div>
                    </Slide>
                </div>
               
            </div>
            
            
        );
    }
}

export default PreViewContainer;