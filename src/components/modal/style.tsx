import styled from "@emotion/styled/macro";

export const ModalRoot =  styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    background: #2929299d;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ModalDialog = styled.div`
    border-radius: 15px;
    width: 100%;
    max-width: 480px;
    margin: auto;
    background-color: #FFFFFF;
`;
export const ModalTitle = styled.h2`
    padding: 15px 35px;
    font-size: 24px;
    font-weight: 400;
    border-bottom: 1px solid #29292988;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const ModalTitleIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    & > svg {
        color: ${(props: {color: string})=> props.color};
        width: 30px;
        height: 30px;
    }
`;
export const ModalBody = styled.div`
    padding: 15px 50px;
    font-size: 16px;
    color: #292929;
`;
export const ModalFooter = styled.div`
    border-top: 1px solid #29292968;
    padding: 15px 35px;
    display: flex;
    justify-content: flex-end;
`;
