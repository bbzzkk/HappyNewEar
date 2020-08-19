import React, { Component } from "react";
import { DetailsWrapper } from "../styles/DetailsWrapper";

import {
  Card,
  Icon,
  Image,
  Grid,
  Header,
  Divider,
  GridRow,
  Button,
  Dropdown,
  Menu,
} from "semantic-ui-react";

class Detail extends Component {
  state = {
    itemCnt: 1,
  };

  render() {
    const { itemDetail, totalAmount, itemQuantity, OnChange } = this.props;
    const { imageUrl, name, price} = itemDetail
    console.log(`디테일의 ${itemDetail.imageUrl}`);
        
    const width40 = {
      width: "40%",
    };

    const width60 = {
      width: "60%",
    };

    const options = [
      { key: 1, text: "1개", value: 1 },
      { key: 2, text: "2개", value: 2 },
      { key: 3, text: "3개", value: 3 },
      { key: 4, text: "4개", value: 4 },
      { key: 5, text: "5개", value: 5 },
    ];

    return (
      <DetailsWrapper>
        <Grid columns={2} padded="vertically">
          <Grid.Column>
            <Image src={'/'+imageUrl} />
          </Grid.Column>

          <Grid.Column className="DetailView">
            <Header>
              ◟( ˘ ³˘)◞ ♥ 오늘만 무배~~ 한정판 잇템! 놓치면 바보ㅎ
            </Header>
            <Divider />
            <Grid Columns={2} className="DetailViewGridColumn">
              <Grid.Column className="DetailViewGridColumn1" style={width40}>
                <GridRow className="DetailViewGridRow">판매가 </GridRow>
                <GridRow className="DetailViewGridRow">이름 </GridRow>
                <GridRow className="DetailViewGridRow">수량 </GridRow>
              </Grid.Column>
              <Grid.Column className="DetailViewGridColumn2" style={width60}>
                <GridRow>{price}원 </GridRow>
                <GridRow>{name}</GridRow>
                <GridRow>
                  <Menu compact>
                    <Dropdown
                      placeholder="[필수] 수량을 선택해주세요"
                      options={options}
                      simple
                      item
                      onChange={(e) => OnChange(e)}
                    />
                  </Menu>
                </GridRow>
              </Grid.Column>
            </Grid>
            <Divider />
            <div className="TOTAL PRICE">
              <Header>TOTAL PRICE</Header>
              <span className="total">
                <strong>
                  <em>{totalAmount}원 </em>
                </strong>
                ({itemQuantity}개)
              </span>
            </div>
            <Button primary>ADD TO CART</Button>
          </Grid.Column>
        </Grid>
      </DetailsWrapper>
    );
  }
}

export default Detail;
