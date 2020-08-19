import styled from '@emotion/styled';

const PreviewWrapper = styled.div(props => ({
    paddingTop: '75px',
    padding: '1rem',
    maxWidth: '1366px', // NOTE: Full Wide XGA / 1366x768 => 16:9
    width: '100%',
    margin: '0 auto',
    // minHeight: '84vh',
    overflow: 'auto',
    // backgroundColor: '#F5F6FF'
}))

const PreViewListWrapper = styled.div(props => ({
    margin: '0 auto',
    textAlign: 'center',
}))

const PreViewItemWrapper = styled.div(props => ({
    float: 'left',
 }))

const CartIconHover = styled.div(props => ({
    hover: {
        backgroundColor:'red'
    }
 }))

export {
  PreviewWrapper,
  PreViewListWrapper,
  PreViewItemWrapper,
  CartIconHover,
};