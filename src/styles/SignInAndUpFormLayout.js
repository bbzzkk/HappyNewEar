import styled from "@emotion/styled";

const SignInAndUpFormLayout = styled.div(() => ({
  width: "70%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minWidth: "40em",
  padding: "0.5em 1em",
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "2em",
  },
  "& .buttons": {
    marginTop: "3em",
    display: "flex",
    minWidth: "20em",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    padding: "1em",
  },
}));

export default SignInAndUpFormLayout;
