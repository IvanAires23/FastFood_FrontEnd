import { createGlobalStyle } from 'styled-components';

const GlobalCss = createGlobalStyle`
    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalCss;
