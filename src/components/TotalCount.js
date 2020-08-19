import React, { Component } from 'react';

import TotalCountLayout from '../styles/TotalCountLayout'
import { Button, Segment, Grid, Header, Divider, GridRow, Menu, Statistic} from 'semantic-ui-react';

class TotalCount extends Component {
    render() {
        const { itemCount, totalPrice } = this.props;

        return (
          <TotalCountLayout>
            <Segment>
              <Grid>
                <GridRow>
                  <Grid columns={2}>
                    <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                      전체합계
                    </p>
                  </Grid>
                </GridRow>
                <Divider style={{ marginTop: "0em" }} />
                <GridRow style={{ lineHeight: "2px", padding: "0" }}>
                  <Grid columns={2}>
                    <Grid.Column>상품수</Grid.Column>
                    <Grid.Column style={{ paddingLeft: "5em" }}>
                      <label>
                        <span>{itemCount} 개</span>
                      </label>
                    </Grid.Column>
                  </Grid>
                </GridRow>
                <GridRow style={{ lineHeight: "2px", padding: "0" }}>
                  <Grid columns={2}>
                    <Grid.Column>상품금액</Grid.Column>
                    <Grid.Column style={{ paddingLeft: "5em" }}>
                      <label>
                        <span>{totalPrice} 원</span>
                      </label>
                    </Grid.Column>
                  </Grid>
                </GridRow>
                <GridRow style={{ lineHeight: "2px", padding: "0" }}>
                  <Grid columns={2}>
                    <Grid.Column>할인금액</Grid.Column>
                    <Grid.Column style={{ paddingLeft: "5em" }}>
                      0원
                    </Grid.Column>
                  </Grid>
                </GridRow>
                <GridRow style={{ lineHeight: "2px", padding: "0" }}>
                  <Grid columns={2}>
                    <Grid.Column>배송비</Grid.Column>
                    <Grid.Column style={{ paddingLeft: "5em" }}>
                      0원
                    </Grid.Column>
                  </Grid>
                </GridRow>
                <Divider />
                <GridRow style={{ lineHeight: "2px", padding: "0" }}>
                  <Grid columns={2}>
                    <Grid.Column style={{ marginTop: "1.5em" }}>
                      전체주문금액
                    </Grid.Column>
                    <Grid.Column>
                      <Statistic horizontal label="won" value={totalPrice} />
                    </Grid.Column>
                  </Grid>
                </GridRow>
                <GridRow>
                  <Grid.Column>
                    <Button
                      positive
                    >
                      주문하기
                    </Button>
                  </Grid.Column>
                </GridRow>
              </Grid>
            </Segment>
          </TotalCountLayout>
        );
    }
}

export default TotalCount;