import React from "react";
import styled from "@emotion/styled/macro"; 
import { Link } from "react-router-dom";
import { MdPlayArrow } from "react-icons/md";

const CategoryItemRoot = styled.div`
    background-color: #FFFFFF00;
    padding: 10px;
    & > a {
        appearance: none;
        text-decoration: none;
        color: #FFFFFF;
        display: flex;
        padding: 8px 5px;
    }
    &:nth-child(2) {
        margin-top: 20px;
    }
`;
const CategoryItemIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 16px;
    min-height: 16px;
    margin-right: 8px;
`;
const CategoryItemText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface CategoryItemProps {
    active?: boolean;
    to: string;
    text: string;
};

const CategoryItem: React.FC<CategoryItemProps> = (props) => {
    return (
        <CategoryItemRoot>
            <Link to={props.to}>
                <CategoryItemIcon>
                    { props.active ? <MdPlayArrow/> : null }
                </CategoryItemIcon>
                <CategoryItemText>
                    {props.text}
                </CategoryItemText>
            </Link>
        </CategoryItemRoot>
    );
};

export default CategoryItem;