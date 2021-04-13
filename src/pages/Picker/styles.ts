import styled from 'styled-components';
import { Container as ContainerBS, Button } from 'react-bootstrap';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

export const BootstrapContainer = styled(ContainerBS)`
  flex: 1;
  flex-basis: 0; // avoid container to expand beyond the screen height
  overflow-y: auto;
`;

export const PickRandomRestaurantButton = styled(Button)`
  border-radius: 50%;
  padding: 1.2rem;
`;

export const PickerSection = styled.div`
  /* background-color: red; */
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 -4px 5px #ccc;

  div {
    span {
      margin-right: 8px;
    }
  }
`;
