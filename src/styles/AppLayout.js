import styled from "@emotion/styled";

const AppLayout = styled.div({
  margin: "0 auto",
  textAlign: "center",
  width: "90%",
  "& a": {
    textDecoration: "none",
    color: "black",
  },
  "& *": {
    boxSizing: "border-box",
  },
});

export default AppLayout;
