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

    a{
        text-decoration: none;
        color: inherit;
    }
    a:visited {
        color: currentColor;
    }


    /* prepared animations*/
    .fade-enter{
    opacity: 0;
    transform: translateX(-100%);
    }
    .fade-exit{
        opacity: 1;
        transform: translateX(0);
    }
    .fade-enter-active{
        opacity: 1;
        opacity: 1;
        transform: translateX(0);
    }
    .fade-exit-active{
        opacity: 0;
        opacity: 0;
        transform: translateX(-100%);
    }
    .fade-enter-active,
    .fade-exit-active{
        transition: opacity 0.3s, transform 0.3s;
    }
`;
