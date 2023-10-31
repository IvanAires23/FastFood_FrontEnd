import styled from 'styled-components';

export const Resume = styled.div`
    border: 1px solid #00b50c;
    height: 190px;
    display: flex;
    flex-direction: column;
    padding: 0 4%;
`;
export const ResumeRequest = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div{
        width: 90%;
        display: flex;
        justify-content: space-between;
    }
`;

export const TotalPrice = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 2px dashed #CCCCCC;
    padding-top: 1%;
`;