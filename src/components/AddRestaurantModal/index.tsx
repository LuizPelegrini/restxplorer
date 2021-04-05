import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import firebaseDB from '../../config/firebase';

import Input from '../Input';
import { BoostrapButton, BootstrapModal } from './styles';

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
}

const AddRestaurantModal: React.FC<AddRestaurantModalProps> = ({
  isShown,
  onHide,
}) => {
  const formRef = useRef<FormHandles>(null);

  // Upon submitting the restaurant, send the data to be saved in the cloud
  const handleSubmit = useCallback(
    (data: ModalFormData) => {
      console.log('name', data.name);
      console.log('address', data.address);
      console.log('business', data.business);

      // add to the database
      // TODO: Show an error message if error happens
      firebaseDB.child('restaurants').push(data, error => {
        if (error) console.error('restaurant could not be saved');
      });

      // close the modal after submitting the form
      onHide();
    },
    [onHide],
  );

  return (
    <BootstrapModal show={isShown} onHide={onHide} centered>
      <BootstrapModal.Header closeButton>Add Restaurant</BootstrapModal.Header>
      <BootstrapModal.Body>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Name" />
          <Input name="address" placeholder="Address" />
          <Input name="business" placeholder="Business" />
          <BoostrapButton type="submit">Add</BoostrapButton>
        </Form>
      </BootstrapModal.Body>
    </BootstrapModal>
  );
};

export default AddRestaurantModal;
