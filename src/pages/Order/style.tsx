import styled from "@emotion/styled/macro";

export const OrderRoot = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: auto;
    padding: 80px;
`;
// ----------- Cart Styles ------------
export const OrderCartRoot = styled.div`
    margin-bottom: 40px;
`;
export const OrderCartHeader = styled.div`
    padding: 16px;
    font-size: 16px;
    font-weight: 400;
    color: #FFFFFF;
`;
export const OrderCartBody = styled.div`
    margin: 20px 0px;
    padding: 16px;
    font-size: 16px;
    font-weight: 400;
    color: #FFFFFF;
    border-top: 1px solid #FFFFFF;
    border-bottom: 1px solid #ffffff9b;
`;
export const OrderCartItem = styled.div`
    margin: 25px 0px;
`;
export const OrderCartItemImg = styled.img`
    width: 120px;
    height: 90px;
`;
export const OrderCartItemName = styled.p`
    margin-left: 40px;
    font-size: 20px;
    olor: #FFFFFF;
`;
export const OrderCartFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 16px 40px;
`;
export const OrderCartTotalText = styled.p`
    font-size: 20px;
    color: #FFFFFF;
    margin-right: 25px ;
`;
export const OrderCartTotalNumber = styled.p`
    font-size: 20px;
    color: #FFFFFF;
`;
// ------------ Dliver Info  ------------
export const OrderInfoRoot = styled.div`
    margin-bottom: 40px;
`;
export const OrderInfoHeader = styled.div`
    padding: 2% 5%;
    border-bottom: 1px solid #FFFFFF;
    font-size: 24px;
    color: #FFFFFF;
`;
export const OrderInfoBody = styled.div`
    display: flex;
    justify-content:center;
    padding: 2% 2%;
`;
export const OrderInfoInputBlock = styled.div`
    flex: 1;
    padding: 2% 3%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
// ---------- Buyer and Reciver Info -----------
export const OrderFormRoot = styled.div`
    display: flex;
`;
export const OrderFormBlock = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:nth-child(1) {
        padding-right: 5%;
    }
    &:nth-child(2) {
        padding-left: 5%;
    }
`;
export const OrderFormBlockHeader =  styled.div`
    width: 100%;
    padding: 2% 5%;
    border-bottom: 1px solid #FFFFFF;
    font-size: 24px;
    color: #FFFFFF;
`;
export const OrderFormBlockBody = styled.div`
    padding: 4%;
`;
export const OrderFormBlockInput = styled.div`
    padding: 16px;
`;
export const OrderCheckoutButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
`;