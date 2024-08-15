import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=FiraGO&display=swap');

  @font-face {
    font-family: 'FiraGO';
    src: url('./fonts/FiraGO-Regular.woff2') format('woff2'),
         url('./fonts/FiraGO-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  html, body {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  /* Custom scrollbar styles */
  ::-webkit-scrollbar {
    width: 12px; /* Increased width */
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 20px; 
  }

  ::-webkit-scrollbar-thumb {
    background: #e85257;
    border-radius: 20px; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #dad0d1;
  }

  /* For Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #e85257 #f1f1f1;
  }

  body {
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'FiraGO', sans-serif;
  }

  ol, ul {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  div, p {
    word-wrap: break-word;
    overflow-wrap: break-word;
    max-width: 100%;
  }
`;

export default GlobalStyles;
