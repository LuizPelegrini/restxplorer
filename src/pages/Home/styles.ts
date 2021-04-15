import styled from 'styled-components';
import {
  Container as ContainerBS,
  Button,
  ToggleButton,
} from 'react-bootstrap';

export const Container = styled.div`
  position: relative; // to accomodate the add button at the bottom of the container
  color: var(--white);

  flex: 1;
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 960px;
  margin: 0 auto;

  .header {
    padding: 0.8rem 1rem;
    border-bottom: 2px solid var(--pallete-darker);
  }
`;

export const BootstrapContainer = styled(ContainerBS)`
  flex: 1;
  flex-basis: 0; // avoid container to expand beyond the screen height
  overflow-y: auto;
`;

export const AddRestaurantButton = styled(Button)`
  position: absolute;
  bottom: 1.4rem;
  right: 1.4rem;
  background-color: var(--pallete-lighter);
  border-color: transparent;

  border-radius: 50%;
  padding: 1.2rem;

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

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
