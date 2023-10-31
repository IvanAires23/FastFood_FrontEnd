import styled from 'styled-components';

export const Additional = styled.div`
    display: flex;
    flex-direction: column;
    h2{
        font-size: 20px;
        font-weight: 700;
    }
    p{
        font-weight: 400;
        font-size: 15px;
        margin-bottom: 10px;
    }

    >div{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }
`;

export const CheckAdd = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
`;

export const Circle = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid #00b50c;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${props => props.selected ? '#00b50c' : ''};
`;
