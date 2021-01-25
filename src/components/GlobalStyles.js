import { createGlobalStyle } from 'styled-components';

// font-family: 'Dhurjati', sans-serif;
// font-family: 'Poppins', sans-serif;
// font-family: 'Russo One', sans-serif;
// font-family: 'Sonsie One', cursive;

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkorange;
        }
        &::-webkit-scrollbar-track {
    background: white;
        }
    }
    body{
        font-family: 'Poppins', sans-serif;
        width: 100%;
        background-color: #000000
    }
    h1{
        font-family: 'Sonsie One', cursive;
    }
    h2{
        font-size: 3rem;
        font-family: 'Dhurjati', sans-serif;
        color: darkorange;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 0.5rem 1rem 0 1rem
    }
    p {
        font-size: 1.1.rem;
        line-height: 200%normal;
        color: #696969;
        padding: 0 1rem 1rem 1rem
    }
    a {
        text-decoration: none;
        color: #333;
    }
    span {
        color: darkorange
    }
    img{
        display: block
    }
    input{
        font-weight: bold;
    font-family: 'Dhurjati', sans-serif;
    }
    
`;

export default GlobalStyles;
