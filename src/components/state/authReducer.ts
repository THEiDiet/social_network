import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";

const SET_USER_DATA = 'SET_USER_DATA'

export type authActionsType = setUserDataActionType
type setUserDataActionType = {
    type: typeof SET_USER_DATA
    data: {
        id: number
        login: string
        email: string
    }
}
export const setUserData = (id: number, login: string, email: string): setUserDataActionType => ({
    type: SET_USER_DATA,
    data: {id, login, email}
})
export const setAuthUserTC = ():ThunkAction<any, AppStateType, unknown,authActionsType>  => (dispatch)=> {
    authAPI.me().then(data => {
        let {id, login, email} = data.data
        data.resultCode === 0 && dispatch(setUserData(id, login, email))
        return true
    })
}
let initialState = {
    id: null as null | number,
    login: '' as null | string,
    email: null as null | string,
    isAuth: false as boolean
}
export type InitialStateAuthType = typeof initialState

export const authReducer = (state = initialState, action: authActionsType):InitialStateAuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}