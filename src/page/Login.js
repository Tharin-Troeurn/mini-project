import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../redux/actions/AuthActions'
import secureLocalStorage from 'react-secure-storage'

export const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {isLogin} = useSelector(state=>state.authReducer)
  const {auth} = useSelector(state=>state.authReducer)

  const [user,setUser] = useState({
    email : "john@mail.com",
    password : "changeme"
  })

  const onInputChangeHandler = (e)=>{
    const {name,value} = e.target
    console.log(user)

    setUser(prevState=>{
      return{
        ...prevState,
        [name] : value
      }
    })
  }

  useEffect(()=>{
    console.log(isLogin)
    console.log('secure storage',secureLocalStorage.getItem('auth'))
    // console.log('auth', auth)
  }, [])

  const handleSubmit=(e)=>{
    e.preventDefault()
    // console.log('login submit')
    dispatch(loginUser(user))
    .then(resp =>{
      navigate("/")
    })
  }

  return (
    <div className='container p-4' style={{ marginTop: '9rem', backgroundColor: '#E8E8E8',width:'500px' }}>
      <form method='post' onSubmit={handleSubmit}>
        <h3 className='text-center mb-3'>Login Form</h3>
        <div className="mb-3">
          <label for="email" className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={user.email}
            placeholder='name@gmail.com'
            onChange={onInputChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={user.password}
            placeholder='password'
            onChange={onInputChangeHandler}
          />
        </div>
        <div>
          <input 
            type='checkbox'
            value="remember-me"
          />
          <label>Remember Me</label>
        </div>
        
        <button
          type="submit"
          className="btn btn-primary w-100 mt-3"
        >Log in</button>
      </form>
    </div>
  )
}
