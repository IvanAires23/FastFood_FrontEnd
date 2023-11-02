import styled from 'styled-components';

export const Page = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    width: 90%;
    height: calc(80vh - 40px);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 1%;
    h1{
        font-size: 29px;
        display: flex;
        align-items: center;
        font-weight: 700;
        margin-bottom: 40px;
        svg{
            font-size: 22px;
            color: green;
            margin-right: 25px;
        }
    }
`;

export const ResumePayment = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 2%;
    >div >h3{
        font-weight: 700;
        margin-bottom: 10px;
    }
    @media (max-width: 1000px){
        flex-direction: column;
        align-items: center;
    }
`;

export const ResumeRequest = styled.div`
    width: 50%;
    @media (max-width: 1000px){
        width: 100%;
        margin-bottom: 100px;
    }
`;

export const PurchaseInformation = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2%;
    border: 1px solid #ccc;
    div{
        display: flex;
        flex-direction: column;
        div{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            p{
                font-size: 15px;
            }
            h3, p{
                margin-bottom: 5px;
            }
        }
    }
`;

export const TotalPrice = styled.div`
    border-top: 2px dashed #ccc;
    padding: 2% 0;
    display: flex;
    flex-direction: row;
`;

export const NameAndCode = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    div{
        display: flex;
        flex-direction: column;
        height: 30px;
        margin-top: 15px;
        label{
            font-size: 20px;
            font-weight: 700;
            margin-right: 10px;
        }
    }
`;

export const Name = styled.div`
    input{
        width: 300px;
        background-color: #dedede;
        outline: 0;
        border: 0;
        padding: 2%;
    }
`;

export const Code = styled.div`
    input{
        width: 100px;
        background-color: #dedede;
        padding: 2%;
    }
`;
export const FormOfPayment = styled.div`
    width: 50%;
    padding-left: 4%;
    >div >h3{
        font-weight: 700;
    }
    @media (max-width: 1000px){
        width: 100%;
        margin-bottom: 100px;
    }
`;

export const Values = styled.div`
    display: flex;  
    width: 80%;
    div{
        display: flex;  
        flex-direction: column;
        label{
            font-weight: 700;
            font-size: 20px;
            margin-bottom: 10px;
        }
        input{
            width: 90%;
        }
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 300px;
    margin-top: 80px;
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 50px;
        cursor: pointer;
        font-weight: 700;
        margin-right: 45px;
        @media (max-width: 736px){
            margin-right: 0;
            width: 200px;
        }
    }
    a{
        text-decoration: none;
    }
    @media (max-width: 736px){
            justify-content: space-around;
    }
`;

export const Cancel = styled.button`  
    background-color: #FFFFFF;
    border: 1px solid ${props => props.disabled ? '#ccc' : '#00b50c'};;
    border-radius: 15px;
    color: ${props => props.disabled ? '#ccc' : '#00b50c'};
`;

export const Finish = styled.button`
    background-color: ${props => props.disabled ? '#ccc' : '#00b50c'};;
    border: 1px solid ${props => props.disabled ? '#ccc' : '#00b50c'};;
    border-radius: 15px;
    color: #FFFFFF;
    
`;

