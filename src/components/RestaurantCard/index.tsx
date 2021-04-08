import React from 'react';

import { ImBin } from 'react-icons/im';
import { ContainerCol, RestaurantInfo, BootstrapButton } from './styles';

interface RestaurantCardProps {
  name: string;
  business: string;
  address: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  address,
  business,
}) => {
  return (
    <ContainerCol sm={12} md={6}>
      <RestaurantInfo>
        <div>
          <h2>{name}</h2>
          <p>{business}</p>
          <p>{address}</p>
        </div>
        <BootstrapButton variant="danger">
          <ImBin size={12} />
        </BootstrapButton>
      </RestaurantInfo>
    </ContainerCol>
  );
};

export default RestaurantCard;
