import styled from '@emotion/styled';

const PreViewWrapper = styled.div(props => ({
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

export {
    PreViewWrapper,
    PreViewListWrapper,
    PreViewItemWrapper,
}