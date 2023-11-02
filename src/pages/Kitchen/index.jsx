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
  const [requests, setRequests] = useState([]);
  const [preparing, setPreparing] = useState([]);
  const [ready, setReady] = useState([]);
  const Header = useContext(MenuHeader);
  const { setSelected } = useContext(DataFood);

  useEffect(() => {
    setSelected('Cozinha');
    axios.get(`${DATABASE_URL}/kitchen`)
      .then((res) => setRequests(res.data))
      .catch((err) => toast.error(err.response.data.message));
  }, []);

  useEffect(() => {
    findFoodInKitchen();
  }, [requests]);

  async function findFoodInKitchen() {
    try {
      const foodsInPreparing = [];
      const foodsReadys = [];
      for (let i = 0; i < requests.length; i++) {
        const element = requests[i];
        if (element.preparation === 'PREPARING') {
          const food = await axios.get(`${DATABASE_URL}/kitchen/${element.foodId}`);
          foodsInPreparing.push(food.data);
        } else if (element.preparation === 'READY') {
          const food = await axios.get(`${DATABASE_URL}/kitchen/${element.foodId}`);
          foodsReadys.push(food.data);
        }
      }
      setPreparing(foodsInPreparing);
      setReady(foodsReadys);
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
          <Preparing preparing={preparing} requests={requests} />
        </PreparingReady>
        <Line />
        <PreparingReady>
          <h1>Pronto:</h1>
          <Ready ready={ready} requests={requests} />
        </PreparingReady>

        <ToastContainer />
      </Container>
    </>
  );
}
