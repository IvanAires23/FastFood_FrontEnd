import styled from "styled-components"
import { IoMdAdd } from "react-icons/io"
import { GrFormSubtract } from "react-icons/gr"
import { useState } from "react"
import OptionsAdditional from "./Additional"
import InfosRequest from "./Resume"

export function ConfirmOrder({ product, setSelectFood }) {

    const [current, setCurrent] = useState(1)
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [totalAdds, setTotalAdds] = useState(0)

    function alterCurrent(op) {
        if (op !== "sub") {
            const add = current + 1
            setCurrent(add)
        } else if (op === "sub" && current > 1) {
            const sub = current - 1
            setCurrent(sub)
        }
    }

    return (
        <Overlay>
            <Order>
                <h2>Revise seu pedido</h2>
                <p onClick={() => setSelectFood(false)}>X</p>
                <div>
                    <Revision>
                        <img src={product.image} />
                        <div>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <Count>
                                <AddSub onClick={() => alterCurrent("sub")}><GrFormSubtract /></AddSub>
                                {current}
                                <AddSub onClick={() => alterCurrent("add")}><IoMdAdd /></AddSub>
                            </Count>
                        </div>
                    </Revision>
                    <h2>{"R$" + (product.price / 100).toFixed(2)}</h2>
                </div>

                <OptionsAdditional setTotalAdds={setTotalAdds} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />

                <Obs>
                    <h2>Observações</h2>
                    <textarea placeholder="Adicione uma observação ao pedido" />
                </Obs>

                <InfosRequest current={current} product={product} totalAdds={totalAdds} />

            </Order>
        </Overlay>
    )
}

const Overlay = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left:0;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    overflow: hidden;
    background-color: rgba(0,0,0,0.7);
`

const Order = styled.form`
    width: 65%;
    padding: 2%;
    background-color: #FFFFFF;
    position: relative;
    margin-top: 20px;
    z-index: 4;
    border-radius: 5px;
    overflow: scroll;
    max-height: 90vh;
    border: none;
    >div{
        display: flex;
        justify-content: space-around;
        margin-bottom: 30px
    }
    >p{
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
`

const Revision = styled.div`
    margin-top: 15px;
    width: 400px;
    display: flex;
    justify-content: space-between;
    img{
        width: 120px;
    }
    >div{
        width: 50%;
        h2{
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
        }
        p{
            font-size: 15px;
            font-size: 400;
            margin-bottom: 23px;
        }
    }
`

const Count = styled.div`
    width: 130px;
    height: 40px;
    background-color: white;
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const AddSub = styled.div`
    width: 33%;
    height: 40px;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    cursor: pointer;
`

const Obs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    h2{
        font-weight: 700;
    }
    textarea{
        width: 100%;
        height: 150px;
        background-color: #e8e8e8;
        border: 0;
        outline: 0;
        margin: 10px 0;
        padding: 2%;
        border-radius: 10px;
        resize: none;
    }
`