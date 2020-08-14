import React, { Component } from 'react';

class Item extends Component {
    render() {
        const { name } = this.props;
        return (
            <div>
                <img alt="test" width='100px' height='100px' src={name}></img>
            </div>
        );
    }
}

export default Item;
