import * as Type from "../action/type";

export interface CartState extends Array<{
    name: string;
    specification: string;
    number: number;
}> {}

export function CartReducer(state: CartState = [], action: any) {
    let newState: CartState = Object.assign([],state);
    switch (action.type) {
        /** Add Item to Cart Array
         *  -> name, number, specification id not null.
         *  -> search is already exist
         *  -> if not add item.
         */
        case Type.cart.addToCart: { 
            const { name, number, specification } = action.payload;
            if(name === "" || number === 0 || specification === "") break;
            let flag = false;
            for(const item of newState) {
                if(item.name === name && item.specification === specification
                ) {
                    flag = true
                    break;
                }
            }
            if(flag) break;
            newState = [...newState, {name, number, specification}];
            break;
        }
        /**
         * 
         */
        case Type.cart.changeCartItemNumber: {
            // search cart item index
            let index = 0;
            for(index =0 ;index < state.length ;index++) {
               if(newState[index].name === action.payload.name 
                  && newState[index].specification === action.payload.specification
                ) break;
            }
            if(index === state.length -1) break;
            const item = state[index];
            newState = [ 
                ...newState.slice(0, index),
                { ...item, number: action.payload.number } ,
                ...newState.slice(index+1, state.length)
            ]
            break;
        }   
    }
    return newState;
}