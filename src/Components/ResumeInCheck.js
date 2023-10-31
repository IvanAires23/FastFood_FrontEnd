/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Current from '../Context/Current';

export default function InfosRequest({ product, totalAdds }) {

    const [addsPrice, setAddsPrice] = useState(0);
    const { current } = useContext(Current);

    useEffect(() => {
        let count = 0;
        for(let i = 0; i < totalAdds.length; i++){
            count += totalAdds[i].price;
        }
        setAddsPrice(count);
    }, [totalAdds]);

    return (
        <Resume>
            <ResumeRequest>
                <div>
                    <h3>{current + 'x ' + product.name}</h3>
                    <h2>{'R$' + (product.price / 100).toFixed(2)}</h2>
                </div>
                {totalAdds.map((t, i)=>(
                    <div key={i}>
                        <h3>{'1x ' + t.name}</h3>
                        <h2>{'R$' + (t.price / 100).toFixed(2)}</h2>
                    </div>
                ))}
            </ResumeRequest>
            <TotalPrice>
                <p>Total do pedido</p>
                <h1>{'R$ ' + (((current * product.price) / 100) + (addsPrice / 100)).toFixed(2)}</h1>
            </TotalPrice>
        </Resume>
    );
}

const Resume = styled.div`
    border: 1px solid #00b50c;
    height: 190px;
    display: flex;
    flex-direction: column;
    padding: 0 4%;
`;
const ResumeRequest = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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