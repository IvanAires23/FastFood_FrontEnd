/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect, useState } from 'react';
import {BiSolidWalletAlt} from 'react-icons/bi';
import styled from 'styled-components';
import MenuHeader from '../../Context/Header';
import DataFood from '../../Context/DataFood';

export default function Payment(){

    const [countPrice, setCountPrice] = useState(0);
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
                                        <Method key={i}>

                                        </Method>
                                    ))}
                                </Methods>
                            </div>
                            <div>
                                <div>
                                    <label>Valor Entregue</label>
                                    <input placeholder='Primeiro nome'/>
                                </div>
                                <div>
                                    <label>Troco</label>
                                    <input />
                                </div>
                            </div>
                        </FormOfPayment>
                    </ResumePayment>
                    
                    <div>
                        <div></div>
                    </div>
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

const Methods = styled.div``;

const FormOfPayment = styled.div`
    >div >h3{
        font-weight: 700;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Method = styled.div`
    width: 90%;
    height: 50px;
    border: 1px solid #ccc;
`;
