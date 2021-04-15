import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --primary: #93329e;
    --background: #f2f2f2;
    --gray: #cccccc;
    --dark-gray: #232129;
    --shadow: #adadad;

    --white: #cfcfcf;
    --pallete-darkest: #1f1327;
    --pallete-darker: #311d3f;
    --pallete-dark: #522546;
    --pallete-light: #88304e;
    --pallete-lighter: #e23e57;
  }

  html{
    font-size: 62.5%; // 1rem = 10px
  }

  body{
    background-color: var(--pallete-darkest);
    -webkit-font-smoothing: antialiased;

    font-size: 1.6rem;
  }

  /* Display flex to push the bottom bar all the way to the bottom */
  #root{
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;
  }
`;
