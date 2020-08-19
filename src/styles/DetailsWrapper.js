import styled from "@emotion/styled";

const DetailsWrapper = styled.div((props) => ({
  width: "75%",
  margin: "0 auto",
  marginTop: "50px",
  ".DetailView": {},
  ".DetailViewGridColumn": {
    marginBottom: "10px",
  },
  ".DetailViewGridColumn1": {},
  ".DetailViewGridColumn2": {},

  ".DetailViewGridRow": {
    marginTop: "15px",
    color: "#555555",
    fontWeight: "bold",
    fontSize: "16px",
  }, //왼쪽

  ".row": {
    marginTop: "15px",
    color: "#555555",
  }, // 오른쪽

  ".ui.primary.button": {
    width: "100%",
    height: "50px",
    marginTop: "100px",
    backgroundColor: "white",
    color: "black",
    border: "1px solid #7d7d7d",
    letterSpacing: "1.5px",
  },

  "div.TOTAL.PRICE": {
    marginTop: "30px",
  },
  "div.TOTAL.PRICE > span.total > strong > em": {
    color: "black",
    fontSize: "20px",
  },
}));

export { DetailsWrapper };
