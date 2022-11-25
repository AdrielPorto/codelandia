import styled from "styled-components";

import { BreakpointSize, breakAt } from '../styles/responsive';

export const Form = styled.form`
    width: 100%;
   
`;

export const FormGroup = styled.div`
    position: relative;
    margin-bottom: 25px;
    overflow: hidden;
    ${breakAt(BreakpointSize.md)} {
        text-align: center;
    }
    &.formCheck{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 300px;
        @media screen and (max-width: 320px) {
           
            width: 100%;
        }
        label{
                margin-left: 20px;
                @media screen and (max-width: 320px) {
                margin-left: 0;
            }
        }
        .error-text{
          
          flex: 1;
            ${breakAt(BreakpointSize.md)} {
                margin-top: 0;
            }
            
        }
        
    }

    .error-text{
        color: 	#ff0677;
        font-size: 1.2rem;
        margin-top: 3px;
    }
`;

export const LabelIcons = styled.label`
    position: absolute;
    left: 0;
    top: 20%;
    .errorIcons{
        color: 	#ff0677;
    }
   
`;

export const Label = styled.label`
    font-size: 1.4rem;
    a{
        color: whitesmoke;
        font-size: 1.4rem;
        text-decoration:underline;
        &:active{
            text-decoration: none;
        }
    }
`;

export const InputEntradas = styled.input`
    width: 70%;
    display: block;
    border: none;
    border-bottom: 1px solid #999;
    padding: 6px 30px;
    font-family: Poppins;
    box-sizing: border-box;
    outline: none;
    font-size: 1.4rem;
    background: transparent;
    color: whitesmoke;

    &.error{
        border-bottom: 1px solid 	#ff0677;
    }

    ${breakAt(BreakpointSize.lg)} {
       width: 100%;
    }

`;

export const CheckBox = styled.input`

`;

export const ButtonEntradas = styled.input`
    font-size: 1.4rem;
    margin-top: 16px;
    width: 115px;
    height: 50px;
    cursor: pointer;
    background-color:#3d43b4;
    color: whitesmoke;
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: #5f66e3;
    }
   
    ${breakAt(BreakpointSize.md)} {
        margin-bottom: 20px;
    }
`;