import styled from '@emotion/styled';

const PreViewWrapper = styled.div(props => ({
    // paddingTop: '75px',
    // paddingLeft: '1rem',
    // paddingRight: '1rem',
    // margin: '0 auto',
    // width: '100%',
    // overflow: 'auto',
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
    hover: {
        backgroundColor:'red'
    }
 }))

const Category = styled.h1(props => ({
    // textAlign: 'center',
    // paddingTop: '2rem',
 }))

export {
    PreViewWrapper,
    PreViewListWrapper,
    PreViewItemWrapper,
    CartIconHover,
    Category
}