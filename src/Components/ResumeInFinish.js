import { useContext } from "react"
import styled from "styled-components"
import Current from "../Context/Current"

export default function InfosFinishs({ productCar, openCar }) {
    const { current } = useContext(Current)
    return (
        <Resume display={openCar}>
            <ResumeRequest>
                <h3>{current + "x " + productCar.name}</h3>
                <h2>{"R$" + (productCar.price / 100).toFixed(2)}</h2>
            </ResumeRequest>
            <TotalPrice>
                <p>Total do pedido</p>
                <h1>{"R$ " + (((current * productCar.price) / 100) + (productCar.totalAdds / 100)).toFixed(2)}</h1>
            </TotalPrice>
        </Resume>
    )
}

const Resume = styled.div`
    border: 1px solid #00b50c;
    padding-bottom: 50px;
    display: ${props => props.display ? "block" : "none"};
`

const ResumeRequest = styled.div`
    display: flex;
    padding: 2% 0;
    padding-left: 2%;
    width: 90%;
    justify-content: space-between;
`

const TotalPrice = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 2px dashed #CCCCCC;
    padding-top: 1%;
    padding-left: 2%;
`