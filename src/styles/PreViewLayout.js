import styled from '@emotion/styled';

const PreViewWrapper = styled.div(props => ({
    paddingTop: '8em',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    // background: 'lightgray',

    // paddingLeft: '1rem',
    // paddingRight: '1rem',
    // overflow: 'auto',

    ".slide-container": {
        marginTop: '1em',
        textAlign: 'center',
        marginLeft: '10em',
        marginRight: '10em',
    },
    ".slide-img": {
        height: '650px',
        maxWidth: '100%',
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