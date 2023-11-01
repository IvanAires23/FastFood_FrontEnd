/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import ContainerFood from '../../Components/Foods/index.js';
import { ConfirmOrder } from '../../Components/ConfirmOrder/index.js';
import InfosFinishs from '../../Components/ResumeInFinish/index.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Box, Buttons, Categories, Container, Continue, Finish, Menu, Products, Search } from './styled.js';
import MenuHeader from '../../Context/Header.js';
import { Link } from 'react-router-dom';
import DATABASE_URL from '../../database.js';

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
    const [observation, setObservation] = useState();
    const Header = useContext(MenuHeader);

    useEffect(() => {
        axios.get(`${DATABASE_URL}/food`)
            .then(res => {
                setFood(res.data);
            })
            .catch(err => alert(err.response.data));
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
        { name: 'Sobremesas', image: 'https://img.freepik.com/fotos-premium/uma-sobremesa-com-uma-colher-marrom-em-um-prato-com-fundo-branco_391229-6166.jpg?w=826' }
    ];

    function send(e) {
        if (e.key === 'Enter') {
            if (searchFood === '') {
                return axios.get(`${DATABASE_URL}/food`)
                    .then(res => {
                        setFood(res.data);
                    })
                    .catch(err => alert(err.response.data));
            }
            axios.post(`${DATABASE_URL}/food`, { code: searchFood })
                .then(res => setFood(res.data))
                .catch(() => {
                    toast.error('Não encontrado');
                });
        }
    }

    function reload(){
        window.location.reload();
    }

    function searchByCategory(category){
        if(category === 'Combos'){
            axios.post(`${DATABASE_URL}/food/category`, {category: 'COMBOS'})
                .then(res => setFood(res.data)).catch(() => toast.error('Não encontrado'));
        }
        else if(category === 'Acompanhamentos'){
            axios.post(`${DATABASE_URL}/food/category`, {category: 'FOLLOWUP'})
                .then(res => setFood(res.data)).catch(() => toast.error('Não encontrado'));
        }
        else if(category === 'Bebidas'){
            axios.post(`${DATABASE_URL}/food/category`, {category: 'DRINKS'})
                .then(res => setFood(res.data)).catch(() => toast.error('Não encontrado'));
        }
        else {
            axios.post(`${DATABASE_URL}/food/category`, {category: 'DESSERTS'})
                .then(res => setFood(res.data)).catch(() => toast.error('Não encontrado'));
        }
    }

    return (
        <>
            {Header}
            <Container selectFood={selectFood} display={display}>
                <Menu>
                    {selectFood ? <ConfirmOrder observation={observation} setObservation={setObservation} checkFood={checkFood} setCheckFood={setCheckFood} setProductInCar={setProductInCar} productInCar={productInCar} setDisplay={setDisplay} display={display} product={selectFood} setSelectFood={setSelectFood} /> : ''}
                    <Search>
                        <h1>Seja bem vindo!</h1>
                        <input onKeyDown={e => send(e)} onChange={e => setSearchFood(e.target.value)} placeholder='O que você procura?' />
                    </Search>

                    <Categories>
                        <h2>Categorias</h2>
                        <p>Navegue por categoria</p>
                        <div>
                            {category.map((c, i) => (
                                <Box onClick={() => searchByCategory(c.name)} key={i}>
                                    <img src={c.image} alt={c.image}/>
                                    <p>{c.name}</p>
                                </Box>
                            ))}
                        </div>
                    </Categories>

                    <Products>
                        <ContainerFood setCheckFood={setCheckFood} checkFood={checkFood} setDisplay={setDisplay} setSelectFood={setSelectFood} category={combos} />
                        <ContainerFood setCheckFood={setCheckFood} checkFood={checkFood} setDisplay={setDisplay} setSelectFood={setSelectFood} category={followUp} />
                        <ContainerFood setCheckFood={setCheckFood} checkFood={checkFood} setDisplay={setDisplay} setSelectFood={setSelectFood} category={drinks} />
                        <ContainerFood setCheckFood={setCheckFood} checkFood={checkFood} setDisplay={setDisplay} setSelectFood={setSelectFood} category={desserts} />
                    </Products>
                    <InfosFinishs observation={observation} openCar={productInCar.length > 0 ? true : false } productInCar={productInCar} />
                    <Buttons>
                        <Continue onClick={reload} disabled={!selectFood}>Cancelar</Continue>
                        <Link to={'/payment'}><Finish disabled={!selectFood}>Finalizar Pedido</Finish></Link>
                    </Buttons>
                </Menu>

                <ToastContainer />
            </Container>
        </>
    );
}
