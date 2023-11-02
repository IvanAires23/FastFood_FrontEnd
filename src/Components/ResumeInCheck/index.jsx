/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect, useState } from 'react';
import DataFood from '../../Context/DataFood';
import { Resume, ResumeRequest, TotalPrice } from './styled';

export default function InfosRequest({ product, totalAdds }) {
  const [addsPrice, setAddsPrice] = useState(0);
  const { current } = useContext(DataFood);

  useEffect(() => {
    let count = 0;
    for (let i = 0; i < totalAdds.length; i++) {
      count += totalAdds[i].price;
    }
    setAddsPrice(count);
  }, [totalAdds]);

  return (
    <Resume>
      <ResumeRequest>
        <div>
          <h3>{`${current}x ${product.name}`}</h3>
          <h2>{`R$${(product.price / 100).toFixed(2)}`}</h2>
        </div>
        {totalAdds.map((t, i) => (
          <div key={i}>
            <h3>{`1x ${t.name}`}</h3>
            <h2>{`R$${(t.price / 100).toFixed(2)}`}</h2>
          </div>
        ))}
      </ResumeRequest>
      <TotalPrice>
        <p>Total do pedido</p>
        <h1>{`R$ ${(((current * product.price) / 100) + (addsPrice / 100)).toFixed(2)}`}</h1>
      </TotalPrice>
    </Resume>
  );
}
