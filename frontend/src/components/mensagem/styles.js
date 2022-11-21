import styled from "styled-components";
import { BreakpointSize, breakAt } from '../../assets/styles/responsive';



export const MensagemText = styled.p`
    font-size: 1.4rem;
    color: red;
    padding: 10px 16px 10px 10px;
    border-radius: 2px;
    color: whitesmoke;
    font-family: 'Open Sans',sans-serif;
    display: flex;
    align-items: center;
    gap: 10px;
    line-height: 20px;
    width: 70%;
    flex-basis: auto;
    background-color: ${props => props.back ? props.back : ''};

    margin-top: -20px;
    margin-bottom: 20px;
    position: relative;

    ${breakAt(BreakpointSize.lg)} {
        width: 100%;
    }

    .close{
        position: absolute;
        right: 10px;
        
        cursor: pointer;
        
    }
`;