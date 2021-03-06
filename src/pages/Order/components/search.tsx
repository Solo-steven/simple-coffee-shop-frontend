import React, { useEffect } from"react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { RootState } from "../../../app/reducer";
import * as ActionsCreateor from "../../../app/action/createor";
import { Container, Item } from "../../../common/Grid";
import Input from "../../../common/Input";
import { 
    OrderRoot,
    // Style for Cart
    OrderCartRoot,
    OrderCartHeader,
    OrderCartBody,
    OrderCartItem,
    OrderCartItemImg,
    OrderCartItemName,
    OrderCartFooter,
    OrderCartTotalText,
    OrderCartTotalNumber,
    // Style for Info
    OrderInfoRoot,
    OrderInfoHeader,
    OrderInfoBody,
    OrderInfoInputBlock,
    // Style for Form 
    OrderFormRoot, 
    OrderFormBlock,
    OrderFormBlockHeader,
    OrderFormBlockBody,
    OrderFormBlockInput,
} from "../style";
import styled from "@emotion/styled/macro";

export const OrderSearchCard = styled.div`
    background-color: #FAFAFA;
    padding: 30px 60px;
    margin-bottom: 5%;
`;
export const OrderSearchCardHeader = styled.h1`
    color: #292929;
    text-align: center;
    font-size: 24px;
    font-weight: 400;
`;

export const OrderSearch: React.FC = () => {
    const dispatch = useDispatch();
    const location = useLocation<{from: string}>();
    const { id } = useParams<{id: string}>();

    const orders = useSelector((root: RootState) => root.list.filter(item => item.id ===id));

    useEffect(() => {
        if(location.state) {
            if(location.state.from === "order") { 
                dispatch(ActionsCreateor.cart.clearCartItems());
                dispatch(ActionsCreateor.order.clearOrderForm());
            }
        }
    },[dispatch, location]);

    useEffect(() => {
        if(orders.length === 0)
         dispatch(ActionsCreateor.request.fetchOrder(id))
    }, [dispatch, orders, id]);

    if(orders.length === 0) {
        return <div>Loading</div>
    }
    return (
        <OrderRoot>
            <OrderSearchCard>
                <OrderSearchCardHeader>{`????????????   ${id}`}</OrderSearchCardHeader>
            </OrderSearchCard>
            <OrderCartRoot>
                <OrderCartHeader>
                    <Container>
                        <Item size={7.5}>{"??????"}</Item>
                        <Item size={1.5}>{"??????"}</Item>
                        <Item size={1.5}>{"??????"}</Item>
                        <Item size={1.5}>{"??????"}</Item>
                    </Container>
                </OrderCartHeader>
                <OrderCartBody>
                    { 
                        orders[0].list.map(item => {
                            return (
                                <OrderCartItem>
                                    <Container>
                                        <Item size={7.5} flex>
                                            <OrderCartItemImg src={item.imgUrl}/>
                                            <OrderCartItemName>{item.name}</OrderCartItemName>
                                        </Item>
                                        <Item size={1.5}>{item.number}</Item>
                                        <Item size={1.5}>{item.price}</Item>
                                        <Item size={1.5}>{item.number * item.price}</Item>
                                    </Container>
                                </OrderCartItem>
                            )
                        }) 
                    }
                </OrderCartBody>
                <OrderCartFooter>
                    <OrderCartTotalText>{"?????????"}</OrderCartTotalText> 
                    <OrderCartTotalNumber>
                        { 
                            orders[0].list.reduce((sum, item) => {
                                return sum + item.price * item.number;            
                            }, 0)
                        }
                    </OrderCartTotalNumber>
                </OrderCartFooter> 
            </OrderCartRoot>
            <OrderInfoRoot>
                <OrderInfoHeader>{"????????????"}</OrderInfoHeader>
                <OrderInfoBody>
                    <OrderInfoInputBlock>
                        <Input 
                            disabled
                            placeholder="????????????" 
                            value={orders[0].deliverWay}
                        />
                    </OrderInfoInputBlock>
                    <OrderInfoInputBlock>
                        <Input 
                            disabled
                            placeholder="????????????"
                            value={orders[0].payWay}
                        />
                    </OrderInfoInputBlock>
                </OrderInfoBody>
            </OrderInfoRoot>
            <OrderFormRoot>
                <OrderFormBlock> 
                    <OrderFormBlockHeader>{"???????????????"}</OrderFormBlockHeader>
                    <OrderFormBlockBody>
                        <OrderFormBlockInput>
                            <Input 
                                disabled
                                placeholder="??????" 
                                value={orders[0].buyer.name}
                            />
                        </OrderFormBlockInput> 
                        <OrderFormBlockInput>
                            <Input 
                                disabled
                                placeholder="????????????" 
                                value={orders[0].buyer.phone}
                            />
                        </OrderFormBlockInput> 
                        <OrderFormBlockInput>
                            <Input 
                                disabled
                                placeholder="????????????" 
                                type="email"
                                value={orders[0].buyer.email}
                            />
                        </OrderFormBlockInput> 
                    </OrderFormBlockBody>
                </OrderFormBlock>
                <OrderFormBlock>
                    <OrderFormBlockHeader>{"???????????????"}</OrderFormBlockHeader>
                    <OrderFormBlockBody>
                        <OrderFormBlockInput>
                            <Input 
                                disabled
                                placeholder="??????" 
                                value={orders[0].reciver.name}
                            />
                        </OrderFormBlockInput> 
                        <OrderFormBlockInput>
                            <Input 
                                disabled
                                placeholder="????????????" 
                                value={orders[0].reciver.phone}
                            />
                        </OrderFormBlockInput> 
                        <OrderFormBlockInput>
                            <Input 
                                disabled
                                placeholder="????????????" 
                                type="email"
                                value={orders[0].reciver.email}
                            />
                        </OrderFormBlockInput> 
                    </OrderFormBlockBody>
                </OrderFormBlock>
            </OrderFormRoot>
        </OrderRoot>
    )
};

export default OrderSearch;