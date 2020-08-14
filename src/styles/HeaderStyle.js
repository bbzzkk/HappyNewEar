import styled from 'styled-components';

const HeaderBlock = styled.div `
position: fixed;
    width: 100%;
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);

`;


const Wrapper = styled.div `

`;
// styled(Responsive)`
//     height: 4rem;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     .right {
//         display: flex;
//         align-items: center;
//     }
// `;

const Spacer = ''
// const Spacer = styled.div`
//     height: 4rem;
//     `;


export {
    HeaderBlock,
    Wrapper,
    Spacer
}