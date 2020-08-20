import styled from "@emotion/styled";

const BestListLayout = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "2em",
  marginBottom: "1em",
  marginLeft: "0.5em",
  marginRight: "0.5em",
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
    flex: '1 0 21%',
  },
}));

export default BestListLayout;
