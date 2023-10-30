import { useEffect } from "react";
import styled from "styled-components"

export default function OptionsAdditional({ selectedOptions, setSelectedOptions, setTotalAdds }) {

    const adds = [
        { name: "Bacon", price: 100, qnt: "10g" },
        { name: "Cheddar", price: 100, qnt: "10g" },
        { name: "Molho", price: 100, qnt: "10g" }
    ]

    useEffect(() => {
        let priceAdds = 0;

        for (let i = 0; i < adds.length; i++) {
            if (selectedOptions.includes(adds[i].name)) {
                priceAdds += adds[i].price
            }
        }

        setTotalAdds(priceAdds)
    }, [selectedOptions])

    function handleOptionClick(option) {
        if (selectedOptions.includes(option.name)) {
            setSelectedOptions(selectedOptions.filter(item => item !== option.name));
        } else {
            setSelectedOptions([...selectedOptions, option.name]);
        }
    }

    return (
        <Additional>
            <h2>Adicionais</h2>
            <p>Selecione os ingredientes a mais que voce quer adicionar no seu lanche</p>
            {adds.map((a, i) => (
                <div key={i}>
                    <div>
                        <h3>{a.name}</h3>
                        <p>{a.qnt}</p>
                    </div>
                    <CheckAdd>
                        <h3>{(a.price / 100).toFixed(2)}</h3>
                        <Circle
                            onClick={() => handleOptionClick(a)}
                            selected={selectedOptions.includes(a.name)}
                        />
                    </CheckAdd>
                </div>
            ))}
        </Additional>
    )
}

const Additional = styled.div`
    display: flex;
    flex-direction: column;
    h2{
        font-size: 20px;
        font-weight: 700;
    }
    p{
        font-weight: 400;
        font-size: 15px;
        margin-bottom: 10px;
    }

    >div{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }
`

const CheckAdd = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
`

const Circle = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid #00b50c;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${props => props.selected ? "#00b50c" : ""};
`
