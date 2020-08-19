import React, { Component } from 'react';

class Detail extends Component {
	render() {
		const { itemDetail } = this.props;
		return (
      <div>
        <img
          alt="detail"
          width="100px"
          height="100px"
          src={itemDetail.imageUrl}
        />
        <p>가격은 : {itemDetail.price}</p>
        <p>아이디 : {itemDetail.id}</p>
        <p>이름 : {itemDetail.name}</p>
      </div>
    );
	}
}

export default Detail;