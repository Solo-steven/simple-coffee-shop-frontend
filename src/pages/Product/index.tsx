import React, { useState, useEffect, useCallback } from "react";
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

export const Product: React.FC = () => {
    /**  Temporary Form State Hooks.
     *   -> product number, product specification.
     */
    const [number, setNumber] = useState(0);
    const handleProductNumberChange = useCallback((newVal: number) => {
        if(newVal >= 0 ) setNumber(newVal);
    }, [setNumber]);
    const [specification, setSpecification] = useState("");
    /** Redux and React router hook for showing product data.
     * 
     */
    const { name, category } = useParams<{name: string; category: string}>();
    const dispatch = useDispatch();
    const product = useSelector((state: RootState) => {
            return state.products.filter(product => product.name === name)[0];
    });
    useEffect(() => {
        if(!product){
            dispatch(ActionsCreateor.request.fetchProducts(category));
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
                            <Select value={specification} onChange={(e)=> { setSpecification(e.target.value) }}>
                                <option value="" key="">{""}</option>
                                {product.specification.map((specification, index) => {
                                    return <option value={specification} key={specification}>{`${specification} (${product.price[index]})`}</option>
                                })}
                            </Select>
                        </ProductSpecification>
                        <ProductNumber>
                            <InputButton 
                                value={number} 
                                onChange={handleProductNumberChange}
                            />
                        </ProductNumber>
                        <ProductButtonGroup>
                            <PrimaryButton>{"直接購買"}</PrimaryButton>
                            <SecondaryButton 
                                onClick={ ()=>{ 
                                    console.log(number, specification);
                                    if(number !== 0 && specification !== ""){
                                        dispatch(ActionsCreateor.cart.addToCart(product.name, number, specification));
                                        dispatch(ActionsCreateor.modal.taggleModal(
                                            true, 
                                            "success", 
                                            "成功加入購物車", 
                                            `訂購${product.name}的${specification}共${number}件`
                                        ))
                                        setSpecification("");
                                        setNumber(0);
                                        return;
                                    }
                                    dispatch(ActionsCreateor.modal.taggleModal(true, "error", "錯誤", "數量和規格不可以為空的"))
                                }}
                            >
                                {"加入購物車"}
                            </SecondaryButton>
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