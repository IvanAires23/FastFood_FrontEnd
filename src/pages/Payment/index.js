/* eslint-disable react/react-in-jsx-scope */
import {BiSolidWalletAlt} from 'react-icons/bi';

export default function Payment(){
    return(
        <>
            <div>
                <div>
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
                </div>

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
            </div>
            <div>
                <div></div>
            </div>
        </>
    );
}