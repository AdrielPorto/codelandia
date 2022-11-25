import styled from "styled-components";
import { BreakpointSize, breakAt } from "../../assets/styles/responsive";
export const LoadingContainer = styled.div`
     background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 999;
    top: 0px;
    overflow: hidden;

`;