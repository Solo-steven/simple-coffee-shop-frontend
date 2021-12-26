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
    }
};
