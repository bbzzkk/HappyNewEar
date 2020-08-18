import styled from '@emotion/styled';

const FooterWrapper = styled.div(props => ({
    backgroundColor: '#fff',
    textAlign: 'center',
    marginTop: '3em',
    paddingTop: '2.0em',
    paddingBottom: '2em',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '15px',
    borderTop: '1px solid black',
    // background: 'lightgray',

    ".address": {
    },
    ".copyright": {
        margin: "5px",
      },
}))

export {
    FooterWrapper,
}
