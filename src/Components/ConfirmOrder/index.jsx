/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-bind */
import { IoMdAdd } from 'react-icons/io';
import { GrFormSubtract } from 'react-icons/gr';
import { useContext, useState } from 'react';
import OptionsAdditional from '../Additional';
import InfosRequest from '../ResumeInCheck';
import DataFood from '../../Context/DataFood';
import {
  AddCar, AddSub, Buttons, Continue, Count, Obs, Order, Overlay, Revision,
} from './styled';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function ConfirmOrder(props) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [totalAdds, setTotalAdds] = useState([]);
  const { current, setCurrent } = useContext(DataFood);
  const navigate = useNavigate();

  const adds = [
    { name: 'Bacon', price: 100, qnt: '10g' },
    { name: 'Cheddar', price: 100, qnt: '10g' },
    { name: 'Molho', price: 100, qnt: '10g' },
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

  async function dataRequest(e) {
    props.setObservation('');
    e.preventDefault();
    setCurrent(1);
    const car = [...props.productInCar, {
      ...props.product, totalAdds, current, observation: props.observation,
    }];
    props.setProductInCar(car);
    props.setDisplay(false);
    setSelectedOptions([]);
  }

  async function continueRequest(e) {
    await dataRequest(e);
  }

  async function finishRequest(e) {
    await dataRequest(e);
    navigate('/payment');
  }

  return (
    <Overlay display={props.display}>
      <Order>
        <h2>Revise seu pedido</h2>
        <AiOutlineClose
          onClick={() => {
            props.setSelectFood(false);
            setSelectedOptions([]);
            props.setCheckFood(props.checkFood.filter((item) => item !== props.product.id));
          }}
        />
        <div>
          <Revision>
            <img src={props.product.image} alt={props.product.image} />
            <div>
              <h2>{props.product.name}</h2>
              <p>{props.product.description}</p>
              <Count>
                <AddSub onClick={() => alterCurrent('sub')}><GrFormSubtract /></AddSub>
                {current}
                <AddSub onClick={() => alterCurrent('add')}><IoMdAdd /></AddSub>
              </Count>
            </div>
            <h2>{`R$${(props.product.price / 100).toFixed(2)}`}</h2>
          </Revision>
        </div>

        <OptionsAdditional
          adds={adds}
          setTotalAdds={setTotalAdds}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />

        <Obs>
          <h2>Observações</h2>
          <textarea onChange={(e) => props.setObservation(e.target.value)} value={props.observation} placeholder="Adicione uma observação ao pedido" />
        </Obs>

        <InfosRequest product={props.product} totalAdds={totalAdds} />

        <Buttons>
          <Continue onClick={(e) => continueRequest(e)}>Continuar adicionando</Continue>
          <AddCar onClick={finishRequest}>Finalizar Pedido</AddCar>
        </Buttons>
      </Order>
    </Overlay>
  );
}
