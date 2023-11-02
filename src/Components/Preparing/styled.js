import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 3px 3px 6px #ccc;
    width: 70%;
    margin-top: 20px;
    @media (max-width: 1030px){
        width: 60%;
        height: 500px;
    }
    
`;

export const Obs = styled.div`
    width: 100%;
    margin-top: 5px;
    h2{
        font-size: 15px;
        font-weight: 700;
    }
    textarea{
        width: 100%;
        height: 100px;
        resize: none;
        padding: 2%;
    }
`;

export const Infos = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    padding: 0 2%;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    img{
        width: 90px;
        @media (max-width: 820px) {
            width: 70px;
        }
    }
    @media (max-width: 1030px){
        flex-direction: column;
        height: 85%;
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
        border-radius: 5px;
    }
    button:nth-child(1){
        background-color: rgba(245, 11, 2, 0.2);
        color: rgb(245, 11, 2)
    }
    @media (max-width: 1030px){
        width: 35%;
        justify-content: space-around;
        button{
            margin: 15px 0;
        }
    }
    @media (max-width: 820px){
        flex-direction: column;
        align-items: center;
        button{
            margin: 10px 0;
        }
    }
`;