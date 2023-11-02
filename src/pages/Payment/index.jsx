import React, { useContext, useEffect, useState } from 'react';
import { BiSolidWalletAlt } from 'react-icons/bi';
import MenuHeader from '../../Context/Header';
import DataFood from '../../Context/DataFood';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DATABASE_URL from '../../database';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {
  Buttons,
  Cancel,
  Code,
  Container,
  Finish, FormOfPayment,
  Name,
  NameAndCode,
  PurchaseInformation,
  ResumePayment,
  ResumeRequest,
  TotalPrice,
  Values,
} from './styled';
import MethodsOfPayment from '../../Components/Methods';
import Purchase from '../../Components/PurchaseInformation';
import ConfirmPayment from '../../Components/ConfirmPayment';

export default function Payment() {
  const [countPrice, setCountPrice] = useState(0);
  const [selectPayment, setSelectPayment] = useState();
  const [valueDelivered, setValueDelivered] = useState();
  const [display, setDisplay] = useState(false);
  const [username, setUsername] = useState();
  const Header = useContext(MenuHeader);
  const { dataFoods } = useContext(DataFood);
  const formPayment = ['Credito', 'Débito', 'Dinheiro'];

  useEffect(() => {
    let count = 0;
    for (let i = 0; i < dataFoods.length; i++) {
      count += (dataFoods[i].price * dataFoods[i].current);
      for (let j = 0; j < dataFoods[i].totalAdds.length; j++) {
        count += dataFoods[i].totalAdds[j].price;
      }
    }
    setValueDelivered(count);
    setCountPrice(count);
  }, [dataFoods]);

  async function finishRequest() {
    // eslint-disable-next-line no-restricted-globals
    scrollTo(0, 0);
    try {
      for (let i = 0; i < dataFoods.length; i++) {
        let payment;
        if (selectPayment === 'Dinheiro') payment = 'MONEY';
        else if (selectPayment === 'Débito') payment = 'DEBIT';
        else if (selectPayment === 'Credito') payment = 'CREDIT';
        const element = {
          money: 'countPrice',
          payment,
          name: username,
          foodId: dataFoods[i].id,
          change: ((valueDelivered * 100) - countPrice),
          observation: dataFoods[i].observation,
          quant: dataFoods[i].current,
        };
        await axios.post(`${DATABASE_URL}/kitchen`, element);
      }
      setDisplay(true);
    } catch (err) {
      if (err.response.status === 400) return toast.error('Insira seu nome e metodo de pagamento');
      toast.error('Algo inesperado aconteceu');
    }
  }

  return (
    <>
      {Header}
      <ConfirmPayment display={display} />
      <Container>
        <h1>
          <BiSolidWalletAlt />
          {' '}
          Pagamento
        </h1>
        <ResumePayment>
          <ResumeRequest>
            <h3>Resumo da compra</h3>
            <PurchaseInformation>
              <Purchase dataFoods={dataFoods} />
              <TotalPrice>
                <h3>Total do pedido</h3>
                <h2>{`R$${(countPrice / 100).toFixed(2)}`}</h2>
              </TotalPrice>
            </PurchaseInformation>
            <NameAndCode>
              <Name>
                <span>Nome do cliente</span>
                <input onChange={(e) => setUsername(e.target.value)} placeholder="Primeiro nome" />
              </Name>
              <Code>
                <span>Code</span>
                <input disabled placeholder={dataFoods.map((d) => d.code)} />
              </Code>
            </NameAndCode>
          </ResumeRequest>

          <FormOfPayment>
            <div>
              <h3>Selecione a forma de pagamento:</h3>
              <MethodsOfPayment
                formPayment={formPayment}
                selectPayment={selectPayment}
                setSelectPayment={setSelectPayment}
              />
            </div>
            <Values>
              <div>
                <span>Valor Entregue (R$)</span>
                <input
                  onChange={(e) => setValueDelivered(e.target.value)}
                  placeholder={(countPrice / 100).toFixed(2)}
                />
              </div>
              <div>
                <span>Troco (R$)</span>
                <input disabled placeholder={(valueDelivered * 100) - countPrice > 0 && valueDelivered !== countPrice ? `${(((valueDelivered * 100) - countPrice) / 100).toFixed(2)}` : '0.00'} />
              </div>
            </Values>
          </FormOfPayment>
        </ResumePayment>

        <Buttons>
          <Link to="/"><Cancel>Cancelar</Cancel></Link>
          <Finish onClick={() => finishRequest()}>Finalizar pedido</Finish>
        </Buttons>
      </Container>
      <ToastContainer />
    </>
  );
}
