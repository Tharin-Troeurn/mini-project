import { combineReducers } from "redux";
import { productReducer } from "./productReducers";
import { authReducer } from "./authReducer";
import { profileReducer } from "./profileReducer";

export const rootReducer = combineReducers({
    proReducer : productReducer,
    authReducer : authReducer,
    profReducer : profileReducer
})