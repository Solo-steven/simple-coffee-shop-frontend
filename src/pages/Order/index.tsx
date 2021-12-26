import React from"react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/reducer";
import * as ActionsCreateor from "../../app/action/createor";
import { Container, Item } from "../../common/Grid";
import Input from "../../common/Input";
import Select from "../../common/Select";
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
} from "./style";

export const Order: React.FC = () => {
    const dispatch = useDispatch();
    const carts = useSelector((root: RootState) => root.carts.items);
    const products = useSelector((root: RootState) => root.products);
    const order = useSelector((root: RootState) => root.order);
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
                        carts.map(item => {
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
                            carts.reduce((sum, item) => {
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
                        <Select>
                            <option value="">{"收件方式"}</option>
                        </Select>
                    </OrderInfoInputBlock>
                    <OrderInfoInputBlock>
                        <Select>
                            <option value="">{"付款方式"}</option>
                        </Select>
                    </OrderInfoInputBlock>
                </OrderInfoBody>
            </OrderInfoRoot>
            <OrderFormRoot>
                <OrderFormBlock> 
                    <OrderFormBlockHeader>{"購買人資訊"}</OrderFormBlockHeader>
                    <OrderFormBlockBody>
                        <OrderFormBlockInput>
                            <Input 
                                placeholder="稱呼" 
                                value={order.buyer.name} 
                                onChange={(e) => {
                                    dispatch( ActionsCreateor.order.changeBuyerName(e.target.value));
                                }}
                            />
                        </OrderFormBlockInput> 
                        <OrderFormBlockInput>
                            <Input 
                                placeholder="聯絡電話" 
                                value={order.buyer.phone}
                                onChange={(e) => {
                                    dispatch( ActionsCreateor.order.changeBuyerPhone(e.target.value));
                                }}
                            />
                        </OrderFormBlockInput> 
                        <OrderFormBlockInput>
                            <Input 
                                placeholder="電子信箱" 
                                type="email"
                                value={order.buyer.email}
                                onChange={(e) => {
                                    dispatch(ActionsCreateor.order.changeBuyerEmail(e.target.value));
                                }}
                            />
                        </OrderFormBlockInput> 
                    </OrderFormBlockBody>
                </OrderFormBlock>
                <OrderFormBlock>
                    <OrderFormBlockHeader>{"收件人資訊"}</OrderFormBlockHeader>
                    <OrderFormBlockBody>
                        <OrderFormBlockInput>
                            <Input 
                                placeholder="稱呼" 
                                value={order.reciver.name}
                                onChange={(e) => {
                                    dispatch(ActionsCreateor.order.changeReciverName(e.target.value));
                                } }
                            />
                        </OrderFormBlockInput> 
                        <OrderFormBlockInput>
                            <Input 
                                placeholder="聯絡電話" 
                                value={order.reciver.phone} 
                                onChange={(e) => {
                                    dispatch(ActionsCreateor.order.changeReciverPhone(e.target.value))
                                }}
                            />
                        </OrderFormBlockInput> 
                        <OrderFormBlockInput>
                            <Input 
                                placeholder="電子信箱" 
                                type="email"
                                value={order.reciver.email}
                                onChange={(e) => {
                                    dispatch(ActionsCreateor.order.changeReciverEmail(e.target.value))
                                }}
                            />
                        </OrderFormBlockInput> 
                    </OrderFormBlockBody>
                </OrderFormBlock>
            </OrderFormRoot>
        </OrderRoot>
    )
};

export default Order;