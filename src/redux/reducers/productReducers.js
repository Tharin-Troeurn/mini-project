import { actionType } from "../actions/ActionType"



const initState ={
    products : [],
    categories : []
}

export const productReducer=(state = initState , action)=>{
    const {type,payload} = action
    switch(type){
        case actionType.FETCH_PRODUCTS:
            return {...state, products:payload}

        case actionType.FETCH_CATEGORIES:
            return {...state, categories:payload}
            
        default:
            return state
    }

}