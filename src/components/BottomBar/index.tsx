// BottomBar component to allow user to navigate between pages

import React from 'react';
import { Link } from 'react-router-dom';
import { IoRestaurant } from 'react-icons/io5';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';

import { Container } from './styles';

const BottomBar: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">
            <IoRestaurant size={25} />
            Restaurant
          </Link>
        </li>
        <li>
          <Link to="/picker">
            <GiPerspectiveDiceSixFacesRandom size={25} />
            Picker
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default BottomBar;
