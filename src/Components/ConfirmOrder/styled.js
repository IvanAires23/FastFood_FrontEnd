import styled from 'styled-components';

export const Overlay = styled.div`
    position: absolute;
    display: ${props => props.display ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    left:0;
    top:10px;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    overflow: hidden;
    background-color: rgba(0,0,0,0.7);
`;

export const Order = styled.form`
    width: 65%;
    padding: 2%;
    background-color: #FFFFFF;
    position: relative;
    margin: 20px 0;
    z-index: 4;
    border-radius: 5px;
    overflow: scroll;
    max-height: 90vh;
    border: none;
    padding-bottom: 8%;
    transition: 500ms;
    >div{
        display: flex;
        justify-content: space-around;
        margin-bottom: 30px
    }
    >p{
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
    @media (max-width: 600px){
        width: 80%;
    }
`;

export const Revision = styled.div`
    margin-top: 15px;
    width: 400px;
    display: flex;
    justify-content: space-between;
    img{
        width: 120px;
    }
    >div{
        width: 50%;
        h2{
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
        }
        p{
            font-size: 15px;
            font-size: 400;
            margin-bottom: 23px;
        }
    }
`;

export const Count = styled.div`
    width: 130px;
    height: 40px;
    background-color: white;
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AddSub = styled.div`
    width: 33%;
    height: 40px;
    background-color: #00b50c;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    cursor: pointer;
`;

export const Obs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    h2{
        font-weight: 700;
    }
    textarea{
        width: 100%;
        height: 150px;
        background-color: #e8e8e8;
        border: 0;
        outline: 0;
        margin: 10px 0;
        padding: 2%;
        border-radius: 10px;
        resize: none;
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 0;
    margin-bottom: 300px;
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 50px;
        margin-right: 45px;
        cursor: pointer;
        font-weight: 700;
        border: 1px solid #00b50c;
        border-radius: 15px;
        @media (max-width: 980px){
            margin-right: 0;
            margin-bottom: 10px;
        }
    }
    @media (max-width: 980px){
        width: 100%;
        align-items: center;
        flex-direction: column;
    }
`;

export const Continue = styled.button`
    background-color: #FFFFFF;
    color: #00b50c;
`;

export const AddCar = styled.button`
    background-color: #00b50c;
    color: #FFFFFF;
`;