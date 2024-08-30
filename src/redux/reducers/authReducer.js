import secureLocalStorage from "react-secure-storage"
import { actionType } from "../actions/ActionType"


const auth = secureLocalStorage.getItem('auth')
const initState = auth ? {isLogin : true,auth : auth} : {isLogin : false,auth : null}

export const authReducer = (state = initState, action)=>{
    const {type, payload} = action
    switch(type){
        case actionType.LOGIN_SUCCESS:
            return {...state, isLogin:true, auth:payload}
        case actionType.LOGOUT:
            return {...state, isLogin:false, auth:payload}
    
        default:
            return state
    }

}