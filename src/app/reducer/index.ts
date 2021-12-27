import { combineReducers } from "redux";
import { ProductReducer, ProductState } from "./products";
import { CartReducer, CartState } from "./cart";
import { ModalReducer, ModalState } from "./modal";
import { OrderReducer, OrderState } from "./order";
import { SearchReducer, SearchState } from "./search"

export interface RootState  {
    products: ProductState;
    carts: CartState;
    modal: ModalState;
    order: OrderState;
    search: SearchState;
}

export const RootReducer = combineReducers({
    products: ProductReducer,
    carts: CartReducer,
    modal: ModalReducer,
    order : OrderReducer,
    search : SearchReducer,
})

export default RootReducer;
