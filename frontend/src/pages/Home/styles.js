import styled from "styled-components";
import { Link } from "react-router-dom";

import { BreakpointSize, breakAt } from '../../assets/styles/responsive';

const HomeContainer = styled.div`
    
    width: 100%;
    color: whitesmoke;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-top: 40px;

    ${breakAt(BreakpointSize.sm)} {
        margin: 0;
    }
    
`;

const ContainerDesafio = styled.section`
    grid-column: 1/3;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${breakAt(BreakpointSize.lg)} {
        grid-column: 1/4;
    }
    
`;

const HeaderDesafio = styled.div`
    background-color: ${props => props.theme};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 13px;    
    padding: 22px 16px;
    gap: 20px;
    width: min(700px, 100%);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
   

    ${breakAt(BreakpointSize.sm)} {
        width: 100%;
    }
    @media screen and (max-width: 360px){
        flex-direction: column;
        justify-content: center;
    }

    h2{
        font-size: 2.5rem;
        font-weight: 800;
       
        ${breakAt(BreakpointSize.sm)} {
            font-size: 2rem;
        }
        @media screen and (max-width: 360px){
            text-align: center;
        }
    }
    p{
        font-size: 1.7rem;
        ${breakAt(BreakpointSize.sm)} {
            font-size: 1.4rem;
        }
        @media screen and (max-width: 360px){
            text-align: center;
        }
       
    }
`;

const ButtonLink = styled(Link)`
    background-color: ${props => props.theme};
    color: whitesmoke;
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding: 14px;
    border-radius: 12px;
    font-weight: 600;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    filter:brightness(.98);
    border-style: none;
    border: 1px solid ${props => props.bordercolor};
    border-width: 2px 2px 4px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);

    &:active{
        filter:brightness(1);
    border-width: 1px 1px 1px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.0);
    }

    ${breakAt(BreakpointSize.sm)} {
            gap: 5px;
            padding: 10px;
    }
    @media screen and (max-width: 360px){
            width: 50%;
        }
`;


const Ul = styled.ul`
    margin-top: 26px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    ${breakAt(BreakpointSize.sm)} {
        width: 100%;
    }
`;

const Li = styled.li`
    display: flex;
    gap: 20px;
    flex-direction: row;
    ${breakAt(BreakpointSize.sm)} {
        flex-direction: column;
        width: 100%;
    }
    
`;

const DesafiosItem = styled(Link)`
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: space-between;
        color: whitesmoke;
        background-color:	${props => props.theme};
        border-radius: 3px;
        width: 250px;
        padding: 10px;
        ${breakAt(BreakpointSize.sm)} {
        width: 100%;
    }
        div{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            h3{
                font-size: 1.5rem;
            }
        }
        box-shadow: 0px 3px ${props => props.shadow};
        transition: all 0.3s ease-in-out;
        &:active{
            box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.0);
        }
`;


const ContainerMenuLateral = styled.aside`
     ${breakAt(BreakpointSize.lg)} {
        display: none;
    }
`;


const RanqueLateral = styled.div`
    width: 100%;
    background-color:#133e7c;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 16px;
    h2{
        font-size: 2.5rem;
    }
    ul{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        li{
            display: flex;
            
            width: 100%;
            background-color: #091833;
            align-items: center;
            gap: 15px;
            padding:  10px;
            border-radius: 5px;
            
            span{
                height: 25px;
                width: 25px;
                border-radius: 50%;
                background-color: #2b2a5c;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.5rem;
            }
            span.primeiro{
                color: gold;
            }
            span.segundo{
                color: silver;
            }
            span.terceiro{
                color: burlywood;
            }
            p{
                font-size: 1.5rem;
            }
        }
    }
`;



export {
    HomeContainer, ContainerDesafio, ContainerMenuLateral,
    HeaderDesafio, ButtonLink, Ul, Li, DesafiosItem, RanqueLateral
};