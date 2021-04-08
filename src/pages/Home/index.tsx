import React, { useState, useCallback } from 'react';
import Row from 'react-bootstrap/Row';
import { FiPlus } from 'react-icons/fi';

import { Container, BootstrapContainer, AddRestaurantButton } from './styles';
import RestaurantCard from '../../components/RestaurantCard';
import AddRestaurantModal from '../../components/AddRestaurantModal';
import { useRestaurant } from '../../context/RestaurantsContext';

const Home: React.FC = () => {
  const [isShown, setIsShown] = useState(false); // to change the state of the modal
  const { restaurants } = useRestaurant();

  // useCallback to avoid creating this function every time the component is updated
  const handleShow = useCallback(() => {
    setIsShown(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsShown(false);
  }, []);

  return (
    <>
      <AddRestaurantModal isShown={isShown} onHide={handleClose} />

      <Container>
        <h1>Home</h1>
        {/* TODO: Filter */}
        <BootstrapContainer>
          <Row>
            {restaurants &&
              restaurants.map(res => {
                return (
                  <RestaurantCard
                    key={res.id}
                    name={res.name}
                    address={res.address}
                    business={res.business}
                  />
                );
              })}
          </Row>
        </BootstrapContainer>
        <AddRestaurantButton onClick={handleShow}>
          <FiPlus size={20} />
        </AddRestaurantButton>
      </Container>
    </>
  );
};

export default Home;
