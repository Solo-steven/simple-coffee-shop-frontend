import styled from "@emotion/styled/macro";

export const SecondaryButton = styled.button`
    border: none;
    background: #DF5249;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    color: #FFFFFF;
    border-radius: 10px;
    padding: 12px 30px;
    cursor: pointer;
    &:active {
        box-shadow: 0px 0px 2px 1px #df5349a0;
    }
`;

export default SecondaryButton;