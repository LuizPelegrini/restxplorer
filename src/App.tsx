import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes/index.routes';
import BottomBar from './components/BottomBar';
import { RestaurantProvider } from './context/RestaurantsContext'; // provider for the restaurants data

const App: React.FC = () => {
  console.log(process.env.FIREBASE_API_KEY);

  return (
    <BrowserRouter>
      <RestaurantProvider>
        <Routes />
      </RestaurantProvider>
      <BottomBar />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
