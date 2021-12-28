import * as Type from "./type";
import * as API from "../../api";
import { RootState } from "../reducer/index";

export const product = {
    startFetchData: ()=> ({
        type: Type.product.startFetchData
    }),
    finishFetchData: (data: Array<any>) => ({
        type: Type.product.finishFetchData,
        payload: data
    })
};
export const search = {
    finishFetchOrder: (order: Array<any>) => ({
        type: Type.search.finishFetchOrder,
        payload: order,
    })
};
export const modal = {
    taggleModal: (active: boolean, type: "error" | "success" | "" = "", title: string = "", body: string ="") => ({
        type: Type.modal.taggleModal,
        payload: { active, type, title, body }
    })
}
export const cart = {
    taggleCartDrawer: () => ({
        type: Type.cart.taggleCartDrawer
    }),
    clearCartItems: () => ({
            type: Type.cart.clearCartItems
    }),
    addToCart: (name: string,  number: number, specification: string)  => ({
        type: Type.cart.addToCart,
        payload: { name, number, specification }
    }),
    changeCartItemNumber: (name: string, specification: string, number: number) => ({
        type: Type.cart.changeCartItemNumber,
        payload: { name, number, specification }
    }),
};
export const order = {
    taggleFinishFlag: (id: string = "") => ({
        type: Type.order.taggleFinishFlag,
        payload: id,
    }),
    clearOrderForm: () => ({
        type: Type.order.clearOrderForm,
    }),
    changePayWay: (way: string) => ({
        type: Type.order.changePayWay,
        payload: way,
    }),
    changeDeliveryWay: (way: string) => ({
        type: Type.order.changeDeliveryWay,
        payload: way,
    }),
    changeBuyerName: (name: string) => ({
        type: Type.order.changeBuyerName,
        payload: name
    }),
    changeBuyerPhone: (phone: string) => ({
        type: Type.order.changeBuyerPhone,
        payload: phone
    }),
    changeBuyerEmail: (email: string) => ({
         type: Type.order.changeBuyerEmail,
        payload: email
    }),
    changeReciverName: (name: string) => ({
        type: Type.order.changeReciverName,
        payload: name
    }),
    changeReciverPhone: (phone: string) => ({
        type: Type.order.changeReciverPhone,
        payload: phone
    }),
    changeReciverEmail: (email: string) =>  ({
        type: Type.order.changeReciverEmail,
        payload: email
    }),
}
export const request = {
    fetchProducts(category: string ) {
        return async (getState: () => RootState, dispatch: Function) => {
            const data = await API.GetAllProducts(category);
            dispatch(product.finishFetchData(data));
        }
    },
    createOrder() {
        return async (getState: () => RootState, dispatch: Function) => {
            const { payWay, deliverWay, buyer, reciver } = getState().order;
            const carts = getState().carts;
            const products = getState().products;
            const list = carts.items.map(item =>{ 
                const product = products.filter(product=>product.name === item.name)[0];
                const total =  item.number * product.price[ product.specification.indexOf(item.specification)];
                return { ...item , total };
            })
            const { id }=  await API.PostNewOrder(
                payWay, deliverWay, list, buyer, reciver,
            );
            console.log(id);
            dispatch(order.taggleFinishFlag(id));
        }
    },
    fetchOrder(id: string) {
        return async (getState: () => RootState, dispatch: Function) => {
            const order = await API.GetOrderById(id);
            console.log(order);
            dispatch(search.finishFetchOrder(order));
        }
    } 
};
