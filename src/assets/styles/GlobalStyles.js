import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, 
    *:after,
    *:before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-size: 10px;
        font-family: 'Poppins', sans-serif;
        
    }
    body{
        font-size: 100%;
        list-style-type: none;
        font-family: 'Poppins', sans-serif;
        background-color: #091833;
        position: relative;
    }
    ol, ul {
    list-style: none;
    } 
    a{
        text-decoration: none;
    } 
    button{
        cursor: pointer;
    } 
    img{
        max-width: 100%;
        display: block;
    }
    #root{
        
        
    }
    

`;

export default GlobalStyle;