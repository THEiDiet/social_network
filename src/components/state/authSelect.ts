import {AppStateType} from "./reduxStore";

export const getAuthLogin = (state:AppStateType) => {
    return  state.auth.login
}

export const getAuthIsAuth = (state:AppStateType) => {
    return state.auth.isAuth
}
export const getAuthAll = (state:AppStateType) => {
    return state.auth
}