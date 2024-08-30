import { combineReducers } from "redux";
import { productReducer } from "./productReducers";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
    proReducer : productReducer,
    authReducer : authReducer
})