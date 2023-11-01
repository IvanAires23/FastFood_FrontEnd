/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import { Overlay } from '../ConfirmOrder/styled';
import { useNavigate } from 'react-router-dom';

export default function ConfirmPayment({ display }){

    const navigate = useNavigate();

    return(
        <Overlay display={display}>
            <Sucess onClick={() => navigate('/kitchen')}>
                <Exit>X</Exit>
                <img src='https://restmonterrey.com/assets/eating_together.svg'/>
                <h2>Pedido finalizado com sucesso!</h2>
                <p>O pedido foi encaminhado para a cozinha</p>
            </Sucess>
        </Overlay>
    );
}

const Sucess = styled.div`
    transition: 300ms;
    width: 600px;
    height: 450px;
    border-radius: 10px;
    cursor: pointer;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    img{
        width: 250px;
    }
    h2{
        font-size: 30px;
        font-weight: 700;
    }
`;

const Exit = styled.div`
    position: absolute;
    top: 25%;
    left: 67%;
    font-weight: 700;
    color: #ccc;
`;
