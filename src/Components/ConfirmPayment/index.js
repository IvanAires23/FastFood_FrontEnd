/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import DataFood from '../../Context/DataFood';
import { Exit, Overlay, Sucess } from './styled';
import { AiOutlineClose } from 'react-icons/ai';

export default function ConfirmPayment({ display }){

    const navigate = useNavigate();
    const { setSelected } = useContext(DataFood);

    function goKitchen(){
        setSelected('Cozinha');
        navigate('/kitchen');
    }

    return(
        <Overlay display={display}>
            <Sucess onClick={goKitchen}>
                <Exit><AiOutlineClose /></Exit>
                <img src='https://restmonterrey.com/assets/eating_together.svg'/>
                <h2>Pedido finalizado com sucesso!</h2>
                <p>O pedido foi encaminhado para a cozinha</p>
            </Sucess>
        </Overlay>
    );
}


