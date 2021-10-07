import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { loginTheUser, logoutTheUSer } from '../Redux/Login/LoginAction'
import { Container } from 'semantic-ui-react'

export function Header() {

    const loginStatus = useSelector(state => state.loginStatus)
    console.log(loginStatus)
  
    const dispatch = useDispatch()
    return (
        
        <Container textAlign='right'>
            <Button positive onClick={() => dispatch(loginTheUser())} type="button">{loginStatus? 'Wellcome Guest!!':'Login Please'}</Button>
            {loginStatus && <Button positive onClick={()=>dispatch(logoutTheUSer())}>Logout</Button> }
        </Container>
    )
}
