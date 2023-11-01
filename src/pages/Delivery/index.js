/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect, useState } from 'react';
import MenuHeader from '../../Context/Header';
import { Container, Line, PreparingReady } from './styled';
import DataFood from '../../Context/DataFood';
import axios from 'axios';
import DATABASE_URL from '../../database';
import { toast } from 'react-toastify';

export default function Delivery(){

    const [requests, setRequests] = useState([]);
    const [preparing, setPreparing] = useState([]);
    const [ready, setReady] = useState([]);
    const Header = useContext(MenuHeader);
    const { setSelected } = useContext(DataFood);

    useEffect(() => {
        setSelected('Retirada');
        axios.get(`${DATABASE_URL}/kitchen`)
            .then(res => setRequests(res.data))
            .catch(err => toast.error(err.response.data.message));
    }, []);

    useEffect(() => findNamesInKitchen(), [requests]);

    function findNamesInKitchen(){
        const namesPreparing = [];
        const namesReady = [];
        for (let i = 0; i < requests.length; i++) {
            if(requests[i].preparation === 'PREPARING'){
                namesPreparing.push(requests[i].nameUser);
            } else {
                namesReady.push(requests[i].nameUser);
            }
        }

        setPreparing(namesPreparing);
        setReady(namesReady);
    }

    return(
        <>
            {Header}
            <Container>
                <PreparingReady>
                    <h1>Preparando:</h1>
                    {preparing.map((n, i) => (
                        <h2 className='preparing' key={i}>{n}</h2>
                    ))}
                </PreparingReady>
                <Line></Line>
                <PreparingReady>
                    <h1>Pronto:</h1>
                    {ready.map((n, i) => (
                        <h2 className='ready' key={i}>{n}</h2>
                    ))}
                </PreparingReady>
            </Container>
        </>
    );
}