import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body{
    background-color: #F0F0F5;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  /* Display flex to push the bottom bar all the way to the bottom */
  #root{
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;
  }
`;
