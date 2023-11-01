/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { BiSolidWalletAlt } from 'react-icons/bi';
import { Method, NameMethod, Selected } from './styled';

// eslint-disable-next-line react/prop-types
export default function MethodsOfPayment({ formPayment, selectPayment, setSelectPayment }){

    function handlePaymentClick(option) {
        if (selectPayment !== option) {
            setSelectPayment(option);
        }
    }

    return(
        <>
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
                                
        </>
    );
}