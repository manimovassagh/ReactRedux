import { LOGIN_USER } from './LoginActionType'
import { LOGOUT_USER } from './LoginActionType'

const initialLoginState = {
  loginStatus:false
}

const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case LOGIN_USER: return {
      ...state,
      loginStatus: true
    }
    case LOGOUT_USER: return {
      ...state,
      loginStatus: false
    }

    default: return state
  }
}

export default  loginReducer;