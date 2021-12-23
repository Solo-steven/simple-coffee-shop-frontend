import styled from "@emotion/styled/macro";

const Root = styled.div`
    display: inline-flex;
`;
const Button = styled.button`
    border: none;
    padding: 20px 10px;
    background-color: #FAFAFA;
    font-size: 22px;
    width: 42px;
    height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
const Input = styled.div`
    border-top: 1px solid #FAFAFA;
    border-bottom: 1px solid #FAFAFA;
    color:#FFFFFF;
    padding: 10px 27px;
    font-size: 14px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
`;

interface InputButtonProps {
    onChange: (newVal :number) => void;
    value: number;
    theme?: string;
};
export const InputButton = (props: InputButtonProps) => {
    return (
        <Root>
            <Button onClick={()=> {props.onChange(props.value - 1)}}>{"-"}</Button>
            <Input>{props.value}</Input>
            <Button onClick={()=> {props.onChange(props.value + 1)}}>{"+"}</Button>
        </Root>
    );
}