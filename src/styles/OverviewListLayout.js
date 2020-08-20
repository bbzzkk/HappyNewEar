import styled from "@emotion/styled";

const OverviewListLayout = styled.div((props) => ({
    display: "flex",
    flexDirection: 'column',
    
    marginTop: '5em',
    marginLeft: '0.5em',
    marginRight: '0.5em',

    ".items-wrapper": {
        display: "flex",
        flexWrap: 'wrap',
    },
    ".item-wrapper": {
        flex: '1 0 21%',
        marginBottom: '2em',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
}));

export default OverviewListLayout;
