import {AppStateType} from "./reduxStore";

export const getDialogsArray = (state:AppStateType) => {
    return  state.dialogsPage.dialogs
}

export const getDialogsUsersArray = (state:AppStateType) => {
    return state.dialogsPage.users
}