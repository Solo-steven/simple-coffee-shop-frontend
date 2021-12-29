import styled from "@emotion/styled/macro";

export const FooterRoot = styled.div`
    width: 100%;
    background-color: #0E1D09;
`;
export const FooterBody = styled.div`
    padding: 3% 15%;
`;
export const FooterText = styled.div`
    color: #FFFFFF;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const FooterIcons = styled.div`
    margin-top: 15px ;
    display: flex;
    justify-content: center;
    align-items: center;
    & > *:first-child {
        margin-right: 12px;
    }
    & > svg {
        width: 25px;
        height: 25px;
        color: #FFFFFF;
    }
`;