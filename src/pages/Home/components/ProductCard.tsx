import React from "react";
import styled from "@emotion/styled/macro";
import { Link, useParams } from "react-router-dom";

export const ProductCardRoot = styled.div`
    & > a {
        text-decoration: none;
        appearance: none;
    }
`;

export const ProductCardImg = styled.img`
    width: 100%;
    height: auto;
    cursor: pointer;
`;

export const ProductCardName = styled.h2`
    font-size: 16px;
    font-weight: 400;
    color: #FAFAFA;
    margin-top: 15px;
    text-align: right;
`;

export const ProductCardPrice = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #FAFAFA;
    margin-top: 15px;
    text-align: right;
`;

interface ProductCardProps {
    imgUrl: string;
    price: String;
    name: String;
}

const ProductCard: React.FC<ProductCardProps>= (props) => {
    const { category } = useParams<{category: string}>();
    return (
        <ProductCardRoot>
            <Link to={`/home/${category}/${props.name}`} >
                <ProductCardImg src={props.imgUrl} />
            </Link>
            <ProductCardName>{props.name}</ProductCardName>
            <ProductCardPrice>{props.price}</ProductCardPrice>
        </ProductCardRoot>
    );
}

export default ProductCard;
