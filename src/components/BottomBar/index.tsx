import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const BottomBar: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/picker">Picker</Link>
        </li>
      </ul>
    </Container>
  );
};

export default BottomBar;
