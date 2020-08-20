import styled from "@emotion/styled";
import { keyframes } from '@emotion/core';

const shine = keyframes`
  from, 10%, 33%, 50%, to {
    transform: translate3d(0,0,0);
  }

  20%, 27% {
    transform: translate3d(0, -12px, 0);
  }

  40% {
    transform: translate3d(0, -7px, 0);
  }

  50% {
    transform: translate3d(0,-4px,0);
  }
`;


const HeaderLayout = styled.div((props) => ({
  height: "8em",
  display: "flex",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  width: "100%",
  justifyContent: "space-between",
  zIndex: "10000",
  flex: 1,
  backgroundColor: "white",

  ".logoContainer": {
    height: "auto",
    width: "auto",
    padding: "1rem",
    paddingLeft: "6rem",
    "& :hover": {
      background:
        "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%)",

      animation: `${shine} .75s`,
    },
  },
  ".logo": {
    marginTop: "0.7em",
    width: "20em",
    minWidth: "20em",
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
    paddingLeft: "12em",
    ".category": {
      fontSize: "1.2em",
      padding: "0 2em",
      cursor: "pointer",
      "& :hover": {
        fontWeight: "bold",
      },
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
    marginRight: "6.0rem",
    ".option": {
      fontSize: "1em",
      padding: "0 0.8em",
      cursor: "pointer",
      "& :hover": {
        fontWeight: "bold",
      },
    },
    div: {
      border: "0",
      outline: "0",
    },
  },
}));

export default HeaderLayout;