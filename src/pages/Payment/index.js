/* eslint-disable react/react-in-jsx-scope */
import { useContext } from 'react';
import {BiSolidWalletAlt} from 'react-icons/bi';
import styled from 'styled-components';
import MenuHeader from '../../Context/Header';

export default function Payment(){

    const Header = useContext(MenuHeader);

    return(
        <>
            {Header}
            <Container>
                <PaymentDetails>
                    <ResumePayment>
                        <h1><BiSolidWalletAlt /> Pagamento</h1>
                        <div>
                            <h3>Resumo da compra</h3>
                            <div></div>
                            <div>
                                <div>
                                    <label>Nome do cliente</label>
                                    <input placeholder='Primeiro nome'/>
                                </div>
                                <div>
                                    <label>Code</label>
                                    <input />
                                </div>
                            </div>
                        </div>
                    </ResumePayment>

                    <div>
                        <div>
                            <h3>Selecione a forma de pagamento:</h3>
                            <div>

                            </div>
                            <div></div>
                            <div></div>
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
                    </div>
                </PaymentDetails>
                <div>
                    <div></div>
                </div>
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 40px;
    height: calc(100vh - 40px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
`;

const PaymentDetails = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: green;
    width: 100%;
    padding: 0 2%;
`;

const ResumePayment = styled.div`
    display: flex;
    flex-direction: column;
`;
