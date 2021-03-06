import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import InputGroup from 'react-bootstrap/InputGroup';

import Input from '../Input';
import { BoostrapButton, BootstrapModal } from './styles';
import { useRestaurant } from '../../context/RestaurantsContext';

// properties of the Modal
// onHide is the function that is called if the modal close button is clicked
interface AddRestaurantModalProps {
  isShown: boolean;
  onHide: () => void;
}

// data coming when submitting from the form
interface ModalFormData {
  name: string;
  address: string;
  business: string;
  price: number;
}

const AddRestaurantModal: React.FC<AddRestaurantModalProps> = ({
  isShown,
  onHide,
}) => {
  const formRef = useRef<FormHandles>(null);
  // use hook to add restaurant from the list
  const { add } = useRestaurant();

  // Upon submitting the restaurant, send the data to be saved in the cloud
  const handleSubmit = useCallback(
    ({ name, address, business, price }: ModalFormData) => {
      add({
        name,
        address,
        business,
        price,
      });
      // close the modal after submitting the form
      onHide();
    },
    [onHide, add],
  );

  return (
    <BootstrapModal show={isShown} onHide={onHide} centered>
      <BootstrapModal.Header closeButton>New Restaurant</BootstrapModal.Header>
      <BootstrapModal.Body>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Name" />
          <Input name="address" placeholder="Address" />
          <Input name="business" placeholder="Business" />
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>RM</InputGroup.Text>
              <Input
                name="price"
                placeholder="Price"
                type="number"
                className="price-input"
              />
            </InputGroup.Prepend>
          </InputGroup>
          <BoostrapButton type="submit">Add</BoostrapButton>
        </Form>
      </BootstrapModal.Body>
    </BootstrapModal>
  );
};

export default AddRestaurantModal;
