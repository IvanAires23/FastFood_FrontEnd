/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import styled from 'styled-components';

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

    console.log(totalAdds);
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

const Resume = styled.div`
    border: 1px solid #00b50c;
    height: 190px;
    display: ${props => props.display ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    padding: 0 4%;
    margin-top: 20px;
`;
const ResumeRequest = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 1%;
    div{
        width: 90%;
        display: flex;
        justify-content: space-between;
    }
`;
const TotalPrice = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 2px dashed #CCCCCC;
    padding-top: 1%;
`;

const FollowUps = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    p{
        font-size: 15px;
        padding: 0;
    }
`;
