import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes/index.routes';
import BottomBar from './components/BottomBar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
      <BottomBar />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
