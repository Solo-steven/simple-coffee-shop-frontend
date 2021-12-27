import React, { useEffect } from"react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { RootState } from "../../app/reducer";
import * as ActionsCreateor from "../../app/action/createor";
import { Container, Item } from "../../common/Grid";
import Input from "../../common/Input";
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
} from "../Order/style";

export const Order: React.FC = () => {
    const dispatch = useDispatch();
    const location = useLocation<{from: string}>();
    const { id } = useParams<{id: string}>();

    const products = useSelector((root: RootState) => root.products);
    const orders = useSelector((root: RootState) => root.search.filter(item => item._id ===id));

    useEffect(() => {
        if(location.state) {
            if(location.state.from === "order") { 
                dispatch(ActionsCreateor.cart.clearCartItems());
                dispatch(ActionsCreateor.order.clearOrderForm());
            }
        }
    },[dispatch, location]);

    useEffect(() => {
        dispatch(ActionsCreateor.request.fetchOrder(id))
    }, [dispatch, id]);

    if(orders.length === 0 || products.length === 0) {
        return <div>Loading</div>
    }
    return (
        <OrderRoot>
            <OrderCartRoot>
                <OrderCartHeader>
                    <Container>
                        <Item size={7.5}>{"品名"}</Item>
                        <Item size={1.5}>{"數量"}</Item>
                        <Item size={1.5}>{"單價"}</Item>
                        <Item size={1.5}>{"小記"}</Item>
                    </Container>
                </OrderCartHeader>
                <OrderCartBody>
                    { 
                        orders[0].list.map(item => {
                            const product = products.filter(product => product.name === item.name)[0];
                            const price = product.price[ product.specification.indexOf(item.specification) ];
                            return (
                                <OrderCartItem>
                                    <Container>
                                        <Item size={7.5} flex>
                                            <OrderCartItemImg src={product.imgUrl}/>
                                            <OrderCartItemName>{item.name}</OrderCartItemName>
                                        </Item>
                                        <Item size={1.5}>{item.number}</Item>
                                        <Item size={1.5}>{price}</Item>
                                        <Item size={1.5}>{item.number * price}</Item>
                                    </Container>
                                </OrderCartItem>
                            )
                        }) 
                    }
                </OrderCartBody>
                <OrderCartFooter>
                    <OrderCartTotalText>{"總金額"}</OrderCartTotalText> 
                    <OrderCartTotalNumber>
                        { 
                            orders[0].list.reduce((sum, item) => {
                                const product = products.filter(product => product.name === item.name)[0];
                                const price = product.price[ product.specification.indexOf(item.specification) ];
                                return sum + price * item.number;            
                            }, 0)
                        }
                    </OrderCartTotalNumber>
                </OrderCartFooter> 
            </OrderCartRoot>
            <OrderInfoRoot>
                <OrderInfoHeader>{"訂購資訊"}</OrderInfoHeader>
                <OrderInfoBody>
                    <OrderInfoInputBlock>
                        <Input 
                            disabled
                            placeholder="收件方式" 
                            value={orders[0].deliverWay}
                        />
                    </OrderInfoInputBlock>
                    <OrderInfoInputBlock>
                        <Input 
                            disabled
                            placeholder="付款方式"
                            value={orders[0].payWay}
                        />
                    </OrderInfoInputBlock>
                </OrderInfoBody>
            </OrderInfoRoot>
            <OrderFormRoot>
                <OrderFormBlock> 
                    <OrderFormBlockHeader>{"購買人資訊"}</OrderFormBlockHeader>
                    <OrderFormBlockBody>
                        <OrderFormBlockInput>
                            <Input 
                                disabled
                                placeholder="稱呼" 
                                value={orders[0].buyer.name}
                            />
                        </OrderFormBlockInput> 
                        <OrderFormBlockInput>
                            <Input 
                                disabled
                                placeholder="聯絡電話" 
                                value={orders[0].buyer.phone}
                            />
                        </OrderFormBlockInput> 
                        <OrderFormBlockInput>
                            <Input 
                                disabled
                                placeholder="電子信箱" 
                                type="email"
                                value={orders[0].buyer.email}
                            />
                        </OrderFormBlockInput> 
                    </OrderFormBlockBody>
                </OrderFormBlock>
                <OrderFormBlock>
                    <OrderFormBlockHeader>{"收件人資訊"}</OrderFormBlockHeader>
                    <OrderFormBlockBody>
                        <OrderFormBlockInput>
                            <Input 
                                disabled
                                placeholder="稱呼" 
                                value={orders[0].reciver.name}
                            />
                        </OrderFormBlockInput> 
                        <OrderFormBlockInput>
                            <Input 
                                disabled
                                placeholder="聯絡電話" 
                                value={orders[0].reciver.phone}
                            />
                        </OrderFormBlockInput> 
                        <OrderFormBlockInput>
                            <Input 
                                disabled
                                placeholder="電子信箱" 
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

export default Order;