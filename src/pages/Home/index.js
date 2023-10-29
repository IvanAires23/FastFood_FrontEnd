import { useEffect, useState } from "react"
import styled from "styled-components"

export default function Home() {

    const [food, setFood] = useState()

    const category = [
        { name: "Combos", image: "https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=828&q=75" },
        { name: "Acompanhamentos", image: "https://acdn.mitiendanube.com/stores/690/117/products/batatablacknovo01-com-batata1-1b7acadeecc786836815623317173381-640-0.webp" },
        { name: "Bebidas", image: "https://tb0932.vtexassets.com/arquivos/ids/165092-1600-auto?v=638131052363530000&width=1600&height=auto&aspect=true" },
        { name: "Sobremesas", image: "https://img.freepik.com/fotos-premium/uma-sobremesa-com-uma-colher-marrom-em-um-prato-com-fundo-branco_391229-6166.jpg?w=826" }
    ]
    return (
        <Container>
            <Search>
                <h1>Seja bem vindo!</h1>
                <input placeholder="O que você procura?" />
            </Search>

            <Categories>
                <h2>Categorias</h2>
                <p>Navegue por categoria</p>
                <div>
                    {category.map(c => (
                        <Box key={c.name}>
                            <img src={c.image} />
                            <p>{c.name}</p>
                        </Box>
                    ))}
                </div>
            </Categories>

            <Foods>
                <ContainerFood>
                    <BoxFood>
                        <div></div>
                    </BoxFood>
                    <BoxFood>
                        <div></div>
                    </BoxFood>
                    <BoxFood>
                        <div></div>
                    </BoxFood>
                    <BoxFood>
                        <div></div>
                    </BoxFood>
                </ContainerFood>
                <ContainerFood>
                    <BoxFood>
                        <div></div>
                    </BoxFood>
                    <BoxFood>
                        <div></div>
                    </BoxFood>
                    <BoxFood>
                        <div></div>
                    </BoxFood>
                    <BoxFood>
                        <div></div>
                    </BoxFood>
                </ContainerFood>
                <ContainerFood>
                    <BoxFood>
                        <div></div>
                    </BoxFood>
                    <BoxFood>
                        <div></div>
                    </BoxFood>
                    <BoxFood>
                        <div></div>
                    </BoxFood>
                    <BoxFood>
                        <div></div>
                    </BoxFood>
                </ContainerFood>
                <ContainerFood>
                    <BoxFood>
                        <div></div>
                    </BoxFood>
                    <BoxFood>
                        <div></div>
                    </BoxFood>
                    <BoxFood>
                        <div></div>
                    </BoxFood>
                    <BoxFood>
                        <div></div>
                    </BoxFood>
                </ContainerFood>
            </Foods>

            <Check>

            </Check>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    padding: 2%;
`

const Search = styled.div`
    height: 70px;
    margin-bottom: 40px;
    h1{
        font-weight: 700;
        font-size: 30px;
    }
    input{
        margin: 10px 0;
        background-color: #e8e6e6;
        border: 0;
        outline: 0;
        width: 280px;
        height: 30px;
        padding-left: 10px;
    }
`

const Categories = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    h2{
        font-weight: 700;
    }
    p{
        font-weight: 100;
        margin-bottom: 10px;
    }
    >div{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
`

const Foods = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Check = styled.div``

const Box = styled.div`
    width: 220px;
    height: 160px;
    box-shadow: 1px 1px 10px #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    img{
        width: 100px;
    }
`

const ContainerFood = styled.div`
    width: 100%;
    height: 280px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`

const BoxFood = styled.div`
    width: 200px;
    height: 250px;
    background-image: url("https://i.pinimg.com/564x/ed/8b/88/ed8b88902879404786c7144acf631aad.jpg");
    background-size: contain;
    position: relative;
    div{
        background-color: #FFFFFF;
        width: 100%;
        height: 65%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top-right-radius: 30px;
        border-top-left-radius: 30px;

    }
`