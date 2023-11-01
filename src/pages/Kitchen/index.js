import { useContext, useEffect, useState } from 'react';
import MenuHeader from '../../Context/Header';
import styled from 'styled-components';
import axios from 'axios';
import DATABASE_URL from '../../database';
import { toast } from 'react-toastify';

/* eslint-disable react/react-in-jsx-scope */
export default function Kitchen(){

    const [requests, setRequests] = useState([]);
    const [foodInKitchen, setFoodInKitchen] = useState([]);
    const Header = useContext(MenuHeader);

    useEffect(() => {
        axios.get(`${DATABASE_URL}/kitchen`)
            .then(res => setRequests(res.data))
            .catch(err => toast.error(err.response.data.message));
        
        getFoodInKitchen();
    }, []);

    async function getFoodInKitchen(){
        try {
            for (let i = 0; i < requests.length; i++) {
                const element = requests[i];
                const food = await axios.get(`${DATABASE_URL}/kitchen/${element.foodId}`);
                console.log(food);
                setFoodInKitchen([... foodInKitchen, food]);
            }
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }
    
    return(
        <>
            {Header}
            <Container>
                <div>
                    <h1>Preparando:</h1>
                    {foodInKitchen.map((r, i) => (
                        <Box key={i}>
                            
                        </Box>
                    ))}
                </div>
                <div>
                    <h1>Pronto:</h1>
                    <div></div>
                </div>
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
    >div{
        width: 50%;
        h1{
            font-size: 26px;
            font-weight: 700;
        }
    }
`;

const Box = styled.div`
    width: 60%;
    height: 80px;
    border: 1px solid #ccc;
`;
