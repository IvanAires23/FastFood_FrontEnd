/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Current from './Context/Current';
import { useState } from 'react';
import MenuHeader from './Context/Header';
import Top from './Components/Header';
import Payment from './pages/Payment';

function App() {

    const [current, setCurrent] = useState(1);

    return (
        <BrowserRouter>
            <MenuHeader.Provider value={<Top />}>
                <Current.Provider value={{ current, setCurrent }}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/payment' element={<Payment />}/>
                    </Routes>
                </Current.Provider>
            </MenuHeader.Provider>
        </BrowserRouter>
    );
}

export default App;
