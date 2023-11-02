import styled from 'styled-components';

export const Overlay = styled.div`
    position: absolute;
    display: ${props => props.display ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    left:0;
    top:40px;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    overflow: hidden;
    background-color: rgba(0,0,0,0.7);
`;

export const Sucess = styled.div`
    position: relative;
    transition: 300ms;
    width: 600px;
    height: 450px;
    border-radius: 10px;
    cursor: pointer;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    img{
        width: 250px;
    }
    h2{
        font-size: 30px;
        font-weight: 700;
    }
`;

export const Exit = styled.div`
    position: absolute;
    top: 2%;
    right: 5%;
    font-weight: 700;
    color: #ccc;
`;