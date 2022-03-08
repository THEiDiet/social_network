import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";
import {setAuthUserTC} from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED'

export type appActionsType = setInitializedType
type setInitializedType = {
    type: typeof SET_INITIALIZED
}

export const setInitialized = (): setInitializedType => ({type: SET_INITIALIZED})
export const initializeTC = (): ThunkAction<any, AppStateType, unknown, appActionsType> => (dispatch) => {
    // dispatch(setAuthUserTC()).then(()=> dispatch(setInitialized()))
    let promise = dispatch(setAuthUserTC())
    Promise.all([promise]).then(()=> dispatch(setInitialized()))
}

let initialState = {
    initialized: false as boolean
}
export type InitialStateAppType = typeof initialState

export const appReducer = (state = initialState, action: appActionsType): InitialStateAppType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}