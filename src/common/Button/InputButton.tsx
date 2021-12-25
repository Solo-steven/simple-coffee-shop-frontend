import styled from "@emotion/styled/macro";

const Root = styled.div`
    display: inline-flex;
`;
const Button = styled.button`
    border: none;
    padding: 20px 10px;
    background-color: ${(props: {theme?: string}) => !props.theme ? "#FAFAFA" : props.theme === "dark" ? "#292929" : "#FAFAFA" };
    color: ${(props: {theme?: string}) => !props.theme ? "#292929" : props.theme === "dark" ? "#FAFAFA" : "#292929" };
    font-size: 22px;
    width: 42px;
    height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
const Input = styled.div`
    border-top: ${(props: {theme?: string}) => !props.theme ? "1px solid #FAFAFA" : props.theme === "dark" ? "1px solid #292929" : "1px solid #FAFAFA" };
    border-bottom: ${(props: {theme?: string}) => !props.theme ? "1px solid #FAFAFA" : props.theme === "dark" ? "1px solid #292929" : "1px solid #FAFAFA" };
    color: ${(props: {theme?: string}) => !props.theme ? "#FAFAFA" : props.theme === "dark" ? "#292929" : "#FAFAFA" };
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
            <Button theme={props.theme}  onClick={()=> {props.onChange(props.value - 1)}}>{"-"}</Button>
            <Input theme={props.theme}>{props.value}</Input>
            <Button theme={props.theme}  onClick={()=> {props.onChange(props.value + 1)}}>{"+"}</Button>
        </Root>
    );
}