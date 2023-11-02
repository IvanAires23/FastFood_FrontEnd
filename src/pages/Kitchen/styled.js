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
        @media (max-width: 1030px){
            display: flex;
            flex-direction: column;
            align-items: center;
        }
`;

export const Line = styled.div`
    width: 5px;
    background-color: black;
    border-radius: 5px;
    margin-right: 15px;
`;


