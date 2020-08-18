import styled from 'styled-components';

const LayoutStyle = styled.div `
    overflow: 'hidden',
`;
  
const HeaderStyle = styled.HeaderContainer`
    width: '100%',
    position: 'fixed'
`;
  
const ContentStyle = styled.div`
    padding: '1rem',
    maxWidth: '1366px', // NOTE: Full Wide XGA / 1366x768 => 16:9
    width: '100%',
    margin: '0 auto',
    minHeight: '84vh',
    overflow: 'auto',
    backgroundColor: '#F5F6FF'
`;
  
const FooterStyle = styled.div`
    backgroundColor: '#1b1c1d',
    color: '#fff',
    float: 'right',
`;

export {
    HeaderStyle,
    ContentStyle,
    FooterStyle,
}