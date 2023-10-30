import styled from "styled-components"

export default function ContainerFood({ category, setSelectFood }) {

    function select(product) {
        return setSelectFood(product)
    }

    return (
        <>
            <Container>
                {category.map(c => (
                    <BoxFood onClick={() => select(c)}>
                        <img src={c.image} />
                        <div>
                            <h3>{c.name}</h3>
                            <p>{c.subDescription}</p>
                            <h2>R$ {(c.price / 100).toFixed(2)}</h2>
                        </div>
                    </BoxFood>
                ))}
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 280px;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
`

const BoxFood = styled.div`
    width: 200px;
    height: 250px;
    background-image: url("https://i.pinimg.com/564x/ed/8b/88/ed8b88902879404786c7144acf631aad.jpg");
    background-size: contain;
    position: relative;
    cursor: pointer;
    img{
        position: absolute;
        width: 65%;
        left: 50%;
        top: 30%;
        transform: translate(-50%, -50%);
        z-index: 2;
    }
    div{
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
    }
`