/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect, useState } from 'react';
import MenuHeader from '../../Context/Header';
import axios from 'axios';
import DATABASE_URL from '../../database';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import DataFood from '../../Context/DataFood';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { Box, Container, Infos, Line, Obs, PreparingReady, ReadyOrCancel } from './styled';

export default function Kitchen(){

    const [requests, setRequests] = useState([]);
    const [preparing, setPreparing] = useState([]);
    const [ready, setReady] = useState([]);
    const Header = useContext(MenuHeader);
    const {setSelected} = useContext(DataFood);

    useEffect(() => {
        setSelected('Cozinha');
        axios.get(`${DATABASE_URL}/kitchen`)
            .then(res => setRequests(res.data))
            .catch(err => toast.error(err.response.data.message));
    }, []);

    useEffect(() => {
        findFoodInKitchen();
    }, [requests]);

    async function findFoodInKitchen(){
        try {
            const foodsInPreparing = [];
            const foodsReadys = [];
            for (let i = 0; i < requests.length; i++) {
                const element = requests[i];
                if(element.preparation === 'PREPARING'){
                    const food = await axios.get(`${DATABASE_URL}/kitchen/${element.foodId}`);
                    foodsInPreparing.push(food.data);
                }else if(element.preparation === 'READY'){
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

    async function updateKitchen(food){
        for (let i = 0; i < requests.length; i++) {
            if(food.id === requests[i].foodId){
                await axios.post(`${DATABASE_URL}/kitchen/ready`, { id: requests[i].id })
                    .then(() => window.location.reload())
                    .catch(err => toast.error(err.response.data.message));
                return;
            }
        }
        
    }

    async function deleteKitchen(food){
        console.log(food);
        for (let i = 0; i < requests.length; i++) {
            if(food.id === requests[i].foodId){
                await axios.post(`${DATABASE_URL}/kitchen/delete`, { id: requests[i].id })
                    .then(() => window.location.reload())
                    .catch(err => toast.error(err.response.data.message));
                return;
            }
        }
    }
    
    return(
        <>
            {Header}
            <Container>
                <PreparingReady>
                    <h1>Preparando:</h1>
                    {preparing.length === 0 || requests.length === 0 ? 'Sem pedidos em preparação no momento' : preparing.map((p, i) => (
                        <Box key={i}>
                            <Infos>
                                <img src={p.image} />
                                <div>
                                    <h1>{p.code + ' - ' + requests[i].nameUser}</h1>
                                    <p>{requests[i].quant + 'x ' + p.name}</p>
                                </div>
                            
                                <ReadyOrCancel>
                                    <button onClick={() => deleteKitchen(p)}><AiOutlineClose /></button>
                                    <button onClick={() => updateKitchen(p)}><AiOutlineCheck /></button>
                                </ReadyOrCancel>
                            </Infos>
                            {requests[i].observation && <Obs>
                                <h2>Observações</h2>
                                <textarea placeholder={requests[i].observation} disabled />
                            </Obs> }
                        </Box>
                    ))}
                </PreparingReady>
                <Line />
                <PreparingReady>
                    <h1>Pronto:</h1>
                    {ready.length === 0 || requests.length === 0 ? 'Sem pedidos prontos no momento' : ready.map((r, i) => (
                        <Box key={i}>
                            <Infos>
                                <img src={r.image} />
                                <div>
                                    <h1>{r.code + ' - ' + requests[i].nameUser}</h1>
                                    <p>{requests[i].quant + 'x ' + r.name}</p>
                                </div>
                                <ReadyOrCancel>
                                    <button onClick={() => deleteKitchen(r)}><AiOutlineClose /></button>
                                </ReadyOrCancel>
                            </Infos>
                            {requests[i].observation && <Obs>
                                <h2>Observações</h2>
                                <textarea placeholder={requests[i].observation} disabled />
                            </Obs> }
                        </Box>
                    ))}
                </PreparingReady>

                <ToastContainer />
            </Container>
        </>
    );
}

