import { useContext } from "react"
import styled from "styled-components"
import Current from "../Context/Current"

export default function InfosRequest({ product, totalAdds }) {

    const { current } = useContext(Current)

    return (
        <Resume>
            <ResumeRequest>
                <h3>{current + "x " + product.name}</h3>
                <h2>{"R$" + (product.price / 100).toFixed(2)}</h2>
            </ResumeRequest>
            <TotalPrice>
                <p>Total do pedido</p>
                <h1>{"R$ " + (((current * product.price) / 100) + (totalAdds / 100)).toFixed(2)}</h1>
            </TotalPrice>
        </Resume>
    )
}

const Resume = styled.div`
    border: 1px solid #00b50c;
    height: 150px;
    display: flex;
    flex-direction: column;
    padding-left: 4%;
`
const ResumeRequest = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
`

const TotalPrice = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 2px dashed #CCCCCC;
    padding-top: 1%;
`