/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DataFood from './Context/DataFood';
import { useState } from 'react';
import MenuHeader from './Context/Header';
import Top from './Components/Header';
import Payment from './pages/Payment';
import Kitchen from './pages/Kitchen';

function App() {

    const [current, setCurrent] = useState(1);
    const [dataFoods, setDataFoods] = useState([]);
    const [selected, setSelected] = useState('Pedidos');

    return (
        <BrowserRouter>
            <MenuHeader.Provider value={<Top selected={selected} setSelected={setSelected} />}>
                <DataFood.Provider value={{ current, setCurrent, dataFoods, setDataFoods, setSelected }}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/payment' element={<Payment />}/>
                        <Route path='/kitchen' element={<Kitchen />}/>
                    </Routes>
                </DataFood.Provider>
            </MenuHeader.Provider>
        </BrowserRouter>
    );
}

export default App;
