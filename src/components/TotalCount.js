import React, { Component } from 'react';

class TotalCount extends Component {
    render() {
        return (
            <div className='TotalCount'>
                <h1>전체합계</h1> 
                <div>
                    <span>상품수 </span>
                    <span>1개</span>
                </div>
                <div>
                    <span>상품금액 </span>
                    <span>1000원</span>
                </div>
                <div>
                    <span>할인금액 </span>
                    <span>1000원</span>
                </div>
                <div>
                    <span>배송비 </span>
                    <span>1000원</span>
                </div>
                <div>
                    <span>전체주문금액 </span>
                    <span>1000원</span>
                </div>
                <button>주문하기</button>
            </div>
        );
    }
}

export default TotalCount;