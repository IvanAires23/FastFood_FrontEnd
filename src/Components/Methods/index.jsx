import { BiSolidWalletAlt } from 'react-icons/bi';
import { Method, NameMethod, Selected } from './styled';

export default function MethodsOfPayment({ formPayment, selectPayment, setSelectPayment }) {
  function handlePaymentClick(option) {
    if (selectPayment !== option) {
      setSelectPayment(option);
    }
  }

  return (
    <>
      {formPayment.map((m, i) => (
        <Method onClick={() => handlePaymentClick(m)} selectPayment={selectPayment === m} key={i}>
          <div>
            <NameMethod>
              <BiSolidWalletAlt />
              <h3>{m}</h3>
            </NameMethod>
            <Selected selectPayment={selectPayment === m} />
          </div>
        </Method>
      ))}

    </>
  );
}
