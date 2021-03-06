import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/reducer";
import * as ActionsCreateor from "../../app/action/createor"; 
import { useParams, useHistory } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md"
import { Container, Item } from "../../common/Grid";
import { PrimaryButton, SecondaryButton, InputButton } from "../../common/Button";
import { Select } from "../../common/Select";
import { 
    ProductRoot, 
    ArrowGoBack,
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
    const { push, goBack }  = useHistory();
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
    const product = useSelector((root: RootState) => {
            return root.products.filter(product => product.name === name)[0];
    });
    const carts = useSelector((root: RootState) => root.carts.items)
    useEffect(() => {
        if(!product){
            dispatch(ActionsCreateor.request.fetchProducts(category));
        }
    }, [product, dispatch, category]);

    if(!product) 
        return <div>Loading</div>
    return (
        <ProductRoot>
            <ArrowGoBack onClick={()=> { goBack()}}>
                <MdOutlineArrowBackIos/>
            </ArrowGoBack>
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
                            <PrimaryButton
                                onClick={()=> {
                                      if(number !== 0 && specification !== "") {
                                        if(carts.filter(item => item.name === product.name && item.specification === specification).length > 0) {
                                            dispatch(ActionsCreateor.modal.taggleModal(
                                                true, 
                                                "error", 
                                                "????????????????????????", 
                                                `${specification}???${product.name}?????????????????????`
                                            ))   
                                            return;                                         
                                        }
                                        dispatch(ActionsCreateor.cart.addToCart(product.name, number, specification));
                                        push("/order");
                                        setSpecification("");
                                        setNumber(0);
                                        return;
                                    }
                                    dispatch(ActionsCreateor.modal.taggleModal(true, "error", "??????", "?????????????????????????????????"))
                                }}
                            >
                                {"????????????"}
                            </PrimaryButton>
                            <SecondaryButton 
                                onClick={ ()=>{ 
                                    if(number !== 0 && specification !== "") {
                                        if(carts.filter(item => item.name === product.name && item.specification === specification).length > 0) {
                                            dispatch(ActionsCreateor.modal.taggleModal(
                                                true, 
                                                "error", 
                                                "????????????????????????", 
                                                `${specification}???${product.name}?????????????????????`
                                            ))   
                                            return;                                         
                                        }
                                        dispatch(ActionsCreateor.cart.addToCart(product.name, number, specification));
                                        dispatch(ActionsCreateor.modal.taggleModal(
                                            true, 
                                            "success", 
                                            "?????????????????????", 
                                            `??????${product.name}???${specification}???${number}???`
                                        ))
                                        setSpecification("");
                                        setNumber(0);
                                        return;
                                    }
                                    dispatch(ActionsCreateor.modal.taggleModal(true, "error", "??????", "?????????????????????????????????"))
                                }}
                            >
                                {"???????????????"}
                            </SecondaryButton>
                        </ProductButtonGroup>
                        <ProductTextTitle>
                            {"????????????"}
                        </ProductTextTitle>
                        <ProductTextContent>
                            {product.payway.reduce((preVal, curVal) => preVal + "???"+ curVal )}
                        </ProductTextContent>
                        <ProductTextTitle>
                            {"????????????"}
                        </ProductTextTitle>
                        <ProductTextContent>
                            {product.deliverWay.reduce((preVal, curVal) => preVal + "???"+ curVal )}
                        </ProductTextContent>
                    </ProductBody>
                </Item>
            </Container>
        </ProductRoot>
    );
};

export default Product;