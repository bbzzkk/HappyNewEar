import styled from "@emotion/styled";

const BestListLayout = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "2em",
  marginBottom: "1em",
  marginLeft: "10%",
  marginRight: "10%",
  textAlign: "center",
  ".title":{
      marginBottom:"2em",
  },
  ".items-wrapper": {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  ".item-wrapper": {
    marginBottom: "2em",
  },
}));

export default BestListLayout;
