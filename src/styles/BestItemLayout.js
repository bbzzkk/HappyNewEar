import styled from "@emotion/styled";

const BestItemLayout = styled.div((props) => ({
  textAlign: "center",
  userSelect: "none",
  ".type": {
    backgroundColor: "#90AFFF !important",
    color: "white !important",
    height: "3.5em",
    fontWeight: "bold",
  },
  ".item-image": {
    width: "200px",
    height: "200px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  ".button": {
    textAlign: "center",
  },
  ".put": {
    color: "grey",
  },
  ".takeout": {
    color: "#24a0ad",
    fontWeight: "bold",
  },
  ".button label": {
    paddingLeft: "5px",
    fontSize: "15px",
  },
  ".item-image:hover": {
    opacity: "0.8",
    width: "auto",
  },
  ".button:hover": {
    backgroundColor: "#F3F3F3",
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

export default BestItemLayout;
