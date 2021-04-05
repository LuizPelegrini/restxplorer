import React from 'react';

import { ImBin } from 'react-icons/im';
import { ContainerCol, RestaurantInfo, BootstrapButton } from './styles';

const RestaurantCard: React.FC = () => {
  return (
    <ContainerCol sm={12} md={6}>
      <RestaurantInfo>
        <div>
          <h2>Name</h2>
          <p>Business</p>
          <p>Address</p>
        </div>
        <BootstrapButton variant="danger">
          <ImBin size={12} />
        </BootstrapButton>
      </RestaurantInfo>
    </ContainerCol>
  );
};

export default RestaurantCard;
