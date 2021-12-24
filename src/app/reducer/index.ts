import { combineReducers } from "redux";
import { ProductReducer, ProductState } from "./products";
import { CartReducer, CartState } from "./cart";
import { ModalReducer, ModalState } from "./modal";

export interface RootState  {
    products: ProductState;
    carts: CartState,
    modal: ModalState,
}

export const RootReducer = combineReducers({
    products: ProductReducer,
    carts: CartReducer,
    modal: ModalReducer,
})

export default RootReducer;
