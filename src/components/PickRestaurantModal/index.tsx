/* Modal shown to the user when he wants to randomly pick a restaurant */
import React from 'react';

import { RestaurantDTO } from '../../context/RestaurantsContext';
import { BootstrapModal, BoostrapButton } from './styles';

// properties of the Modal
// onHide is the function that is called if the modal close button is clicked
interface PickRestaurantModalProps {
  isShown: boolean;
  onHide: () => void;
  restaurantInfo: RestaurantDTO;
}

const PickRestaurantModal: React.FC<PickRestaurantModalProps> = ({
  isShown,
  onHide,
  restaurantInfo,
}) => {
  return (
    <BootstrapModal show={isShown} onHide={onHide} centered>
      <BootstrapModal.Header closeButton>Pick Restaurant</BootstrapModal.Header>
      <BootstrapModal.Body>
        {restaurantInfo.price}
        {restaurantInfo.name}
        <BoostrapButton type="submit" onClick={onHide}>
          Let&apos;s Eat!
        </BoostrapButton>
      </BootstrapModal.Body>
    </BootstrapModal>
  );
};

export default PickRestaurantModal;
