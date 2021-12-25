import styled from "@emotion/styled/macro";

export const DrawerRoot =  styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    background: #2929299d;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
export const DrawerDialog = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #F0F0F0;
    height: 100vh;
    max-width: 400px;
`;
export const DrawerHeader = styled.div`
    background-color: #292929;
    color: #FFFFFF;
    padding: 45px 145px;
    font-size: 32px;
    font-weight: 400;
    text-align: center;
`;
export const DrawerBody = styled.div`
    background-color: #F0F0F0;
    overflow: auto;
    padding: 30px ;
    flex: 1;
`;
export const DrawerItem = styled.div`
    margin-bottom: 45px;
`;
export const DrawerItemBody = styled.div`
    display: flex;
`
export const DrawerItemImg = styled.img`
    width: 120px;
    height: 79.88px;
`;
export const DrawerItemNameAndSpecification = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 0px 15px;
`;
export const DrawerItemName = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #292929;
`;
export const DrawerItemSpecification = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #292929;
    font-size: 14px;
`;
export const DrawerItemFooter = styled.div`
    margin: 35px auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const DrawerFooter = styled.div`
    border-top: 1px solid #292929a2;
    padding: 15px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const DrawerFooterTotle = styled.div`

`;
