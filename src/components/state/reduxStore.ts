        import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleWare from "redux-thunk";
import {appReducer} from "./appReducer";
import { composeWithDevTools } from '@redux-devtools/extension'


type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app:appReducer
})
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleWare)))
// @ts-ignore
window.store = store
export default store
