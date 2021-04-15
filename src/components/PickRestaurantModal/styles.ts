import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const BoostrapButton = styled(Button)`
  position: absolute;
  bottom: 0;
  width: 120px;
  font-size: 1.2rem;
  border-radius: 40px;
  text-transform: uppercase;
  padding: 1rem 0;
  background-color: var(--pallete-lighter);
  border-color: transparent;
  letter-spacing: 1px;

  // to center button at the bottom of the modal
  left: 50%;
  transform: translate(-50%, 50%);
`;

// target the modal content, to change its borders
export const BootstrapModal = styled(Modal)`
  .modal-content {
    background-color: var(--pallete-darker);
    color: var(--white);
    border-radius: 10px;
    border: 1px solid var(--pallete-lighter);
  }

  .modal-body {
    padding-bottom: 40px;
  }

  .modal-header {
    font-size: 2rem;
    font-weight: bold;
    border-bottom: 0;

    .close {
      color: var(--white);
    }
  }
`;
