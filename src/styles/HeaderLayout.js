import styled from "@emotion/styled";

const HeaderLayout = styled.div((props) => ({
  height: "8em",
  zIndex:'10000',
  backgroundColor: 'white',
  position:'fixed',
  top: 0,
  left: 0,
  right: 0,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "25px",
  ".logoContainer": {
    height: "auto",
    width: "auto",
    padding: "25px",
  },
  ".logo": {
    width: "20em",
    height: "4.5em",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  ".options": {
    width: "50%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    ".option": {
      fontSize: "1.2em",
      padding: "10px 15px",
      cursor: "pointer",
    },
    div: {
      border: "0",
      outline: "0",
      backgroundColor: "white",
    },
  },
}));

export default HeaderLayout;