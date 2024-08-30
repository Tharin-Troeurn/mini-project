import axios from "axios"
import { base_URL } from "../../util/constant"
import { actionType } from "./ActionType"

const fetchProfile = (auth) =>{
    return (dispatch)=>{
        return axios(`${base_URL}/auth/profile`,{
            headers:{
                "content-type" : "application/json",
                "Authorization" : `Bearer ${auth}`
            }
        })
        .then((res)=>{
            if(res.status == 200){
                dispatch({
                    type : actionType.FETCH_PROFILE,
                    payload : res.data
                })

                return Promise.resolve()
            }
        })
        .catch(err=>{
            console.log(err)
            alert(err.message)
        })
    }
}