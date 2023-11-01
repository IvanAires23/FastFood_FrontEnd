/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import { useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import { BoxFood, Check, Container, Datas } from './styled';

export default function ContainerFood({ checkFood, setCheckFood, setDisplay, category, setSelectFood }) {

    const [selectedOptions, setSelectedOptions] = useState([]);

    function select(product) {
        setDisplay(true);
        if (selectedOptions.includes(product.name)) {
            setSelectedOptions(selectedOptions.filter(item => item !== product.name));
        } else {
            setSelectedOptions([...selectedOptions, product.name]); 
        }

        if(!checkFood.includes(product.id)){
            setCheckFood([...checkFood, product.id]);
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
                        <Check display={checkFood.includes(c.id)}><BiCheck /></Check>
                    
                    </BoxFood>
                ))}
            </Container>
        </>
    );
}


