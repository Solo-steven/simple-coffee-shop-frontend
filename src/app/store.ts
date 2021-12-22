import { createStore } from "redux";
import { applyMiddleware, Middleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; 
import { RootReducer } from "./reducer";

const middleware: Middleware = store => next => action => {
    if(typeof action === "function") {
        const { getState, dispatch } = store;
        action(getState, dispatch);
    }else {
        next(action);
    }
}

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(middleware)));

export default store;