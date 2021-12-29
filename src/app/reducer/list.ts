import * as Type from "../action/type";

export interface ListState extends Array<{
    id: string
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
    },
    list: Array<{
        name: string,
        number: number,
        specification: string,
        imgUrl: string,
        price: number
    }>
}>{}

export  function  ListReducer (state: ListState = [], action: any) {
    let newState = [...state];
    switch(action.type) {
        case Type.search.finishFetchOrder:
            newState = [...newState, action.payload];
            break;
    }
    return newState;
}