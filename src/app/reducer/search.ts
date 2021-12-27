import * as Type from "../action/type";

export interface SearchState extends Array<{
    _id: string
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
        total: number
    }>
}>{}

export  function  SearchReducer (state: SearchState = [], action: any) {
    let newState = [...state];
    switch(action.type) {
        case Type.search.finishFetchOrder:
            newState = [...newState, action.payload];
            break;
    }
    return newState;
}