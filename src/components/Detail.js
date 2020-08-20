import React, { Component } from "react";

import AddCartDialog from "./Notification/AddCartDialog";

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
  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    const {
      itemDetail: { name, imageUrl, price },
      totalPrice,
      itemQuantity,
      options,
      OnChange,
      onAddCart,
    } = this.props;

    const width40 = {
      width: "40%",
    };

    const width60 = {
      width: "60%",
    };

    return (
      <DetailsWrapper>
        <Grid columns={2} padded="vertically">
          <Grid.Column>
            <Image
              src={"/" + imageUrl}
              style={{
                boxShadow:
                  " 10px 10px 10px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
              }}
            />
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
                <GridRow className="DetailViewGridRow">배송비 </GridRow>
                <GridRow className="DetailViewGridRow">수량 </GridRow>
              </Grid.Column>
              <Grid.Column className="DetailViewGridColumn2" style={width60}>
                <GridRow>{this.numberWithCommas(price)}원 </GridRow>
                <GridRow>{name}</GridRow>
                <GridRow>무료</GridRow>
                <GridRow>
                  <Menu>
                    <Dropdown
                      placeholder="[필수] 수량을 선택해주세요"
                      options={options}
                      simple
                      item
                      onChange={(e) => OnChange(e)}
                      style={{ width: "100%" }}
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
                  <em>{this.numberWithCommas(totalPrice)}원 </em>
                </strong>
                ({itemQuantity}개)
              </span>
            </div>
            <div className="button">
              <AddCartDialog
                totalPrice={totalPrice}
                onAddCart={onAddCart}
                buttonText="ADD TO CART"
              />
            </div>
          </Grid.Column>
        </Grid>
      </DetailsWrapper>
    );
  }
}

export default Detail;
