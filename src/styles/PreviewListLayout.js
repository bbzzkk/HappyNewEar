import styled from "@emotion/styled";

const PreviewListLayout = styled.div((props) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: '0 auto',
    marginBottom: "0.5em",

    "div": {
        flex: 1,
        display: 'flex',
    },
    ".category": {
        margin: '0 auto',
        color: 'black',
        textAlign: 'center',
        marginTop: '1em',
        marginBottom: '1em',
    },
    ".category-link": {
        color: 'black',
        textAlign: 'center',
    },


}));

export default PreviewListLayout;
