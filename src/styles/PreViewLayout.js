import styled from '@emotion/styled';

const PreviewWrapper = styled.div(props => ({
    // paddingTop: '75px',
  // padding: '1rem',
  // maxWidth: '1366px', // NOTE: Full Wide XGA / 1366x768 => 16:9
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  justifyContent: "space-between",
  marginTop:'5em',
  // height:'100%',
  // minHeight: '84vh',
  // overflow: 'auto',
  // backgroundColor: '#F5F6FF'

    ".list-link": {
        width: '5em',
        color: 'black',
        marginTop: '2em',
        marginBottom: '2em',
    },
}))

const PreViewListWrapper = styled.div(props => ({
    // margin: '0 auto',
    // marginTop: '2rem',
    // textAlign: 'center',
}))

const PreViewItemWrapper = styled.div(props => ({
    // float: 'left',
 }))

const CartIconHover = styled.div(props => ({
    // hover: {
    //     backgroundColor:'red'
    // }
 }))


export {
  PreviewWrapper,
  PreViewListWrapper,
  PreViewItemWrapper,
  CartIconHover,
};