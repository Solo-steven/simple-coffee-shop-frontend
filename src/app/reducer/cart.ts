import * as Type from "../action/type";

export interface CartState  {
    active: boolean;
    items : Array<{
        name: string;
        specification: string;
        number: number;
    }>;
}
const initialState: CartState = {
    active: false,
    items: [],
}

export function CartReducer(state: CartState = initialState, action: any) {
    let newState: CartState = Object.assign({},state);
    switch (action.type) {
        /** Toggle Cart Drawer
         *  taggle active boolean
         */
        case Type.cart.taggleCartDrawer:
            newState.active = !state.active
            break;
        /** Add Item to Cart Array
         *  -> name, number, specification id not null.
         *  -> search is already exist
         *  -> if not add item.
         */
        case Type.cart.addToCart: { 
            const { name, number, specification } = action.payload;
            if(name === "" || number === 0 || specification === "") break;
            let flag = false;
            for(const item of newState.items) {
                if(item.name === name && item.specification === specification
                ) {
                    flag = true
                    break;
                }
            }
            if(flag) break;
            newState.items = [...newState.items, {name, number, specification}];
            break;
        }
        /**
         * 
         */
        case Type.cart.changeCartItemNumber: {
            // search cart item index
            let index = 0;
            for(index =0 ;index < state.items.length ;index++) {
                            console.log(index);
               if(newState.items[index].name === action.payload.name 
                  && newState.items[index].specification === action.payload.specification
                ) break;
            }
                        console.log(index);
            if(index === state.items.length ) break;
            const item = state.items[index];
            newState.items = [ 
                ...newState.items.slice(0, index),
                { ...item, number: action.payload.number } ,
                ...newState.items.slice(index+1, state.items.length)
            ]
            break;
        }   
    }
    return newState;
}