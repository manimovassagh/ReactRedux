import { createStore } from "redux";
import loginReducer from "./Login/LoginReducer";


 const store = createStore(loginReducer)

 export default store
