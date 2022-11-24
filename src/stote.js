import {configureStore} from "@reduxjs/toolkit"
import {LoginReducer,login} from "./redux/Login"
import {addFriend} from "./redux/friend"
export const store= configureStore({
    reducer:{
        logData:LoginReducer  ,
        login,addFriend
           
    }
})
