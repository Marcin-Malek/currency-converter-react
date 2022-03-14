import { createGlobalStyle } from "styled-components";
import background from "./bg_img.png";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::before, ::after {
    box-sizing: inherit;
    }

    body {
    background-image: url("${background}");
    background-position: center;
    background-size: cover;
    font-family: 'Lato', sans-serif;
    }

    #root {
    height: 100vh;
    }
`