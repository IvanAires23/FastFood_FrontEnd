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
            font-size: 60px;
            font-weight: 700;
            margin-bottom: 15px;
            @media (max-width: 782px){
                font-size: 35px;
            }
        }
        h2{
            font-size: 68px;
            font-weight: 700;
            @media (max-width: 782px){
                font-size: 38px;
            }
        }
        h2.preparing{
            color: #ccc;
        }
        h2.ready{
            color: green;
        }
`;

export const Line = styled.div`
    width: 5px;
    background-color: black;
    border-radius: 5px;
    margin-right: 15px;
`;
