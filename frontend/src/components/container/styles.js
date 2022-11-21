import styled from "styled-components";
import { BreakpointSize, breakAt } from '../../assets/styles/responsive';
const Main = styled.main`
    padding-top: 70px;
    color: whitesmoke;
    width: 100%;
    padding: 0 70px;
    padding-top: 70px;

    ${breakAt(BreakpointSize.sm)} {
        padding: 0 20px;
        padding-top: 90px;
    }
    
`;

export default Main;