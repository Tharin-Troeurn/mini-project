
import { base_URL } from "../../util/constant"
import { actionType } from "./ActionType"

export const fetchAllProducts =()=>{
    return (dispatch)=> {
        fetch(`${base_URL}/products`)
        .then(res=>res.json())
        .then(resp => dispatch({
            type : actionType.FETCH_PRODUCTS,
            payload : resp
        }))
        .catch(err => console.log(err))
    }
}

export const fetchAllCategories = () =>{
    return (dispatch) => {
        fetch(`${base_URL}/categories`)
        .then(res=>res.json())
        .then(resp=>dispatch({
            type : actionType.FETCH_CATEGORIES,
            payload : resp
        }))
        .catch(err => console.log(err))
    }
}