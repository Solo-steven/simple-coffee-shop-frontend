import styled from "@emotion/styled/macro";

interface PrimaryButtonProps {
    color?: string;
    size?: string;
    outline?: boolean;
}

export const PrimaryButton = styled.button`
    border: ${(props: PrimaryButtonProps) => !!props.outline ? "1px solid #CB2E2E": "none"};
    background: ${(props: PrimaryButtonProps) => !!props.outline ? "#FFFFFF00": "#CB2E2E"};
    border-radius: 10px;
    color: ${(props: PrimaryButtonProps) => !!props.outline ? "#CB2E2E": "#FFFFFF"};
    border-radius: 10px;
    padding: ${
        (props: PrimaryButtonProps) => 
            !props.size ? "12px 30px"
            :props.size === "small" ? "6px 15px" 
            :props.size === "large" ? "12px 30px" 
            : "12px 30px"
    };
    font-size:  ${
        (props: PrimaryButtonProps) => 
            !props.size ? "16px"
            :props.size === "small" ? "12px" 
            :props.size === "large" ? "16px" 
            : "16px"
    };
    &:active {
        box-shadow: 0px 0px 2px 1px #CB2E2Ea0;
    }
`;

export default PrimaryButton;
