import styled from "@emotion/styled";

const HeaderLayout = styled.div((props) => ({
  //   height: "170px",
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
    width: "80%",
    height: "90%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  ".options": {
    width: "50%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop:'2em',
    ".option": {
      fontSize: "1em",
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