import * as Type from "../action/type";

export interface OrderState {
    // finish api flag and data.
    finishFlag: boolean;
    finishId: string;
    // from data.
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
    finishFlag: false,
    finishId: "",
    deliverWay: "",
    payWay: "",
    buyer: { name: "", phone: "", email: ""},
    reciver : {name: "", phone: "", email: ""}
}

export function OrderReducer(state: OrderState = initialState, action: any) {
    let newState = Object.assign({},state);
    switch (action.type) {
        case Type.order.taggleFinishFlag:
            newState.finishFlag = !newState.finishFlag;
            newState.finishId = action.payload;
            break;
        case Type.order.clearOrderForm:
            newState = {...initialState};
            newState.buyer = { ...initialState.buyer };
            newState.reciver = { ...initialState.reciver};
            break;
        case Type.order.changePayWay:
            newState.payWay = action.payload;
            break;
        case Type.order.changeDeliveryWay:
            newState.deliverWay = action.payload;
            break;
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