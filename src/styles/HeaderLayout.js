import styled from "@emotion/styled";

const HeaderLayout = styled.div((props) => ({
    height: '8em',
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    justifyContent: "space-between",
    zIndex:'10000',
    flex: 1,
    backgroundColor: 'white',
    // background: 'lightgray',

  ".logoContainer": {
    height: "auto",
    width: "auto",
    padding: "1rem",
    paddingLeft: "6rem",
  },
    ".logo": {
    marginTop: "1rem",
    width: "20em",
    minWidth:"20em",
    height: "4.5em",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  ".categories": {
    width: "auto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: "100px",
    ".category": {
      fontSize: "1.2em",
      padding: "15px 30px",
      cursor: "pointer",
    },
    div: {
      border: "0",
      outline: "0",
      backgroundColor: "white",
    },
  },

  ".options": {
    width: "400px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: '6.0rem',
    ".option": {
      fontSize: "1.2em",
      padding: "15px 30px",
      cursor: "pointer",
      fontColor: 'black',
    },
    div: {
      border: "0",
      outline: "0",
    },
  },
}));

export default HeaderLayout;