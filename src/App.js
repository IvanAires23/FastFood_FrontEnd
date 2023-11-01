/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DataFood from './Context/DataFood';
import { useState } from 'react';
import MenuHeader from './Context/Header';
import Top from './Components/Header';
import Payment from './pages/Payment';

function App() {

    const [current, setCurrent] = useState(1);
    const [dataFoods, setDataFoods] = useState([]);

    return (
        <BrowserRouter>
            <MenuHeader.Provider value={<Top />}>
                <DataFood.Provider value={{ current, setCurrent, dataFoods, setDataFoods }}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/payment' element={<Payment />}/>
                    </Routes>
                </DataFood.Provider>
            </MenuHeader.Provider>
        </BrowserRouter>
    );
}

export default App;
