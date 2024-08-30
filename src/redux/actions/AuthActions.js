import axios from "axios"
import { base_URL } from "../../util/constant"
import { actionType } from "./ActionType"
import secureLocalStorage from "react-secure-storage"

export const loginUser =(user)=>{
    return (dispatch)=>{
        axios(`${base_URL}/auth/login`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            data: JSON.stringify(user)
        })
        
        .then(resp => {
            if(resp.status == 201){
                secureLocalStorage.setItem('auth', resp)
                dispatch({
                    type :  actionType.LOGIN_SUCCESS,
                    payload : resp
                })
                return Promise.resolve()
            }
        })
        return Promise.resolve()
    }
}