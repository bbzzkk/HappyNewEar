import styled from "@emotion/styled";

const ItemLayout = styled.div((props) => ({
  width: "15em",
  display: "flex",
  flexDirection: "column",
  height: "350px",
  alignItems: "center",
  position: "relative",
  margin:'1em',
  ".image": {
    width: "100%",
    height: "95%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginBottom: "5px",
  },
  "&:hover": {
    ".image": {
      opacity: "0.8",
    },
    ".button": {
      opacity: "0.85",
      display: "flex",
    },
  },
}));

export default ItemLayout;
