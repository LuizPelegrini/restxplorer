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
  deleteButton?: boolean; // should this component show the delete button?
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  info,
  deleteButton,
}) => {
  // use hook to remove restaurant from the list
  const { remove } = useRestaurant();

  const handleDelete = useCallback(() => {
    remove(info.id);
  }, [remove, info.id]);

  return (
    <ContainerCol sm={12}>
      <RestaurantInfoContainer>
        <div>
          <h2>{info.name}</h2>
          <p>
            <strong>Business: </strong>
            {info.business}
          </p>
          <p>
            <strong>Address: </strong>
            {info.address}
          </p>
          <p>
            <strong>Price: </strong>RM {info.price}
          </p>
        </div>
        {deleteButton && (
          <BootstrapButton variant="danger" onClick={handleDelete}>
            <ImBin size={12} />
          </BootstrapButton>
        )}
      </RestaurantInfoContainer>
    </ContainerCol>
  );
};

export default RestaurantCard;
