import styled from "@emotion/styled";

const ItemLayout = styled.div((props) => ({
    textAlign: "center",
    userSelect: 'none',
    marginLeft: '0.5em',
    marginRight: '0.5em',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    width: '290px',

    ".card-wrapper": {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    ".item-image": {
        width: "290px",
        height: "290px",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    ".button": {
        textAlign: 'center',
    },
    ".put": {
        color: 'grey',
    },
    ".takeout": {
        color: '#24a0ad',
        fontWeight: 'bold',
    },
    ".button label": {
        paddingLeft: '5px',
        fontSize: '15px',
    },
    ".item-image:hover": {
        opacity: "0.8",
    },
    ".button:hover": {
        backgroundColor: '#F3F3F3',
    },
}));

export default ItemLayout;
