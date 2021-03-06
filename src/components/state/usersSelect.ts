import {AppStateType} from "./reduxStore";

export const getUsersArray = (state:AppStateType) => {
    return state.usersPage.users
}

export const getTotalUsersCount = (state:AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getPageSize = (state:AppStateType) => {
    return state.usersPage.pageSize
}
export const getCurrentPage = (state:AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state:AppStateType) => {
    return state.usersPage.isFetching
}

export const getIsDisabled = (state:AppStateType) => {
    return state.usersPage.isDisabled
}
export const getFilter = (state:AppStateType) => {
    return state.usersPage.filter
}