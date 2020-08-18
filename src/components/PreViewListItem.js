import React, { Component } from 'react';
import { Link } from "react-router-dom";


class PreViewListItem extends Component {
    render() {
        const { img ,name, price , id, OnitemClick, itemjson} = this.props;
        const categoryID = itemjson.id;
        //console.log(categoryID);
        return ( 
            <div>
                <Link to="/detail">
                     <img 
                     onClick={() => OnitemClick(id, categoryID)} 
                     alt="test" width='100px' height='100px' 
                     src={img} />    
                </Link>
                <p>가격은 : {price}</p>
                <p>아이디 : {id}</p>
                <p>이름 : {name}</p>
            </div>

        );
    }
}

export default PreViewListItem;