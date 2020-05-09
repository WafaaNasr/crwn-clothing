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

      @media screen and (max-width:800px) {
        width: 90%;
      }
`;

export const CheckoutHeaderContainer = styled.div`
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid darkgray;
`;


export const HeaderBlock = styled.div`
        text-transform: capitalize;
        width: 23%;

        &:last-child {
            width: 8%;
        }

        @media screen and (max-width:800px) {
            width:22%;

            &:last-child {
                 width: 12%;
         }
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