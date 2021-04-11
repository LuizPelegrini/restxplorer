import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';

import RestaurantCard from '../../components/RestaurantCard';
import {
  Container,
  BootstrapContainer,
  PickRandomRestaurantButton,
} from './styles';
import {
  RestaurantInfo,
  useRestaurant,
} from '../../context/RestaurantsContext';

// React -> criar o layout da pagina
// React -> criar botao para sortear um restaurante adicionado
// React -> mostrar modal com as informacoes do restaurante sorteado
// React -> adicionar restaurante sorteado na lista de sorteados
// React -> criar Context para termos tudo relacionado aos restaurantes sorteados ali dentro (metodo de sorteio, restaurantes sorteados)

// firebase -> criar outra referencia contendo os restaurantes sorteados
// firebase -> inserir restaurante sorteado na referencia

const Picker: React.FC = () => {
  const { restaurants } = useRestaurant();
  const [pickedRestaurants, setPickedRestaurants] = useState<RestaurantInfo[]>(
    [],
  );

  useEffect(() => {
    const temp = restaurants.filter(res => res.pickedState.timesPicked > 0);
    setPickedRestaurants(temp);
  }, [restaurants]);

  return (
    <Container>
      <h1>History</h1>
      <BootstrapContainer>
        <Row>
          {pickedRestaurants &&
            pickedRestaurants.map(res => (
              <RestaurantCard key={res.id} info={res}>
                {res.name}
              </RestaurantCard>
            ))}
        </Row>
      </BootstrapContainer>
      <PickRandomRestaurantButton>
        <GiPerspectiveDiceSixFacesRandom size={20} />
      </PickRandomRestaurantButton>
    </Container>
  );
};

export default Picker;
