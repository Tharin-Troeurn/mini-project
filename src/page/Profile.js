import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import secureLocalStorage from 'react-secure-storage'
import { fetchProfile } from '../redux/actions/ProfileAction'
import { useNavigate } from 'react-router-dom'

export const Profile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {profile} = useSelector(state=>state.profReducer)
    const {isLogin} = useSelector(state => state.authReducer)

    useEffect(()=>{
        const auth = secureLocalStorage.getItem("auth")
        dispatch(fetchProfile(auth ? auth.access_token : ""))
        .then(res=>{
            console.log(profile)
        })
    }, [])

    return (
        <div>Profile</div>
    )
}
