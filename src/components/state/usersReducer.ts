import {Dispatch} from "redux";
import {SetUsersPromiseType, usersAPI} from "../api/api";
import {getStateType} from "../../types/common";
import {AppStateType} from "./reduxStore";
import {ThunkAction} from "redux-thunk";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_IS_DISABLED = 'SET_IS_DISABLED'


export type UserType = {
    id: number
    name: string
    status: string | null
    uniqueUrlName: null | string
    followed: boolean
    photos: { small: null | string, large: null | string }
}
export type StateUsersType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    isDisabled: number[]
}
let initialState: StateUsersType = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    isDisabled: [],
}

export const usersReducer = (state = initialState, action: UsersActionsTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case  SET_USERS:
            return {...state, users: [...action.users]}
        case  SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case  SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case  SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case  SET_IS_DISABLED:
            debugger
            return {
                ...state,
                isDisabled:
                    action.isFetching
                        ? [...state.isDisabled, action.userId]
                        : state.isDisabled.filter(u => u !== action.userId)
            }
        default:
            return state
    }

}
export type UsersActionsTypes =
    FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetTotalUsersCountType
    | SetCurrentPageType
    | SetIsFetchingType
    | SetIsDisabledType

export type FollowActionType = {
    type: typeof FOLLOW
    userId: number
}
export type UnfollowActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export type SetUsersActionType = {
    type: typeof SET_USERS
    users: UserType[]
}
export type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount: number
}
export type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export type SetIsFetchingType = {
    type: typeof SET_IS_FETCHING
    isFetching: boolean
}
export type SetIsDisabledType = {
    type: typeof SET_IS_DISABLED
    userId: number
    isFetching: boolean
}

export const follow = (userId: number): FollowActionType => ({type: FOLLOW, userId})
export const unFollow = (userId: number): UnfollowActionType => ({type: UNFOLLOW, userId})
export const setUsers = (users: UserType[]): SetUsersActionType => ({type: SET_USERS, users})
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
})
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage})
export const setIsFetching = (isFetching: boolean): SetIsFetchingType => ({type: SET_IS_FETCHING, isFetching})
export const setIsDisabled = (isFetching: boolean, userId: number): SetIsDisabledType => ({
    type: SET_IS_DISABLED,
    isFetching,
    userId
})
type ThunkType = ThunkAction<any, AppStateType, unknown,UsersActionsTypes>
export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch<UsersActionsTypes>) => {
    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    usersAPI.setUsers(currentPage, pageSize).then((res: SetUsersPromiseType) => {
        dispatch(setTotalUsersCount(res.totalCount))
        dispatch(setUsers(res.items))
        dispatch(setIsFetching(false))
    })
}

export const followUserThunkCreator = (userId: number):ThunkType => (dispatch) => {
    dispatch(setIsDisabled(true, userId))
    usersAPI.followUser(userId).then(res => {
            res.resultCode === 0 && dispatch(follow(userId))
            dispatch(setIsDisabled(false, userId))
        }
    )
}
export const unFollowUserThunkCreator = (userId: number):ThunkType => (dispatch) => {
    dispatch(setIsDisabled(true, userId))
    usersAPI.unfollowUser(userId).then(res => {
        res.resultCode === 0 && dispatch(unFollow(userId))
        dispatch(setIsDisabled(false, userId))
    })
}