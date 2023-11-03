/* eslint-disable no-use-before-define */
import { useContext, useEffect, useState } from 'react';
import MenuHeader from '../../Context/Header';
import axios from 'axios';
import DATABASE_URL from '../../database';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import DataFood from '../../Context/DataFood';
import { Container, Line, PreparingReady } from './styled';
import Preparing from '../../Components/Preparing';
import Ready from '../../Components/Ready';

export default function Kitchen() {
  const [preparing, setPreparing] = useState([]);
  const [ready, setReady] = useState([]);
  const [reload, setReload] = useState(true);
  const Header = useContext(MenuHeader);
  const { setSelected } = useContext(DataFood);

  useEffect(() => {
    setSelected('Cozinha');
    findFoodInKitchen();
  }, [reload]);

  async function findFoodInKitchen() {
    setReload(false);
    try {
      const foodsInPreparing = await axios.get(`${DATABASE_URL}/kitchen/preparing`);
      const foodsReadys = await axios.get(`${DATABASE_URL}/kitchen/ready`);
      setPreparing(foodsInPreparing.data);
      setReady(foodsReadys.data);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  return (
    <>
      {Header}
      <Container>
        <PreparingReady>
          <h1>Preparando:</h1>
          <Preparing
            setReload={setReload}
            preparing={preparing}
          />
        </PreparingReady>
        <Line />
        <PreparingReady>
          <h1>Pronto:</h1>
          <Ready
            setReload={setReload}
            ready={ready}
          />
        </PreparingReady>

        <ToastContainer />
      </Container>
    </>
  );
}
