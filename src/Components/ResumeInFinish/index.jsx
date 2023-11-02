/* eslint-disable react/react-in-jsx-scope */

import { useContext, useEffect, useState } from 'react';
import {
  FollowUps, Resume, ResumeRequest, TotalPrice,
} from './styled';
import DataFood from '../../Context/DataFood';

export default function InfosFinishs({ productInCar, openCar }) {
  const [totalAdds, setTotalAdds] = useState([]);
  const [countPrice, setCountPrice] = useState(0);
  const { setDataFoods } = useContext(DataFood);

  useEffect(() => {
    let count = 0;
    setTotalAdds(productInCar);
    for (let i = 0; i < productInCar.length; i++) {
      count += (productInCar[i].price * productInCar[i].current);
      for (let j = 0; j < productInCar[i].totalAdds.length; j++) {
        count += productInCar[i].totalAdds[j].price;
      }
    }
    setDataFoods(productInCar);
    setCountPrice(count);
  }, [productInCar]);

  return (
    <Resume display={openCar}>
      <ResumeRequest>
        {totalAdds.map((p, i) => (
          <>
            <div key={i}>
              <h3>{`${p.current}x ${p.name}`}</h3>
              <h2>{`R$${(p.price / 100).toFixed(2)}`}</h2>
            </div>
            <FollowUps key={i}>
              { p.totalAdds ? p.totalAdds.map((t, index) => (
                <div key={index}>
                  <p>{t.name}</p>
                  <p>{`R$${(t.price / 100).toFixed(2)}`}</p>
                </div>
              )) : '' }
            </FollowUps>
          </>
        ))}
      </ResumeRequest>
      <TotalPrice>
        <p>Total do pedido</p>
        <h1>{`R$ ${((countPrice / 100)).toFixed(2)}`}</h1>
      </TotalPrice>
    </Resume>
  );
}
