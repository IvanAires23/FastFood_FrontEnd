/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect, useState } from 'react';
import {BiSolidWalletAlt} from 'react-icons/bi';
import styled from 'styled-components';
import MenuHeader from '../../Context/Header';
import DataFood from '../../Context/DataFood';
import { Link } from 'react-router-dom';

export default function Payment(){

    const [countPrice, setCountPrice] = useState(0);
    const [selectPayment, setSelectPayment] = useState();
    const [valueDelivered, setValueDelivered] = useState();
    const Header = useContext(MenuHeader);
    const {dataFoods} = useContext(DataFood);
    const formPayment = ['Credito', 'Débito', 'Dinheiro'];

    useEffect(() => {
        let count = 0;
        for(let i = 0; i < dataFoods.length; i++){
            count = count + (dataFoods[i].price * dataFoods[i].current);
            for(let j = 0; j < dataFoods[i].totalAdds.length; j++){
                count = count + dataFoods[i].totalAdds[j].price;
            }
        }
        setCountPrice(count);
    }, [dataFoods]); 

    function handlePaymentClick(option) {
        if (selectPayment !== option) {
            setSelectPayment(option);
        }
    }


    console.log(dataFoods);

    return(
        <>
            {Header}
            <Page>
                <Container>
                    <h1><BiSolidWalletAlt /> Pagamento</h1>
                    <ResumePayment>
                        <ResumeRequest>
                            <h3>Resumo da compra</h3>
                            <PurchaseInformation>
                                {dataFoods.map((d, i) => (
                                    <div key={i}>
                                        <div>
                                            <h3>{d.current + 'x ' + d.name}</h3>
                                            <h3>{'R$' + (d.price / 100).toFixed(2)}</h3>
                                        </div>
                                        {d.totalAdds.map((a, i) => (
                                            <div key={i}>
                                                <p>{a.name}</p>
                                                <p>{'R$' + (a.price / 100).toFixed(2)}</p>
                                            </div>
                                        )) }
                                    </div>
                                ))}
                                <TotalPrice>
                                    <h3>Total do pedido</h3>
                                    <h2>{'R$' + (countPrice / 100).toFixed(2)}</h2> 
                                </TotalPrice>
                            </PurchaseInformation>
                            <NameAndCode>
                                <Name>
                                    <label>Nome do cliente</label>
                                    <input placeholder='Primeiro nome'/>
                                </Name>
                                <Code>
                                    <label>Code</label>
                                    <input disabled placeholder={dataFoods.map(d => d.code)} />
                                </Code>
                            </NameAndCode>
                        </ResumeRequest>
                    
                        <FormOfPayment>
                            <div>
                                <h3>Selecione a forma de pagamento:</h3>
                                <Methods>
                                    {formPayment.map((m, i) => (
                                        <Method selectPayment={selectPayment === m } key={i}>
                                            <div>
                                                <NameMethod>
                                                    <BiSolidWalletAlt />
                                                    <h3>{m}</h3>
                                                </NameMethod>
                                                <Selected selectPayment={selectPayment === m } onClick={() => handlePaymentClick(m)}></Selected>
                                            </div>
                                        </Method>
                                    ))}
                                </Methods>
                            </div>
                            <Values>
                                <div>
                                    <label>Valor Entregue (R$)</label>
                                    <input onChange={e => setValueDelivered(e.target.value)} placeholder={(countPrice / 100).toFixed(2)}/>
                                </div>
                                <div>
                                    <label>Troco (R$)</label>
                                    <input disabled placeholder={(valueDelivered * 100) - countPrice > 0 ? `${(((valueDelivered * 100) - countPrice) / 100).toFixed(2)}`: '0.00'}/>
                                </div>
                            </Values>
                        </FormOfPayment>
                    </ResumePayment>
                    
                    <Buttons>
                        <Link to={'/'}><Cancel>Cancelar</Cancel></Link>
                        <Finish>Finalizar pedido</Finish>
                    </Buttons>
                </Container>
            </Page>
        </>
    );
}

const Page = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 90%;
    height: calc(80vh - 40px);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 1%;
    h1{
        font-size: 29px;
        display: flex;
        align-items: center;
        font-weight: 700;
        margin-bottom: 40px;
        svg{
            font-size: 22px;
            color: green;
            margin-right: 25px;
        }
    }
`;

const ResumePayment = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 2%;
    >div >h3{
        font-weight: 700;
        margin-bottom: 10px;
    }
`;

const ResumeRequest = styled.div`
    width: 50%;
`;

const PurchaseInformation = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2%;
    border: 1px solid #ccc;
    div{
        display: flex;
        flex-direction: column;
        div{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            p{
                font-size: 15px;
            }
            h3, p{
                margin-bottom: 5px;
            }
        }
    }
`;

const TotalPrice = styled.div`
    border-top: 2px dashed #ccc;
    padding: 2% 0;
    display: flex;
    flex-direction: row;
`;

const NameAndCode = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    div{
        display: flex;
        flex-direction: column;
        height: 30px;
        margin-top: 15px;
        label{
            font-size: 20px;
            font-weight: 700;
            margin-right: 10px;
        }
    }
`;

const Name = styled.div`
    input{
        width: 300px;
        background-color: #dedede;
        outline: 0;
        border: 0;
        padding: 2%;
    }
`;

const Code = styled.div`
    input{
        width: 100px;
        background-color: #dedede;
        padding: 2%;
    }
`;
const FormOfPayment = styled.div`
    width: 50%;
    padding-left: 4%;
    >div >h3{
        font-weight: 700;
    }
`;

const Methods = styled.div`
    width: 100%;
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 15px 0;
`;

const Method = styled.div`
    width: 80%;
    height: 80px;
    border: 1px solid ${props => props.selectPayment ? '#10b32c': '#ccc'};
    transition: 300ms;
    border-radius: 10px;
    display: flex;
    align-items: center;
    >div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 4%;
        height: 40px;
    }
`;

const NameMethod = styled.div`
    width: 200px;
    display: flex;
    svg{
        margin-right: 20px;
    }
`;

const Selected = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 1px solid #10b32c;
    transition: 300ms;
    background-color: ${props => props.selectPayment ? '#10b32c': '#FFFFF'};
    cursor: pointer;
`;

const Values = styled.div`
    display: flex;  
    width: 80%;
    div{
        display: flex;  
        flex-direction: column;
        label{
            font-weight: 700;
            font-size: 20px;
            margin-bottom: 10px;
        }
        input{
            width: 90%;
        }
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 300px;
    margin-top: 80px;
    a{
        text-decoration: none;
    }
`;

const Cancel = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 50px;
    cursor: pointer;
    background-color: #FFFFFF;
    border: 1px solid ${props => props.disabled ? '#ccc' : '#00b50c'};;
    border-radius: 15px;
    color: ${props => props.disabled ? '#ccc' : '#00b50c'};
    font-weight: 700;
`;

const Finish = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 50px;
    margin: 0 50px;
    background-color: ${props => props.disabled ? '#ccc' : '#00b50c'};;
    border: 1px solid ${props => props.disabled ? '#ccc' : '#00b50c'};;
    border-radius: 15px;
    cursor: pointer;
    color: #FFFFFF;
    font-weight: 700;
`;

