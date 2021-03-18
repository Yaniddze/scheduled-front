import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body, html, #root, #app {
        margin: 0;
        padding: 0;

        height: 100%;
        font-family: 'Roboto', sans-serif;
    }

    #app {
        display: grid;

        grid-template-rows: 100px 1fr 200px;
    }

    #app:first-child {
        grid-row-start: 1; 
    }

    #app:nth-child(2) {
        grid-row-start: 2;
    }

    #app:last-child {
        grid-row-start: 3;
    }
`;
