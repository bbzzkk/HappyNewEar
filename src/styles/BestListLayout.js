import styled from "@emotion/styled";

import { keyframes } from "@emotion/core";

const bounce = keyframes`
  from, 10%, 33%, 50%, to {
    transform: translate3d(0,0,0);
  }

  20%, 27% {
    transform: translate3d(0, -30px, 0);
  }

  40% {
    transform: translate3d(0, -15px, 0);
  }

  50% {
    transform: translate3d(0,-4px,0);
  }
`;

const BestListLayout = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "2em",
  marginBottom: "1em",
  marginLeft: "10%",
  marginRight: "10%",
  textAlign: "center",
  ".title": {
    animation: `${bounce} 1s ease infinite`,
    marginBottom: "2em",
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
