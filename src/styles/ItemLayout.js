import styled from "@emotion/styled";

const ItemLayout = styled.div((props) => ({
    textAlign: "center",
    margin: '0 auto',
    marginLeft:'0.5em',
    marginRight:'0.5em',
    userSelect: 'none',

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
    // ".button:hover": {
    //     "label": {
    //         color: 'blue',
    //         fontWeight: 'bold',
    //         fontSize: '15px',
    //     },
    //     ".icon": {
    //         color: 'blue',
    //     }
    // },
}));

export default ItemLayout;
