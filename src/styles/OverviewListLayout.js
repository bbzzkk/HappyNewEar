import styled from "@emotion/styled";

const OverviewListLayout = styled.div((props) => ({
    display: "flex",
    flexDirection: 'column',
    marginTop: '1em',
    marginLeft: '1em',
    marginRight: '1em',

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
