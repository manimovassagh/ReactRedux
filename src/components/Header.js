import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { loginTheUser, logoutTheUSer } from '../Redux/Login/LoginAction'
export function Header() {

    const loginStatus = useSelector(state => state.loginStatus)
    console.log(loginStatus)
    function loginUI() {
        if (loginStatus) {
            return <div>user Loggedin</div>

        } else {
            return <div>user Logged Out!!</div>
        }
    }
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(loginTheUser())} type="button">{loginStatus? 'Wellcome Guest!!':'Login Please'}</button>
            {loginStatus && <button onClick={()=>dispatch(logoutTheUSer())}>Logout</button> }
        </div>
    )
}
