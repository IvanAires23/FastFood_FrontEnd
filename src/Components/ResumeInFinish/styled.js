import styled from 'styled-components';

export const Resume = styled.div`
    border: 1px solid #00b50c;
    display: ${props => props.display ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    padding: 2% 4%;
    margin-top: 20px;
`;
export const ResumeRequest = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 1%;
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

export const FollowUps = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    p{
        font-size: 15px;
        padding: 0;
    }
`;
