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
  button: {
    width: '80%',
    opacity: '0.7',
    position: 'absolute',
    top: '255px',
    display: 'none',
  },
  "&:hover": {
    ".image": {
      opacity: "0.8",
    }
  },
}));

export default ItemLayout;
