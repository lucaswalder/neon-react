import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
    list-style: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
    text-align: left;
    border: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    font-size: 1.6rem;
    font-family: 'Inter', sans-serif;
}

button {
    background: transparent;
    cursor: pointer;
}

img {
    display: block;
    max-width: 100%;
}
html {
    font-size: 62.5%;
}
html{
    overflow-x: hidden;
}

input,
button,
textarea {
    appearance: none;
}
`;

export default GlobalStyle;