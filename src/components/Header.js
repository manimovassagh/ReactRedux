import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { loginTheUser, logoutTheUSer } from '../Redux/Login/LoginAction'
export function Header() {

    const loginStatus = useSelector(state => state.loginStatus)
    console.log(loginStatus)
  
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(loginTheUser())} type="button">{loginStatus? 'Wellcome Guest!!':'Login Please'}</button>
            {loginStatus && <button onClick={()=>dispatch(logoutTheUSer())}>Logout</button> }
        </div>
    )
}
