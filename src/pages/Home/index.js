import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import ContainerFood from '../../Components/Foods.js'
import { ConfirmOrder } from '../../Components/ConfirmOrder.js'
import InfosFinishs from '../../Components/ResumeInFinish.js'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

export default function Home() {

    const [food, setFood] = useState([])
    const [searchFood, setSearchFood] = useState()
    const [combos, setCombos] = useState([])
    const [followUp, setFollowUp] = useState([])
    const [drinks, setDrinks] = useState([])
    const [desserts, setDesserts] = useState([])
    const [selectFood, setSelectFood] = useState(false)
    const [display, setDisplay] = useState(false)
    const [productCar, setProductCar] = useState({ name: '' })
    const [openCar, setOpenCar] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:4000/food')
            .then(res => {
                setFood(res.data)
            })
            .catch(err => alert(err.response.data))
    }, [])

    useEffect(() => {
        const arrayCombo = [];
        const arrayFollowUp = [];
        const arrayDrinks = [];
        const arrayDesserts = [];
        for (let i = 0; i < food.length; i++) {
            if (food[i].category === 'COMBOS') arrayCombo.push(food[i])
            else if (food[i].category === 'FOLLOWUP') arrayFollowUp.push(food[i])
            else if (food[i].category === 'DRINKS') arrayDrinks.push(food[i])
            else if (food[i].category === 'DESSERTS') arrayDesserts.push(food[i])
        }
        setCombos(arrayCombo)
        setFollowUp(arrayFollowUp)
        setDrinks(arrayDrinks)
        setDesserts(arrayDesserts)
    }, [food])

    const category = [
        { name: 'Combos', image: 'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=828&q=75' },
        { name: 'Acompanhamentos', image: 'https://www.pngmart.com/files/17/Potato-Fries-PNG-File.png' },
        { name: 'Bebidas', image: 'https://looklanches.com.br/wp-content/uploads/2020/09/2l.png' },
        { name: 'Sobremesas', image: 'https://img.freepik.com/fotos-premium/uma-sobremesa-com-uma-colher-marrom-em-um-prato-com-fundo-branco_391229-6166.jpg?w=826' }
    ]

    function send(e) {
        if (e.key === 'Enter') {
            if (searchFood === '') {
                return axios.get('http://localhost:4000/food')
                    .then(res => {
                        setFood(res.data)
                    })
                    .catch(err => alert(err.response.data))
            }
            axios.post('http://localhost:4000/food', { code: searchFood })
                .then(res => setFood(res.data))
                .catch(() => {
                    toast.error('Não encontrado')
                })
        }
    }

    return (
        <Container selectFood={selectFood} display={display}>
            <Menu>
                {selectFood ? <ConfirmOrder setDisplay={setDisplay} setOpenCar={setOpenCar} display={display} setProductCar={setProductCar} product={selectFood} setSelectFood={setSelectFood} /> : ''}
                <Search>
                    <h1>Seja bem vindo!</h1>
                    <input onKeyDown={e => send(e)} onChange={e => setSearchFood(e.target.value)} placeholder='O que você procura?' />
                </Search>

                <Categories>
                    <h2>Categorias</h2>
                    <p>Navegue por categoria</p>
                    <div>
                        {category.map((c, i) => (
                            <Box key={i}>
                                <img src={c.image} />
                                <p>{c.name}</p>
                            </Box>
                        ))}
                    </div>
                </Categories>

                <Products>
                    <ContainerFood setDisplay={setDisplay} setSelectFood={setSelectFood} category={combos} />
                    <ContainerFood setDisplay={setDisplay} setSelectFood={setSelectFood} category={followUp} />
                    <ContainerFood setDisplay={setDisplay} setSelectFood={setSelectFood} category={drinks} />
                    <ContainerFood setDisplay={setDisplay} setSelectFood={setSelectFood} category={desserts} />
                </Products>
                <InfosFinishs openCar={openCar} productCar={productCar} />

                <Buttons>
                    <Continue>Cancelar</Continue>
                    <AddCar>Finalizar Pedido</AddCar>
                </Buttons>
            </Menu>

            <ToastContainer />
        </Container>
    )
}

const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 300px;
    margin-top: 15px;
`

const Continue = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 50px;
    margin-right: 30px;
    cursor: pointer;
    background-color: #FFFFFF;
    border: 1px solid #00b50c;
    border-radius: 15px;
    color: #00b50c;
    font-weight: 700;
`

const AddCar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 50px;
    margin-right: 50px;
    background-color: #00b50c;
    border: 1px solid #00b50c;
    border-radius: 15px;
    cursor: pointer;
    color: #FFFFFF;
    font-weight: 700;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 2%;
    position: ${props => props.selectFood && props.display ? 'fixed' : 'relative'};
`

const Menu = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
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

const Products = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
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
