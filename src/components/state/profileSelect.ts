import {AppStateType} from "./reduxStore";

export const getProfile = (state:AppStateType) => {
    return state.profilePage.profile
}
export const getStatus = (state:AppStateType) => {
    return  state.profilePage.status
}

