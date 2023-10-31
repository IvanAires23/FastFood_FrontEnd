/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import { useState } from 'react';
import styled from 'styled-components';
import { BiCheck } from 'react-icons/bi';

export default function ContainerFood({ checkFood, setCheckFood, setDisplay, category, setSelectFood }) {

    const [selectedOptions, setSelectedOptions] = useState([]);

    function select(product) {
        setDisplay(true);
        if (selectedOptions.includes(product.name)) {
            setSelectedOptions(selectedOptions.filter(item => item !== product.name));
        } else {
            setSelectedOptions([...selectedOptions, product.name]); 
        }

        if(checkFood.includes(product.name)){
            setCheckFood(checkFood.filter(item => item !== product.name));
        } else {
            setCheckFood([...checkFood, product.name]);
        }
        setSelectFood(product);
    }


    return (
        <>
            <Container height={category.length === 0 ? '0px' : '280px'}>
                {category.map((c, i) => (
                    <BoxFood key={i} onClick={() => select(c)}>
                        <img src={c.image} />
                        <Datas>
                            <h3>{c.name}</h3>
                            <p>{c.subDescription}</p>
                            <h2>R$ {(c.price / 100).toFixed(2)}</h2>
                        </Datas>
                        <Check display={selectedOptions.includes(c.name) && checkFood.includes(c.name)}><BiCheck /></Check>
                        
                    </BoxFood>
                ))}
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 100%;
    height: ${props => props.heights};
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const BoxFood = styled.div`
    width: 200px;
    height: 250px;
    position: relative;
    background-image: url("https://i.pinimg.com/564x/ed/8b/88/ed8b88902879404786c7144acf631aad.jpg");
    background-size: contain;
    position: relative;
    box-shadow: 2px 2px 5px #CCCCCC;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    img{
        position: absolute;
        width: 65%;
        left: 50%;
        top: 30%;
        transform: translate(-50%, -50%);
        z-index: 2;
    }
    
`;

const Datas = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    height: 65%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    h3{
        font-weight: 700;
        font-size: 20px;
    }
    p{
        font-size: 15px;
    }
    h2{
        font-size: 22px;
        font-weight: 700;
    }
`;

const Check = styled.div`
    position: absolute;
    display: ${props => props.display ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    font-size: 70px;
    color: #FFFFFF;
    background-color: rgba(0, 176, 79, 0.5);
    width: 100%;
    height: 100%;
    border-radius: 10px;
    top: 0;
    left: 0;
    z-index: 4;
`;
