import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --primary: #93329e;
    --background: #f2f2f2;
    --gray: #cccccc;
    --dark-gray: #232129;
  }

  html{
    font-size: 62.5%; // 1rem = 10px
  }

  body{
    background-color: var(--background);
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
