import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    height: 80vh;
    margin: 0 auto;
    margin-top: 70px;
    display: flex;
    justify-content: space-between;  
`;

export const PreparingReady = styled.div`
        width: 50%;
            h1{
            font-size: 21px;
            font-weight: 700;
            margin-bottom: 15px;
        }
`;

export const DivisionLine = styled.div`
    width: 10px;
    background-color: black;
    border-radius: 5px;
    margin-right: 15px;
`;

export const Box = styled.div`
    width: 70%;
    height: 80px;
    box-shadow: 3px 3px 6px #ccc;
    display: flex;
    padding: 0 2%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    img{
        width: 90px;
    }
`;

export const ReadyOrCancel = styled.div`
    display: flex;
    button{
        width: 30px;
        height: 30px;
        cursor: pointer;
        margin-left: 15px;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(14, 153, 30, 0.2);
        color: rgb(14, 153, 30);
        border: 0;
    }
    button:nth-child(1){
        background-color: rgba(245, 11, 2, 0.2);
        color: rgb(245, 11, 2)
    }
`;
