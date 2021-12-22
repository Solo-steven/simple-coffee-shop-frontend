import * as Type from "./type";
import * as API from "../../api";
import { RootState } from "../reducer/index";

export const start = {
    startFetchData() {
        return {
            type: Type.product.startFetchData
        };
    },
    finishFetchData(data: Array<{}>) {
        return {
            type: Type.product.finishFetchData,
            payload: data
        }
    }
};

export const request = {
    fetchProducts() {
        return async (getState: () => RootState, dispatch: Function) => {
            const data = await API.GetAllProducts();
            dispatch(start.finishFetchData(data));
        }
    }
};
