/* eslint-disable react/jsx-no-constructed-context-values */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/Home';
import DataFood from './Context/DataFood';
import MenuHeader from './Context/Header';
import Top from './Components/Header';
import Payment from './pages/Payment';
import Kitchen from './pages/Kitchen';
import Delivery from './pages/Delivery';

function App() {
  const [current, setCurrent] = useState(1);
  const [dataFoods, setDataFoods] = useState([]);
  const [selected, setSelected] = useState('Pedidos');

  return (
    <BrowserRouter>
      <MenuHeader.Provider value={<Top selected={selected} setSelected={setSelected} />}>
        <DataFood.Provider value={{
          current, setCurrent, dataFoods, setDataFoods, setSelected,
        }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/kitchen" element={<Kitchen />} />
            <Route path="/delivery" element={<Delivery />} />
          </Routes>
        </DataFood.Provider>
      </MenuHeader.Provider>
    </BrowserRouter>
  );
}

export default App;
