import styled from '@emotion/styled';

const CartLayout = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: "5%",
  marginRight: "5%",
  marginBottom: "3em",
  textAlign:'center',
  ".title": {
    marginTop: "2em",
    marginBottom: "2em",
  },
  ".cart-inside-layout": {
    display: "flex",
    width: "100%",
    height: "100%",
  },
}));

export {
    CartLayout,
};
