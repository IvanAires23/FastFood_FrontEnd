import styled from 'styled-components';

export const Methods = styled.div`
    width: 100%;
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 15px 0;
`;

export const Method = styled.div`
    width: 80%;
    height: 80px;
    border: 1px solid ${(props) => (props.selectPayment ? '#10b32c' : '#ccc')};
    transition: 300ms;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin: 15px 0;
    cursor: pointer;
    >div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 4%;
        height: 40px;
    }
    @media (max-width: 1000px){
        width: 100%;
    }
`;

export const NameMethod = styled.div`
    width: 200px;
    display: flex;
    svg{
        margin-right: 20px;
    }
`;

export const Selected = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 1px solid #10b32c;
    transition: 300ms;
    background-color: ${(props) => (props.selectPayment ? '#10b32c' : '#FFFFF')};
`;
