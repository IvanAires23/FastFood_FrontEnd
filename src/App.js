import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Current from './Context/Current';
import { useState } from 'react';

function App() {

    const [current, setCurrent] = useState(1);

    return (
        <BrowserRouter>
            <Current.Provider value={{ current, setCurrent }}>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Current.Provider>
        </BrowserRouter>
    );
}

export default App;
