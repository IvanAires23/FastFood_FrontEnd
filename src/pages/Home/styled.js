import styled from 'styled-components';

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 300px;
    margin-top: 15px;
    a{
        text-decoration: none;
    }
`;

export const Continue = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 50px;
    margin-right: 30px;
    cursor: pointer;
    background-color: #FFFFFF;
    border: 1px solid ${props => props.disabled ? '#ccc' : '#00b50c'};;
    border-radius: 15px;
    color: ${props => props.disabled ? '#ccc' : '#00b50c'};
    font-weight: 700;
`;

export const AddCar = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 50px;
    margin-right: 50px;
    background-color: ${props => props.disabled ? '#ccc' : '#00b50c'};;
    border: 1px solid ${props => props.disabled ? '#ccc' : '#00b50c'};;
    border-radius: 15px;
    cursor: pointer;
    color: #FFFFFF;
    font-weight: 700;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 2%;
    position: ${props => props.selectFood && props.display ? 'fixed' : 'relative'};
    margin-top: 30px;
`;

export const Menu = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
`;

export const Search = styled.div`
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
        height: 35px;
        padding-left: 10px;
        border-radius: 5px;
    }
`;

export const Categories = styled.div`
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
`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Box = styled.div`
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
`;
