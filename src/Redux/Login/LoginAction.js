import { LOGIN_USER } from './LoginActionType'
import { LOGOUT_USER } from './LoginActionType'

export const loginTheUser = () => {
  return {
    type: LOGIN_USER
  }
}
export const logoutTheUSer = () => {
  return {
    type: LOGOUT_USER
  }
}