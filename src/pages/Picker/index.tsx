import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';

import RestaurantCard from '../../components/RestaurantCard';
import { Container, BootstrapContainer } from './styles';
import { useRestaurant } from '../../context/RestaurantsContext';

// React -> criar o layout da pagina
// React -> criar botao para sortear um restaurante adicionado
// React -> mostrar modal com as informacoes do restaurante sorteado
// React -> adicionar restaurante sorteado na lista de sorteados
// React -> criar Context para termos tudo relacionado aos restaurantes sorteados ali dentro (metodo de sorteio, restaurantes sorteados)

// firebase -> criar outra referencia contendo os restaurantes sorteados
// firebase -> inserir restaurante sorteado na referencia

const Picker: React.FC = () => {
  const { draw } = useRestaurant();

  useEffect(() => {
    draw();
  }, [draw]);

  return (
    <Container>
      <h1>Picker</h1>
      <BootstrapContainer />
    </Container>
  );
};

export default Picker;
