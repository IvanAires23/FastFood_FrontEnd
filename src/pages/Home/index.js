import styled from "styled-components"

export default function Home() {

    const category = [
        { name: "Combos", image: "https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=828&q=75" },
        { name: "Acompanhamentos", image: "https://www.sabornamesa.com.br/media/k2/items/cache/bf1e20a4462b71e3cc4cece2a8c96ac8_XL.jpg" },
        { name: "Bebidas", image: "https://www.sabornamesa.com.br/media/k2/items/cache/bf1e20a4462b71e3cc4cece2a8c96ac8_XL.jpg" },
        { name: "Sobremesas", image: "https://www.sabornamesa.com.br/media/k2/items/cache/bf1e20a4462b71e3cc4cece2a8c96ac8_XL.jpg" }
    ]

    const food = [

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
`

const Search = styled.div``

const Categories = styled.div`
    display:flex;
    flex-direction: column;
    div{
        display: flex;
    }
`

const Foods = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Check = styled.div``

const Box = styled.div`
    width: 200px;
    height: 200px;
    box-shadow: 1px 1px 5px #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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