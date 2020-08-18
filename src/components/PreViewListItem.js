import React, { Component } from 'react';

class PreViewListItem extends Component {
    render() {
        const { img ,name, price , id} = this.props;
        
        return ( 
            <div>
                <img alt="test" width='100px' height='100px' src={img}/>
                <p>가격은 : {price}</p>
                <p>아이디 : {id}</p>
            </div>
        );
    }
}

export default PreViewListItem;
