import styled from "@emotion/styled/macro";


export interface ItemProps {
    size?: string | number;
}

export const Item = styled.div`
    width: ${(props: ItemProps) => (!props.size ? "auto" : `${100 * (Number(props.size) / 12)}%`)};
`;


export interface ContainerProps {
    spacing?: number | string;
    alignItems?: string;
    justifyContent?: string;
}

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: ${(props: ContainerProps) => ( !!props.alignItems ? props.alignItems : "stretch")};
    justify-content: ${(props: ContainerProps) =>
        !!props.justifyContent ? props.justifyContent : "flex-start"};
    & ${Item} {
        padding: ${(props: ContainerProps) =>
            !props.spacing ? "0px" : `${4 * Number(props.spacing)}px`};
    }
`;

export default Item;