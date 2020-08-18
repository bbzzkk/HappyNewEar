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
    padding: '1rem',
    backgroundColor: 'white',
    // background: 'lightgray',

  ".logoContainer": {
    height: "auto",
    width: "auto",
    padding: "1rem",
    paddingLeft: "4rem",
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
    paddingRight: '100px',
    ".option": {
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
}));

export default HeaderLayout;