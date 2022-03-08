import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";
import {loginValuesType} from "../Forms/LoginForm";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const LOGIN_USER = 'auth/LOGIN_USER'
const GET_CAPTCHA= 'auth/GET_CAPTCHA'
const SET_ERRORS = 'auth/SET_ERRORS'

export type authActionsType = setUserDataActionType | loginUserType | getCaptchaType | setErrorsType
type setUserDataActionType = {
    type: typeof SET_USER_DATA
    data: {
        id: number | null
        login: string |null
        email: string |null
        isAuth:boolean
        errors:string[]
    }
}
type loginUserType = {
    type:typeof LOGIN_USER
    isAuth:boolean
}
type getCaptchaType = {
    type: typeof GET_CAPTCHA
    url:string
}
type setErrorsType = {
    type: typeof SET_ERRORS
    errors:string[]
}
export const setCaptcha = (url:string):getCaptchaType => ({type:GET_CAPTCHA,url})

export const setUserData = (id: number | null, login: string | null, email: string | null,isAuth:boolean): setUserDataActionType => ({
    type: SET_USER_DATA,
    data: {id, login, email,isAuth,errors:[]}
})

export const setErrors = (errors:string[]):setErrorsType => ({type:SET_ERRORS,errors})

export const setAuthUserTC =  ():ThunkAction<any, AppStateType, unknown,authActionsType>  => async (dispatch)=> {
    let response = await authAPI.me()
    let {id, login, email} = response.data
    response.resultCode === 0 && dispatch(setUserData(id, login, email,true))
}

export const loginUserTC = (values:loginValuesType):ThunkAction<any, AppStateType, unknown,authActionsType>=> async (dispatch) => {
    let res = await authAPI.login(values)
    console.log(res)
        if (res.resultCode === 0){
            dispatch(setAuthUserTC())
            return null
        }else if(res.resultCode === 1){
            dispatch(setErrors(res.messages))
        }else if(res.resultCode === 10) {
            dispatch(getCaptchaTC())
            dispatch(setErrors(res.messages))
        }
}

export const logoutUserTC = ():ThunkAction<any, AppStateType, unknown,authActionsType> => async (dispatch)=> {
    await authAPI.logout().then(res => dispatch(setUserData(null,null,null,false)))

}

export const getCaptchaTC = ():ThunkAction<any, AppStateType, unknown,authActionsType> => async (dispatch)=> {
    let res = await authAPI.captcha()
        dispatch(setCaptcha(res.url))
}
const initialState = {
    id: null as null | number,
    login: '' as null | string,
    email: null as null | string,
    isAuth: false as boolean,
    captcha:null as null | string,
    errors:[''] as string[]
}
export type InitialStateAuthType = typeof initialState

export const authReducer = (state = initialState, action: authActionsType):InitialStateAuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case LOGIN_USER:
            return {...state}
        case GET_CAPTCHA:
            return {...state, captcha: action.url}
        case SET_ERRORS:
            return {...state, errors: action.errors}
        default:
            return state
    }
}