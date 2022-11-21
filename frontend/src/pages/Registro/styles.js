import styled from "styled-components";
import { BreakpointSize, breakAt } from '../../assets/styles/responsive';

export const Container = styled.div`

    padding: 0;
    padding: 0 80px;

    @media screen and (max-width: 1100px) {
        padding: 0px;
    }
    main{
            padding-top: 50px;
        }
    
`;


export const RegistroContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;

    ${breakAt(BreakpointSize.sm)} {
        gap: 0px;
    }

`;

export const FormContainer = styled.div`
    position: relative;
    ${breakAt(BreakpointSize.md)} {
        grid-column: 1 / 3;
        text-align: center;
    }
    h2{
        font-size: 3.6em;
        font-weight:900;
        margin-bottom: 36px;
    }

    .buttonRegistro{
       margin:0;
        position: absolute;
        bottom: 0;
        ${breakAt(BreakpointSize.lg)} {
            position: static;
        }
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${breakAt(BreakpointSize.md)} {
        
        grid-column: 1 / 3;
        text-align: center;
    }
  img{
    width: 480px;
    ${breakAt(BreakpointSize.sm)} {
       display: none;
    }

  }
    a{
        margin-top: 57px;
        font-size: 1.4rem;
        color: whitesmoke;
        width: 300px;
        align-items: center;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration:underline;
        ${breakAt(BreakpointSize.sm)} {
            width: 100%;
            margin-top: 0;
        }

        &:active{
            text-decoration: none;
        }
    }
`;
