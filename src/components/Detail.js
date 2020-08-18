import React, { Component } from 'react';




class Detail extends Component {

    render() {
        const { detailObject } = this.props;
          
        console.log(detailObject.id);

        return(
            <div>
                <img 
                     alt="test" width='100px' height='100px' 
                     src={detailObject.imageUrl} /> 
                <p>가격은 : {detailObject.price}</p>
                <p>아이디 : {detailObject.id}</p>
                <p>이름 : {detailObject.name}</p>
            </div>
        )
    }
}

export default Detail;