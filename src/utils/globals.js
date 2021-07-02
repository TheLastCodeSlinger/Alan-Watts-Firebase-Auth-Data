import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
    }

    button {
      outline: none;
      cursor: pointer;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
        }



    form,
    input,
    textarea,
    button,
    select,
    a {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
`;
