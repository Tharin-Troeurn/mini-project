import { actionType } from "../actions/ActionType"

const initState = {
    profile : {}
}

export const profileReducer = (state=initState, action)=>{
    const {type, payload} = action
    switch(type){
        case actionType.FETCH_PROFILE:
            return {...state, profile:payload}
        
        default:
            return state
    }
}