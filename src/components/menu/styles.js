import styled from "styled-components";
import { BreakpointSize, breakAt } from '../../assets/styles/responsive';


const Menu = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 70px;
    justify-content: space-between;
    background-color: #091833;
    border-bottom: 2px solid #182f58;
    position: fixed;
    z-index: 200;
    align-items: center;
    height: 70px;
    ${breakAt(BreakpointSize.sm)} {
        padding: 0 20px;
    }
`;

const Logo = styled.div`
    a{
        font-size: 2.5rem;
        color: #ffff;
        font-weight: 700;
        
    ${breakAt(BreakpointSize.sm)} {
        font-size: 1.8rem;
    }
        span{
            font-size: 2.5rem;
            color: #ea00d9;
            font-weight: 700;
            ${breakAt(BreakpointSize.sm)} {
            font-size: 1.8rem;
    }
        }
    }
`;

const Nav = styled.nav`
    font-weight: 700;
`;

const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const NavItem = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    gap: 5px;
    color: #0abdc6;

    font-weight: 500;
    
    span{
    font-size: 1.7rem;
    ${breakAt(BreakpointSize.sm)} {
        font-size: 1.3rem;
    }
    }
    svg{
        ${breakAt(BreakpointSize.sm)} {
            height: 25px;
        }
    }
`;


const Dropdown = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    width: 250px;
    top: 75px;
    right: 62px;
    border-radius: 5px;
    ${breakAt(BreakpointSize.sm)} {
          top: 65px;
        right: 10px;
    }
     &::after{
        content: ' ';
        position: absolute;
        width: 0;
        height: 0;
        right: 12px;
        top: -28px;
        border: 15px solid;
        border-color: #fff0 #ffffff00 whitesmoke #ffffff00;

        
     }
    div{
        font-size: 1.5rem;
        color: #333;
        padding: 10px;
        border: 2px solid #133e7c;
        border-left: none;
        border-right: none;
    }
    button{
        text-align: left;
        border: none;
        background: none;
       
        font-size: 1.5rem;
        color: #133e7c;
        width: 100%;	
        height: 100%;
    
        
    }
    a{
        font-size: 1.5rem;
        color: #133e7c;
           
        width: 100%;
        height: 100%;
        border-bottom: 2px solid #133e7c;
        padding: 10px;
        
    }
    .logout{
        padding: 10px;
    }

`;

const DropdownItem = styled.button``;

export { Menu, Logo, Nav, NavList, NavItem, Dropdown, DropdownItem };