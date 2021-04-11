import styled from 'styled-components';
import { Container as ContainerBS } from 'react-bootstrap';

export const Container = styled.div`
  position: relative; // to accomodate the add button at the bottom of the container

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
