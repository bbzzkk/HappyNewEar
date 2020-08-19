import styled from '@emotion/styled';

const HomepageLayout = styled.div(props => ({
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
        marginLeft: '3em',
        marginRight: '3em',
    },
    ".slide-img": {
        height: '550px',
        maxWidth: '100%',
    },
}))

export {
    HomepageLayout,
};