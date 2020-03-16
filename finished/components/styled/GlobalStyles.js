import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-VariableFont.ttf') format('ttf');
    font-display:fallback;
  }
  ${normalize};
  body {
    margin:0;
    padding:0;
    font-family: Inter, sans-serif;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }
  body, html {
    height:100%;
  }
  #__next {
    height:100%;
    overflow:hidden;
  }
  h1,h2 {
    text-align:center;
  }
`;

export default GlobalStyles;
