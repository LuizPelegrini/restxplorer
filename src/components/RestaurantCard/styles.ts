import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const ContainerCol = styled(Col)`
  padding: 1rem;
`;

export const RestaurantInfoContainer = styled.div`
  padding: 1rem;

  display: flex;
  border-radius: 0.5rem;
  background-color: var(--white);

  div {
    flex: 1;
  }
`;

export const BootstrapButton = styled(Button)`
  padding: 0;
  height: 30px;
  width: 30px;
`;
