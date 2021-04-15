import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const ContainerCol = styled(Col)`
  padding: 1rem;
`;

export const RestaurantInfoContainer = styled.div`
  padding: 1rem;
  background-color: var(--pallete-darker);

  display: flex;
  border-radius: 0.5rem;

  div {
    flex: 1;

    h2 {
      margin-bottom: 1.3rem;
    }

    p {
      margin: 0;
    }
  }
`;

export const BootstrapButton = styled(Button)`
  padding: 0;
  height: 30px;
  width: 30px;
`;
