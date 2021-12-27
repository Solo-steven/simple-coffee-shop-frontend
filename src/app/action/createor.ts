import * as Type from "./type";
import * as API from "../../api";
import { RootState } from "../reducer/index";

export const start = {
    startFetchData() {
        return {
            type: Type.product.startFetchData
        };
    },
    finishFetchData(data: Array<{}>) {
        return {
            type: Type.product.finishFetchData,
            payload: data
        }
    }
};
export const cart = {
    taggleCartDrawer() {
        return {
            type: Type.cart.taggleCartDrawer
        }
    },
    addToCart(name: string,  number: number, specification: string) {
        return {
            type: Type.cart.addToCart,
            payload: {
                name, number, specification
            }
        }
    },
    changeCartItemNumber(name: string, specification: string, number: number) {
        return {
            type: Type.cart.changeCartItemNumber,
            payload: {
                name, number, specification
            }
        }
    },
};
export const modal = {
    taggleModal(active: boolean, type: "error" | "success" | "" = "", title: string = "", body: string ="") {
        return {
            type: Type.modal.taggleModal,
            payload: {
                active, type, title, body
            }
        }
    }
}
export const order = {
    taggleFinishFlag(id: string = "") {
        return {
            type: Type.order.taggleFinishFlag,
            payload: id,
        }
    },
    changePayWay(way: string) {
        return {
            type: Type.order.changePayWay,
            payload: way,
        };
    },
    changeDeliveryWay(way: string) {
        return {
            type: Type.order.changeDeliveryWay,
            payload: way,
        } 
    },
    changeBuyerName(name: string) {
        return {
            type: Type.order.changeBuyerName,
            payload: name
        };
    },
    changeBuyerPhone(phone: string) {
        return {
            type: Type.order.changeBuyerPhone,
            payload: phone
        };
    },
    changeBuyerEmail(email: string) {
        return {
            type: Type.order.changeBuyerEmail,
            payload: email
        }
    },
    changeReciverName(name: string) {
        return {
            type: Type.order.changeReciverName,
            payload: name
        };
    },
    changeReciverPhone(phone: string) {
        return {
            type: Type.order.changeReciverPhone,
            payload: phone
        };
    },
    changeReciverEmail(email: string) {
        return {
            type: Type.order.changeReciverEmail,
            payload: email
        }
    },

}

export const request = {
    fetchProducts(category: string ) {
        return async (getState: () => RootState, dispatch: Function) => {
            const data = await API.GetAllProducts(category);
            dispatch(start.finishFetchData(data));
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
    }
};
