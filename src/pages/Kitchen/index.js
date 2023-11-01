/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect, useState } from 'react';
import MenuHeader from '../../Context/Header';
import axios from 'axios';
import DATABASE_URL from '../../database';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import DataFood from '../../Context/DataFood';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { Box, Container, PreparingReady, ReadyOrCancel } from './styled';

export default function Kitchen(){

    const [requests, setRequests] = useState([]);
    const [preparing, setPreparing] = useState([]);
    const [ready, setReady] = useState([]);
    const [reload, setReload] = useState();
    const Header = useContext(MenuHeader);
    const {setSelected} = useContext(DataFood);

    useEffect(() => {
        setSelected('Cozinha');
        axios.get(`${DATABASE_URL}/kitchen`)
            .then(res => setRequests(res.data))
            .catch(err => toast.error(err.response.data.message));
        
    }, [reload]);

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
                }else{
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

    function updateKitchen(id){
        axios.post(`${DATABASE_URL}/kitchen/ready`, { id })
            .then(() => setReload(reload ? false : true))
            .catch(err => toast.error(err.response.data.message));
    }

    function deleteKitchen(id){
        axios.post(`${DATABASE_URL}/kitchen/delete`, { id })
            .then(() => setReload(reload ? false : true))
            .catch(err => toast.error(err.response.data.message));
    }
    
    return(
        <>
            {Header}
            <Container>
                <PreparingReady>
                    <h1>Preparando:</h1>
                    {preparing.length === 0 || requests.length === 0 ? 'Sem pedidos em preparação no momento' : preparing.map((r, i) => (
                        <Box key={i}>
                            <img src={r.image} />
                            <div>
                                <h1>{r.code + ' - ' + requests[i].nameUser}</h1>
                                <p>{requests[i].quant + 'x ' + r.name}</p>
                            </div>
                            <ReadyOrCancel>
                                <button><AiOutlineClose /></button>
                                <button onClick={() => updateKitchen(requests[i].id)}><AiOutlineCheck /></button>
                            </ReadyOrCancel>
                        </Box>
                    ))}
                </PreparingReady>
                <PreparingReady>
                    <h1>Pronto:</h1>
                    {ready.length === 0 || requests.length === 0  ? 'Sem pedidos prontos no momento' : ready.map((r, i) => (
                        <Box key={i}>
                            <img src={r.image} />
                            <div>
                                <h1>{r.code + ' - ' + requests[i].nameUser}</h1>
                                <p>{requests[i].quant + 'x ' + r.name}</p>
                            </div>
                            <ReadyOrCancel>
                                <button onClick={() => deleteKitchen(requests[i].id)}><AiOutlineClose /></button>
                            </ReadyOrCancel>
                        </Box>
                    ))}
                </PreparingReady>

                <ToastContainer />
            </Container>
        </>
    );
}
