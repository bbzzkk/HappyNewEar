import styled from "@emotion/styled";

const CustomButton = styled.button((props) => ({
  ...props,
  // minWidth: "20em",
  flexWrap: "nowrap",
  width: "100%",
  height: "4em",
  letterSpacing: "0.2em",
  lineHeight: "2.8em",
  padding: "0 1em 0 1em",
  fontSize: "0.9em",
  backgroundColor: props.isOAuth ? "#4285f4" : "black",
  color: "white",
  fontWeight: "border",
  border: "none",
  cursor: "pointer",
  margin: "0.5em",
  borderRadius: "0.5em",
  boxShadow: " 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",

  "&: hover": {
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
  },
}));

export default CustomButton;
