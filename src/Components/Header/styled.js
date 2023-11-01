import styled from 'styled-components';

export const Header = styled.div`
    width: 100%;
    height: 40px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #0e9925;
    display: flex;
    justify-content: space-between;
    padding: 0 2%;
    align-items: center;
    color: #FFFFFF;
    font-weight: 700;
    ul{
        display: flex;
        width: 300px;
        justify-content: space-between;
        li{
            
        }
    }
`;

export const Li = styled.li`
    width: 30%;
    height: 25px;
    font-size: 18px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${props => props.selected ? '#0a731c': 'none'};
`;
