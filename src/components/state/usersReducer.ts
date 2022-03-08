import {Dispatch} from "redux";
import {SetUsersPromiseType, usersAPI} from "../api/api";
import {AppStateType} from "./reduxStore";
import {ThunkAction} from "redux-thunk";
import {updateObjectInArray} from "../utils/objectHelpers";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_IS_DISABLED = 'SET_IS_DISABLED'
const SET_FILTER = 'SET_FILTER'


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
    filter: {
        term: string
        friend: null | boolean
    }
}
export type FilterType = typeof initialState.filter

let initialState: StateUsersType = {
    users: [],
    totalUsersCount: 0,
    pageSize: 20,
    currentPage: 1,
    isFetching: false,
    isDisabled: [],
    filter: {
        term: '',
        friend: null
    }
}

export const usersReducer = (state = initialState, action: UsersActionsTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,'id',{followed: true} )
                    // state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,'id',{followed: false} )
                // users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
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
            return {
                ...state,
                isDisabled:
                    action.isFetching
                        ? [...state.isDisabled, action.userId]
                        : state.isDisabled.filter(u => u !== action.userId)
            }
        case  SET_FILTER:
            return {...state, filter: action.payload}
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
    | setFilterType

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
export type setFilterType = {
    type: typeof SET_FILTER
    payload: FilterType
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
export const setFilter = (filter: FilterType): setFilterType => ({
    type: SET_FILTER,
    payload: filter
})


type ThunkType = ThunkAction<any, AppStateType, unknown, UsersActionsTypes>

export const getUsersTC = (currentPage: number, pageSize: number, filter: FilterType): ThunkType => (dispatch: Dispatch<UsersActionsTypes>) => {
    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    dispatch(setFilter(filter))
    usersAPI.setUsers(currentPage, pageSize, filter).then((res: SetUsersPromiseType) => {
        dispatch(setTotalUsersCount(res.totalCount))
        dispatch(setUsers(res.items))
        dispatch(setIsFetching(false))
    })
}
const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: (id:number) => Promise<any>, actionCreator: any) => {
    dispatch(setIsDisabled(true, userId))
    let res = await apiMethod(userId)
    res.resultCode === 0 && dispatch(actionCreator(userId))
    dispatch(setIsDisabled(false, userId))
}
export const followUserThunkCreator = (userId: number): ThunkType => async (dispatch) => {
    followUnfollowFlow(dispatch,userId,usersAPI.followUser.bind(usersAPI),follow)

}
export const unFollowUserThunkCreator = (userId: number): ThunkType => async (dispatch) => {
    followUnfollowFlow(dispatch,userId,usersAPI.unfollowUser.bind(usersAPI),unFollow)

}