import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/reducer";
import * as ActionsCreateor from "../../app/action/createor"; 
import { useParams } from "react-router-dom";
import { Container, Item } from "../../common/Grid"
import { ProductRoot, ProductImg, ProductName, ProductPrice } from "./style";

export const Product: React.FC = () => {
    const { name } = useParams<{name: string; category: string}>();
    const dispatch = useDispatch();
    const product = useSelector((state: RootState) => {
            return state.products.filter(product => product.name === name)[0];
    });
    useEffect(() => {
        if(!product){
            dispatch(ActionsCreateor.request.fetchProducts());
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(!product) 
        return <div>Loading</div>
    return (
        <ProductRoot>
            Hi
            <Container spacing={0}>
                <Item size={7}>
                    <ProductImg src={product.imgUrl}></ProductImg>
                </Item>
                <Item size={5}>
                    <ProductName>
                        {product.name}
                    </ProductName>
                    {(()=> {
                        let minPrice = product.price[0], maxPrice= product.price[0];
                            for(const price of product.price){
                                if(price < minPrice) minPrice = price;
                                if(price > maxPrice) maxPrice = price;
                        }
                        return <ProductPrice>{`$ ${minPrice} ~ ${maxPrice}`}</ProductPrice>
                    })()}
                </Item>
            </Container>
        </ProductRoot>
    );
};

export default Product;