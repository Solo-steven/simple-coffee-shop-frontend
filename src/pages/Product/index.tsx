import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/reducer";
import * as ActionsCreateor from "../../app/action/createor"; 
import { useParams } from "react-router-dom";
import { Container, Item } from "../../common/Grid";
import { PrimaryButton, SecondaryButton, InputButton } from "../../common/Button";
import { Select } from "../../common/Select";
import { 
    ProductRoot, 
    ProductImg, 
    ProductBody,
    ProductName, 
    ProductPrice, 
    ProductNumber,
    ProductSpecification,
    ProductButtonGroup, 
    ProductTextContent, 
    ProductTextTitle 
} from "./style";
import { product } from "../../app/action/type";

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
            <Container spacing={0}>
                <Item size={7}>
                    <ProductImg src={product.imgUrl}></ProductImg>
                </Item>
                <Item size={5}>
                    <ProductBody>
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
                        <ProductSpecification>
                            <Select>
                                {product.specification.map((specification, index) => {
                                    return <option value={specification}>{`${specification} (${product.price[index]})`}</option>
                                })}
                            </Select>
                        </ProductSpecification>
                        <ProductNumber>
                            <InputButton value={1} onChange={(index) => {}}/>
                        </ProductNumber>
                        <ProductButtonGroup>
                            <PrimaryButton>{"直接購買"}</PrimaryButton>
                            <SecondaryButton>{"加入購物車"}</SecondaryButton>
                        </ProductButtonGroup>
                        <ProductTextTitle>
                            {"運送方法"}
                        </ProductTextTitle>
                        <ProductTextContent>
                            {product.payway.reduce((preVal, curVal) => preVal + "、"+ curVal )}
                        </ProductTextContent>
                        <ProductTextTitle>
                            {"付款方法"}
                        </ProductTextTitle>
                        <ProductTextContent>
                            {product.deliverWay.reduce((preVal, curVal) => preVal + "、"+ curVal )}
                        </ProductTextContent>
                    </ProductBody>
                </Item>
            </Container>
        </ProductRoot>
    );
};

export default Product;