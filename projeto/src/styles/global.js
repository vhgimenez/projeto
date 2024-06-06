import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Ubuntu";
    }

    .root {
        font-size: 62.5%;
    }

    a {
        text-decoration: none;
    }

`;