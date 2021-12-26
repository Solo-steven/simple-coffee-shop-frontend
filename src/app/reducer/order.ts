import * as Type from "../action/type";

export interface OrderState {
    deliverWay: string;
    payWay: string;
    buyer : {
        name: string;
        phone: string
        email: string;
    },
    reciver : {
        name: string;
        phone: string
        email: string;
    }
}
const initialState: OrderState = {
    deliverWay: "",
    payWay: "",
    buyer: { name: "", phone: "", email: ""},
    reciver : {name: "", phone: "", email: ""}
}

export function OrderReducer(state: OrderState = initialState, action: any) {
    let newState = Object.assign({},state);
    switch (action.type) {
        // buyer form
        case Type.order.changeBuyerName:
            newState.buyer = {...newState.buyer, name: action.payload};
            break;
        case Type.order.changeBuyerPhone:
            newState.buyer = { ...newState.buyer, phone: action.payload};
            break;
        case Type.order.changeBuyerEmail:
            newState.buyer ={ ...newState.buyer, email: action.payload};
            break;
        // reciver form
        case Type.order.changeReciverName:
            newState.reciver = {...newState.reciver, name: action.payload};
            break;
        case Type.order.changeReciverPhone:
            newState.reciver= { ...newState.reciver, phone: action.payload};
            break;
        case Type.order.changeReciverEmail:
            newState.reciver ={ ...newState.reciver, email: action.payload};
            break;
        default:
            break;
    }
    return newState;
}