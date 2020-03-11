import styled from 'styled-components';


export const CheckoutPageContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto;
   
    button{
          margin-left: auto;
          margin-top: 50px;
      }
`;

export const CheckoutHeaderContainer = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid darkgray;
        padding: 10px 0;
`;


export const HeaderBlock = styled.div`
        text-transform: capitalize;
        width: 23%;

        &:last-child {
            width: 8%;
        }
`;

export const TotalContainer = styled.div`
   margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;

export const TestWarningContainer = styled.div`
    color:red;
    text-align:center;
    margin-top: top 40px;
    font-size: 24px;
`;