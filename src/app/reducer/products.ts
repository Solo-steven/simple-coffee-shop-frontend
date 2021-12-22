import * as Type from "../action/type";

export interface ProductState extends Array<{
    name: string,
    category: string,
    imgUrl: string,
    price: Array<number>,
    specification: Array<number>,
    payway: Array<string>,
    deliverWay: Array<string>,
    description: string 
}>{};

export function ProductReducer(state: ProductState = [], action: any) {
    let newState = [...state]
    switch (action.type) {
        case Type.product.startFetchData:
            break;
        case Type.product.finishFetchData:
            newState = action.payload;
            break;
        default:
            break;
    }
    return newState;
};

export default ProductReducer;
