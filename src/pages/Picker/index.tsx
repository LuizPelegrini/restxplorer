import React, { useEffect, useState, useCallback } from 'react';
import Row from 'react-bootstrap/Row';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';

import RestaurantCard from '../../components/RestaurantCard';
import {
  Container,
  BootstrapContainer,
  PickRandomRestaurantButton,
  PickerSection,
} from './styles';
import {
  RestaurantDTO,
  RestaurantInfo,
  useRestaurant,
} from '../../context/RestaurantsContext';
import PickRestaurantModal from '../../components/PickRestaurantModal';

const Picker: React.FC = () => {
  const [isShown, setIsShown] = useState(false); // to change the state of the modal
  const [filterValue, setFilterValue] = useState(-1);
  const [
    pickedRestaurantInfo,
    setPickedRestaurantInfo,
  ] = useState<RestaurantDTO>({} as RestaurantDTO);
  const { restaurants, draw } = useRestaurant();
  const [pickedRestaurants, setPickedRestaurants] = useState<RestaurantInfo[]>(
    [],
  );

  // only shows the restaurants that has been picked before
  useEffect(() => {
    const temp = restaurants.filter(res => res.pickedState.timesPicked > 0);
    setPickedRestaurants(temp);
  }, [restaurants]);

  // useCallback to avoid creating this function every time the component is updated
  const handleDraw = useCallback(() => {
    if (restaurants.length === 0) return;
    const restaurantPicked = draw(filterValue);
    // pass the restaurant info to the modal so it can be displayed
    setPickedRestaurantInfo(restaurantPicked);
    // show the modal
    setIsShown(true);
  }, [draw, filterValue, restaurants]);

  // to close the modal
  const handleClose = useCallback(() => {
    setIsShown(false);
  }, []);

  // to change the value of the filter
  const changeFilter = useCallback(value => {
    setFilterValue(value);
  }, []);

  return (
    <>
      <PickRestaurantModal
        isShown={isShown}
        onHide={handleClose}
        restaurantInfo={pickedRestaurantInfo}
      />

      <Container>
        <BootstrapContainer>
          <h1>History</h1>
          <Row>
            {pickedRestaurants &&
              pickedRestaurants.map(res => (
                <RestaurantCard key={res.id} info={res}>
                  {res.name}
                </RestaurantCard>
              ))}
          </Row>
        </BootstrapContainer>
        <PickerSection>
          <div>
            <span>Filter:</span>
            <ToggleButtonGroup
              onChange={changeFilter}
              type="radio"
              name="hey"
              defaultValue={-1}
            >
              <ToggleButton value={-1}>All</ToggleButton>
              <ToggleButton value={10}>Less 10</ToggleButton>
              <ToggleButton value={20}>Less 20</ToggleButton>
              <ToggleButton value={30}>Less 30</ToggleButton>
            </ToggleButtonGroup>
          </div>
          <PickRandomRestaurantButton>
            <GiPerspectiveDiceSixFacesRandom size={20} onClick={handleDraw} />
          </PickRandomRestaurantButton>
        </PickerSection>
      </Container>
    </>
  );
};

export default Picker;
