import React, { Component } from 'react';
import CartContainer from '../containers/CartContainer';

import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const slideImages = [
    'images/123123.jpg',
    'images/123123.jpg',
    'images/123123.jpg'
]

class CartPage extends Component {
    render() {
        return (
            // <CartContainer/>
            <div className="slide-container">
                    <Slide>
                        <div className="each-slide" style={{'backgroundImage': `url(${slideImages[0]})`}}>
                            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                            <span>Slide 1</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                            <span>Slide 2</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            <span>Slide 3</span>
                            </div>
                        </div>
                    </Slide>
                </div>
        );
    }
}

export default CartPage;