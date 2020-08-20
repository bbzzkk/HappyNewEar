import styled from "@emotion/styled";

const TotalCountLayout = styled.div((props) => ({
  width: "100%",
  height: "100%",
  marginLeft: "5em",
  textAlign: "center",
  button: {
    width: "100%",
    height: "4em !important",
    color: "white !important",
    backgroundColor: "#FC4C4E !important",
    letterSpacing: "1.5px",

    "&: hover": {
      fontWeight: "bold",
      border: "solid #FC4C4E !important",
      color: "black !important",
      backgroundColor: "white !important",
    },
    "div.column.totalAmount > div.ui.horizontal.statistic": {
      marginLeft: "-200px",
    },
  },
}));

export default TotalCountLayout;
