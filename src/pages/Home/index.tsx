import React, { useState, useCallback } from 'react';
import Row from 'react-bootstrap/Row';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { FiPlus } from 'react-icons/fi';

import {
  Container,
  BootstrapContainer,
  AddRestaurantButton,
  FilterContainer,
} from './styles';
import RestaurantCard from '../../components/RestaurantCard';
import AddRestaurantModal from '../../components/AddRestaurantModal';
import {
  RestaurantInfo,
  useRestaurant,
} from '../../context/RestaurantsContext';

const Home: React.FC = () => {
  const [isShown, setIsShown] = useState(false); // to change the state of the modal
  const { restaurants } = useRestaurant(); // use hook to list restaurants
  const [maxPrice, setMaxPrice] = useState(-1);

  // useCallback to avoid creating this function every time the component is updated
  const handleShow = useCallback(() => {
    setIsShown(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsShown(false);
  }, []);

  const handleFilterChange = useCallback(value => {
    // TODO: Get value and show only restaurants below the price range
    const max = Number(value);
    setMaxPrice(max);
  }, []);

  return (
    <>
      <AddRestaurantModal isShown={isShown} onHide={handleClose} />

      <Container>
        <div className="header">
          <h1>Restaurants</h1>
          <FilterContainer>
            <span>Price Filter:</span>
            <ToggleButtonGroup
              type="radio"
              name="hey"
              onChange={handleFilterChange}
              defaultValue={-1}
            >
              <ToggleButton value={-1}>All</ToggleButton>
              <ToggleButton value={10}>Less 10</ToggleButton>
              <ToggleButton value={20}>Less 20</ToggleButton>
              <ToggleButton value={30}>Less 30</ToggleButton>
            </ToggleButtonGroup>
          </FilterContainer>
        </div>
        <BootstrapContainer>
          <Row>
            {restaurants &&
              restaurants.map(res => {
                if (maxPrice < 0 || res.price <= maxPrice)
                  return (
                    <RestaurantCard key={res.id} info={res} deleteButton />
                  );
                return null;
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
