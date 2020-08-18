import styled from "@emotion/styled";
import { GridColumn } from "semantic-ui-react";

const AppLayout = styled.div((props) => ({
    fontcolor: 'black',
    scrollbarWidth: 'none', /* Firefox */
    // height: '100%',
    // width: '100%',
    margin: '0',
    display: 'flex',
    flexDirection: 'column',
}))

export default AppLayout;
