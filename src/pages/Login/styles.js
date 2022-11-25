import styled from 'styled-components';
import { BreakpointSize, breakAt } from '../../assets/styles/responsive';

const Container = styled.div`
   padding-top: 30px;
   ${breakAt(BreakpointSize.sm)} {
        margin-top: 0;
        main{
            padding-top: 30px;
        }
   }
  
`;

const LoginContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
    gap: 100px;
    
    ${breakAt(BreakpointSize.sm)} {
        gap: 10px;
    }
    
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${breakAt(BreakpointSize.md)} {
       grid-column: 1 / 3;
       
    }

    img{
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

        &:active{
            text-decoration: none;
        }
    }
`;

const FormContainer = styled.div`
    position: relative;
   
    h2{
        font-size: 3.6em;
        font-weight:900;
        margin-bottom: 36px;
    }
    ${breakAt(BreakpointSize.md)} {
        order: -1;
        grid-column: 1 / 3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const SocialLogin = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    position: absolute;
   bottom: 0;
    span{
        font-size: 1.4rem;
    }
    ${breakAt(BreakpointSize.lg)} {
       bottom: -10px;
       gap: 10px;
    }
`;

const Socials = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Social = styled.li`
    a{
        transition: all 0.3s ease-in-out;
        &:hover{
            transform: scale(1.1);
            svg{
                transform: scale(1.3);
            }
        }
        svg{
            transition: all 0.3s ease-in-out;
        }
    }
`;

export { Container, LoginContainer, ImageContainer, FormContainer, SocialLogin, Socials, Social };