import React, { useCallback } from 'react';

import { ImBin } from 'react-icons/im';
import {
  ContainerCol,
  RestaurantInfoContainer,
  BootstrapButton,
} from './styles';

import {
  useRestaurant,
  RestaurantInfo,
} from '../../context/RestaurantsContext';

interface RestaurantCardProps {
  info: RestaurantInfo;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ info }) => {
  // use hook to remove restaurant from the list
  const { remove } = useRestaurant();

  const handleDelete = useCallback(() => {
    remove(info.id);
  }, [remove, info.id]);

  return (
    <ContainerCol sm={12} md={6}>
      <RestaurantInfoContainer>
        <div>
          <h2>{info.name}</h2>
          <p>{info.business}</p>
          <p>{info.address}</p>
        </div>
        <BootstrapButton variant="danger" onClick={handleDelete}>
          <ImBin size={12} />
        </BootstrapButton>
      </RestaurantInfoContainer>
    </ContainerCol>
  );
};

export default RestaurantCard;
