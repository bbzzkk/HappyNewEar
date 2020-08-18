import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        const { img ,price , id} = this.props;

        return ( 
            <div>
                <img alt="test" width='100px' height='100px' src={img}/>
                <p>가격은 : {price}</p>
                <p>아이디 : {id}</p>
            </div>
        );
    }
}

export default ListItem;
