/* eslint-disable no-nested-ternary */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ContainerFood from '../../Components/Foods';
import InfosFinishs from '../../Components/ResumeInFinish';
import 'react-toastify/dist/ReactToastify.min.css';
import {
  Box, Buttons, Categories, Container, Continue, Finish, Menu, Products, Search,
} from './styled.js';
import MenuHeader from '../../Context/Header.js';
import { Link } from 'react-router-dom';
import DATABASE_URL from '../../database.js';
import ConfirmOrder from '../../Components/ConfirmOrder/index.jsx';

export default function Home() {
  const [selectFood, setSelectFood] = useState(false);
  const [food, setFood] = useState([]);
  const [searchFood, setSearchFood] = useState();
  const [combos, setCombos] = useState([]);
  const [followUp, setFollowUp] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [checkFood, setCheckFood] = useState([]);
  const [display, setDisplay] = useState(false);
  const [productInCar, setProductInCar] = useState([]);
  const [observation, setObservation] = useState('');
  const Header = useContext(MenuHeader);

  async function findAllFood() {
    try {
      const res = await axios.get(`${DATABASE_URL}/food`);
      setFood(res.data);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  useEffect(() => {
    findAllFood();
  }, []);

  useEffect(() => {
    const arrayCombo = [];
    const arrayFollowUp = [];
    const arrayDrinks = [];
    const arrayDesserts = [];
    for (let i = 0; i < food.length; i++) {
      if (food[i].category === 'COMBOS') arrayCombo.push(food[i]);
      else if (food[i].category === 'FOLLOWUP') arrayFollowUp.push(food[i]);
      else if (food[i].category === 'DRINKS') arrayDrinks.push(food[i]);
      else if (food[i].category === 'DESSERTS') arrayDesserts.push(food[i]);
    }
    setCombos(arrayCombo);
    setFollowUp(arrayFollowUp);
    setDrinks(arrayDrinks);
    setDesserts(arrayDesserts);
  }, [food]);

  const category = [
    { name: 'Combos', image: 'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=828&q=75' },
    { name: 'Acompanhamentos', image: 'https://www.pngmart.com/files/17/Potato-Fries-PNG-File.png' },
    { name: 'Bebidas', image: 'https://looklanches.com.br/wp-content/uploads/2020/09/2l.png' },
    { name: 'Sobremesas', image: 'https://img.freepik.com/fotos-premium/uma-sobremesa-com-uma-colher-marrom-em-um-prato-com-fundo-branco_391229-6166.jpg?w=826' },
  ];

  async function send(e) {
    try {
      if (searchFood === '') {
        const res = await axios.get(`${DATABASE_URL}/food`);
        setFood(res.data);
      } else if (e.key === 'Enter') {
        const res = await axios.post(`${DATABASE_URL}/food`, { code: searchFood });
        setFood(res.data);
      }
    } catch (err) {
      if (err.response.status === 404) return toast.error('Não encontrado');
      toast.error(err.response.data.message);
    }
  }

  function reload() {
    window.location.reload();
  }

  async function searchByCategory(_category) {
    try {
      if (_category === 'Combos') {
        const res = await axios.post(`${DATABASE_URL}/food/category`, { category: 'COMBOS' });
        setFood(res.data);
      } else if (_category === 'Acompanhamentos') {
        const res = await axios.post(`${DATABASE_URL}/food/category`, { category: 'FOLLOWUP' });
        setFood(res.data);
      } else if (_category === 'Bebidas') {
        const res = await axios.post(`${DATABASE_URL}/food/category`, { category: 'DRINKS' });
        setFood(res.data);
      } else {
        const res = await axios.post(`${DATABASE_URL}/food/category`, { category: 'DESSERTS' });
        setFood(res.data);
      }
    } catch (err) {
      toast.error('Não encontrado');
    }
  }

  return (
    <>
      {Header}
      <Container selectFood={selectFood} display={display}>
        <Menu>
          {selectFood && (
          <ConfirmOrder
            observation={observation}
            setObservation={setObservation}
            checkFood={checkFood}
            setCheckFood={setCheckFood}
            setProductInCar={setProductInCar}
            productInCar={productInCar}
            setDisplay={setDisplay}
            display={display}
            product={selectFood}
            setSelectFood={setSelectFood}
          />
          ) }
          <Search>
            <h1>Seja bem vindo!</h1>
            <input onKeyDown={(e) => send(e)} onChange={(e) => setSearchFood(e.target.value)} placeholder="O que você procura?" />
          </Search>

          <Categories>
            <h2>Categorias</h2>
            <p>Navegue por categoria</p>
            <div>
              {category.map((c, i) => (
                <Box key={i} onClick={() => searchByCategory(c.name)}>
                  <img src={c.image} alt={c.image} />
                  <p>{c.name}</p>
                </Box>
              ))}
            </div>
          </Categories>

          <Products>
            {category.map((c) => (
              <ContainerFood
                setCheckFood={setCheckFood}
                checkFood={checkFood}
                setDisplay={setDisplay}
                setSelectFood={setSelectFood}
                category={c.name === 'Combos'
                  ? combos : c.name === 'Acompanhamentos'
                    ? followUp : c.name === 'Bebidas'
                      ? drinks : desserts}
              />
            ))}
          </Products>
          <InfosFinishs
            observation={observation}
            openCar={productInCar.length > 0}
            productInCar={productInCar}
          />
          <Buttons>
            <Continue onClick={() => reload()} disabled={!selectFood}>Cancelar</Continue>
            <Link to="/payment"><Finish disabled={!selectFood}>Finalizar Pedido</Finish></Link>
          </Buttons>
        </Menu>

        <ToastContainer />
      </Container>
    </>
  );
}
