import styled from "@emotion/styled/macro";

export const PrimaryButton = styled.button`
    border: none;
    background: #CB2E2E;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    color: #FFFFFF;
    border-radius: 10px;
    padding: 12px 30px;
    &:active {
        box-shadow: 0px 0px 2px 1px #CB2E2Ea0;
    }
`;

export default PrimaryButton;
