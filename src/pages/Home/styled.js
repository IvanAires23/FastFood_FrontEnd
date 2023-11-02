import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 2%;
    position: ${(props) => (props.selectFood && props.display ? 'fixed' : 'relative')};
    margin-top: 30px;
`;

export const Menu = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    @media (max-width: 700px){
        margin-top: 20px;
    }
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
        flex-wrap: wrap;
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
    margin-top: 10px;
    img{
        width: 60%;
    } 
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;
    margin-top: 15px;
    @media (max-width: 880px){
            justify-content: space-around;
            flex-direction: column;
            align-items: center;
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 50px;
        cursor: pointer;
        font-weight: 700;
        border-radius: 15px;
        margin-right: 45px;
        @media (max-width: 880px){
            margin-right: 0;
            width: 200px;
            margin-bottom: 15px;
        }
    }
    a{
        text-decoration: none;
    }
`;

export const Continue = styled.button`
    background-color: #FFFFFF;
    border: 1px solid ${(props) => (props.disabled ? '#ccc' : '#00b50c')};;
    color: ${(props) => (props.disabled ? '#ccc' : '#00b50c')};
`;

export const Finish = styled.button`
    background-color: ${(props) => (props.disabled ? '#ccc' : '#00b50c')};;
    border: 1px solid ${(props) => (props.disabled ? '#ccc' : '#00b50c')};; 
    color: #FFFFFF;
`;
