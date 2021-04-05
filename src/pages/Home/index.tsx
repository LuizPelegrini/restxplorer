import React from 'react';
import Row from 'react-bootstrap/Row';
import { FiPlus } from 'react-icons/fi';

import { Container, BootstrapContainer, AddRestaurantButton } from './styles';
import RestaurantCard from '../../components/RestaurantCard';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Home</h1>
      {/* TODO: Filter */}
      <BootstrapContainer>
        <Row>
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </Row>
      </BootstrapContainer>
      <AddRestaurantButton>
        <FiPlus size={20} />
      </AddRestaurantButton>
    </Container>
  );
};

export default Home;
