import { useContext, useEffect, useState } from 'react';
import MenuHeader from '../../Context/Header';
import { Container, Line, PreparingReady } from './styled';
import DataFood from '../../Context/DataFood';
import axios from 'axios';
import DATABASE_URL from '../../database';
import { toast } from 'react-toastify';

export default function Delivery() {
  const [preparing, setPreparing] = useState([]);
  const [ready, setReady] = useState([]);
  const Header = useContext(MenuHeader);
  const { setSelected } = useContext(DataFood);

  async function findFoodInKitchen() {
    try {
      const foodsInPreparing = await axios.get(`${DATABASE_URL}/kitchen/preparing`);
      const foodsReadys = await axios.get(`${DATABASE_URL}/kitchen/ready`);
      setPreparing(foodsInPreparing.data);
      setReady(foodsReadys.data);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  useEffect(() => {
    setSelected('Retirada');
    findFoodInKitchen();
  }, []);

  return (
    <>
      {Header}
      <Container>
        <PreparingReady>
          <h1>Preparando:</h1>
          {preparing.map((n, i) => (
            <h2 className="preparing" key={i}>{n.nameUser}</h2>
          ))}
        </PreparingReady>
        <Line />
        <PreparingReady>
          <h1>Pronto:</h1>
          {ready.map((n, i) => (
            <h2 className="ready" key={i}>{n.nameUser}</h2>
          ))}
        </PreparingReady>
      </Container>
    </>
  );
}
