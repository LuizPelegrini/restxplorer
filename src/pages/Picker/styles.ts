import styled from 'styled-components';
import {
  Container as ContainerBS,
  Button,
  ToggleButton,
} from 'react-bootstrap';

export const Container = styled.div`
  color: var(--white);
  flex: 1;
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 960px;
  margin: 0 auto;

  h1 {
    padding: 0.8rem 1rem;
    border-bottom: 1px solid var(--pallete-darker);
    margin: 0;
  }
`;

export const BootstrapContainer = styled(ContainerBS)`
  flex: 1;
  flex-basis: 0; // avoid container to expand beyond the screen height
  overflow-y: auto;
`;

export const PickRandomRestaurantButton = styled(Button)`
  border-radius: 50%;
  padding: 1.2rem;

  background-color: var(--pallete-lighter);
  border-color: transparent;

  &:hover,
  &:active,
  &:focus {
    background-color: var(--pallete-lighter) !important;
    border-color: transparent !important;
  }
`;

export const BoostrapToggleButton = styled(ToggleButton)`
  background-color: var(--pallete-lighter);
  border-color: transparent !important;

  &.active {
    background-color: var(--pallete-light) !important;
  }

  &:hover,
  &:active,
  &:focus {
    background-color: var(--pallete-light) !important;
  }
`;

export const PickerSection = styled.div`
  /* background-color: red; */
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 -4px 5px var(--pallete-darker);
  z-index: 1;

  div {
    display: flex;

    span {
      display: block;
      width: 50px;
      margin-right: 8px;
      font-size: 1.2rem;
    }

    .btn-group-toggle {
      align-self: center; // to avoid growing vertically
    }
  }
`;
