import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../redux/actions/AuthActions'

export const Navbar = () => {
    const navigate = useNavigate()
    const {isLogin} = useSelector(state=>state.authReducer)
    const dispatch = useDispatch()
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 position-fixed top-0 w-100 mb-5" style={{zIndex: '9999'}}>
                <NavLink className="navbar-brand" to="/">
                    <img 
                        style={{width:'80px', height:'80px', borderRadius:'50%'}} 
                        src='https://tse2.mm.bing.net/th?id=OIP.DdrvervRagOpS58iB2NgBAHaHa&pid=Api&P=0&h=220'
                    />
                </NavLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 fw-bold">
                        <li className="nav-item ">
                            <NavLink className={({isActive})=>isActive ? "nav-link text-danger" : "nav-link "} to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=>isActive ? "nav-link text-danger" : "nav-link "} to="/shop">Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=>isActive ? "nav-link text-danger" : "nav-link "} to="/about-us">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=>isActive ? "nav-link text-danger" : "nav-link "} to="/create">Insert</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=>isActive ? "nav-link text-danger" : "nav-link "} to="/show">Show</NavLink>
                        </li>
                    </ul>
                    <div className='d-flex'>
                        <form className="form-inline my-2 my-lg-0 d-flex">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        <div>
                            <button 
                                className='btn btn-primary ms-4'
                                onClick={()=>navigate("/sign-up")}
                            >Sign up</button>
                            <button 
                                className='btn btn-success ms-2'
                                onClick={()=>isLogin ? dispatch(logout()) : navigate("/login")}
                            >
                                {
                                    isLogin ? "Logout" : "Login"
                                }
                            </button>
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    )
}
