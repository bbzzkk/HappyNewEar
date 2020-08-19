import styled from "@emotion/styled";

const OverviewListLayout = styled.div((props) => ({
    display: "flex",
    flexDirection: 'column',
    marginTop: '5em',
    marginLeft: '10%',
    marginRight: '10%',

    ".items-wrapper": {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: 'wrap',
    },
    ".item-wrapper": {
        marginBottom: '2em',
    },
}));

export default OverviewListLayout;
