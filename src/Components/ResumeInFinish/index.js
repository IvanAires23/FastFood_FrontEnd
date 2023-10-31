/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import { FollowUps, Resume, ResumeRequest, TotalPrice } from './styled';

export default function InfosFinishs({ productInCar, openCar }) {
    const [totalAdds, setTotalAdds] = useState([]);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        let count = 0;
        setTotalAdds(productInCar);
        for(let i = 0; i < productInCar.length; i++){
            count = count + productInCar[i].price;
            for(let j = 0; j < productInCar[i].totalAdds.length; j++){
                count = count + productInCar[i].totalAdds[j].price;
            }
        }
        setCurrent(count);
    }, [productInCar]);   

    return (
        <Resume display={openCar}>
            <ResumeRequest>
                {totalAdds.map((p, i) => (
                    <>
                        <div key={i}>
                            <h3>{p.current + 'x ' + p.name}</h3>
                            <h2>{'R$' + (p.price / 100).toFixed(2)}</h2>
                        </div>
                        <FollowUps key={i}>
                            { p.totalAdds ? p.totalAdds.map((t, i) => (
                                <div key={i}>
                                    <p>{t.name}</p>
                                    <p>{'R$' + (t.price / 100).toFixed(2)}</p>
                                </div>
                            )) : '' }
                        </FollowUps>
                    </>
                ))}
            </ResumeRequest>    
            <TotalPrice>
                <p>Total do pedido</p>
                <h1>{'R$ ' + (current / 100).toFixed(2)}</h1>
            </TotalPrice>
        </Resume>
    );
}

