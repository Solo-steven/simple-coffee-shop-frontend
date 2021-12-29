import { combineReducers } from "redux";
import { ProductReducer, ProductState } from "./products";
import { CartReducer, CartState } from "./cart";
import { ModalReducer, ModalState } from "./modal";
import { OrderReducer, OrderState } from "./order";
import { SearchReducer, SearchState } from "./list"

export interface RootState  {
    products: ProductState;
    carts: CartState;
    modal: ModalState;
    order: OrderState;
    list: SearchState;
}

export const RootReducer = combineReducers({
    products: ProductReducer,
    carts: CartReducer,
    modal: ModalReducer,
    order : OrderReducer,
    list : SearchReducer,
})

export default RootReducer;
