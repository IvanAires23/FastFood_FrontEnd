/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { IoMdAdd } from 'react-icons/io';
import { GrFormSubtract } from 'react-icons/gr';
import { useContext, useState } from 'react';
import OptionsAdditional from '../Additional';
import InfosRequest from '../ResumeInCheck';
import DataFood from '../../Context/DataFood';
import { AddCar, AddSub, Buttons, Continue, Count, Obs, Order, Overlay, Revision } from './styled';

export function ConfirmOrder({ checkFood, setCheckFood, setProductInCar, productInCar, setDisplay, display, product, setSelectFood }) {

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [totalAdds, setTotalAdds] = useState([]);
    const { current, setCurrent } = useContext(DataFood);

    const adds = [
        { name: 'Bacon', price: 100, qnt: '10g' },
        { name: 'Cheddar', price: 100, qnt: '10g' },
        { name: 'Molho', price: 100, qnt: '10g' }
    ];

    function alterCurrent(op) {
        if (op !== 'sub') {
            const add = current + 1;
            setCurrent(add);
        } else if (op === 'sub' && current > 1) {
            const sub = current - 1;
            setCurrent(sub);
        }
    }

    function finishRequest() {
        setCurrent(1);
        const car = [...productInCar, { ...product, totalAdds, current }];
        setProductInCar(car);
        setDisplay(false);
        setSelectedOptions([]);
    }

    return (
        <Overlay display={display}>
            <Order>
                <h2>Revise seu pedido</h2>
                <p onClick={() => {setSelectFood(false); setSelectedOptions([]); setCheckFood(checkFood.filter(item => item !== product.name));}}>X</p>
                <div>
                    <Revision>
                        <img src={product.image} alt={product.image} />
                        <div>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <Count>
                                <AddSub onClick={() => alterCurrent('sub')}><GrFormSubtract /></AddSub>
                                {current}
                                <AddSub onClick={() => alterCurrent('add')}><IoMdAdd /></AddSub>
                            </Count>
                        </div>
                    </Revision>
                    <h2>{'R$' + (product.price / 100).toFixed(2)}</h2>
                </div>

                <OptionsAdditional adds={adds} setTotalAdds={setTotalAdds} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />

                <Obs>
                    <h2>Observações</h2>
                    <textarea placeholder="Adicione uma observação ao pedido" />
                </Obs>

                <InfosRequest product={product} totalAdds={totalAdds} />

                <Buttons>
                    <Continue onClick={() => finishRequest()}>Continuar adicionando</Continue>
                    <AddCar onClick={() => finishRequest()} >Finalizar Pedido</AddCar>
                </Buttons>
            </Order>
        </Overlay>
    );
}

