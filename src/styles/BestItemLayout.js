import styled from "@emotion/styled";

const BestItemLayout = styled.div((props) => ({
  textAlign: "center",
  userSelect: "none",

  boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  ".type": {
    opacity: "0.5",
    backgroundColor: "#FF3D00 !important",
    color: "white !important",
    height: "3.5em",
    fontWeight: "bold",
    boxShadow: " 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    textShadow: "1px 1px 2px black",
  },
  ".item-image": {
    width: "100%",
    height: "50%",
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
  "&:hover": {
    opacity: "0.8",
  },
  ".button:hover": {
    backgroundColor: "#F3F3F3",
  },
}));

export default BestItemLayout;
