import styled from 'styled-components';
export const Container = styled.div`
    width: 100%;
    height: ${props => props.heights};
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
export const BoxFood = styled.div`
    width: 200px;
    height: 250px;
    position: relative;
    background-image: url('https://i.pinimg.com/564x/ed/8b/88/ed8b88902879404786c7144acf631aad.jpg');
    background-size: contain;
    position: relative;
    box-shadow: 2px 2px 5px #CCCCCC;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    img{
        position: absolute;
        width: 65%;
        left: 50%;
        top: 30%;
        transform: translate(-50%, -50%);
        z-index: 2;
    }
    
`;
export const Datas = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    height: 65%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    h3{
        font-weight: 700;
        font-size: 20px;
    }
    p{
        font-size: 15px;
    }
    h2{
        font-size: 22px;
        font-weight: 700;
    }
`;

export const Check = styled.div`
    position: absolute;
    display: ${props => props.display ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    font-size: 70px;
    color: #FFFFFF;
    background-color: rgba(0, 176, 79, 0.5);
    width: 100%;
    height: 100%;
    border-radius: 10px;
    top: 0;
    left: 0;
    z-index: 4;
`;