import { combineReducers } from "redux";
import { productReducer } from "./productReducers";

export const rootReducer = combineReducers({
    proReducer : productReducer

})