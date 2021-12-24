import * as Type from "../action/type";;

export interface ModalState  {
    active: boolean;
    type: "error"| "success"| ""
    title: string;
    body: string;
};
const initialState: ModalState = {
    active: false,
    type: "",
    title: "",
    body: "",
};
export function ModalReducer (state: ModalState = initialState, action: any) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case Type.modal.taggleModal:
            newState = {...action.payload};
            break;
        default:
            break;
    }
    return newState;
}