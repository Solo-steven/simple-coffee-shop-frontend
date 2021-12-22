import { combineReducers } from "redux";
import  { ProductReducer, ProductState } from "./products";

export interface RootState  {
    products: ProductState;
}

export const RootReducer = combineReducers({
    products: ProductReducer,
})

export default RootReducer;
