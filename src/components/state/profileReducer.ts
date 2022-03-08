import {v1} from "uuid";
import {profileAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";

const ADD_POST = 'profileReducer/ADD_POST'
const SET_USER_PROFILE = 'profileReducer/SET_USER_PROFILE'
const SET_STATUS = 'profileReducer/SET_STATUS'
const UPDATE_STATUS = 'profileReducer/UPDATE_STATUS'
const TOGGLE_LIKES_COUNT = 'profileReducer/TOGGLE_LIKES_COUNT'


type addPostActionType = {
    type: typeof ADD_POST
    post: string
}
type setStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
type updateStatusActionType = {
    type: typeof UPDATE_STATUS
    status: string
}
export type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export type toggleLikesCountType = {
    type: typeof TOGGLE_LIKES_COUNT
    userId: string
    postId:string
}

export type PostType = {
    _id: string
    message: string
    likes: string[]
    date: string
}
export type InitialStateProfileType = {
    posts: PostType[]
    profile: ProfileType
    status: string
}
export type PhotoType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    aboutMe: string | null
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number | null
    photos?: PhotoType
}

export type profileActionsTypes =
    addPostActionType
    | setUserProfileActionType
    | setStatusActionType
    | updateStatusActionType
    | toggleLikesCountType

export const addPostCB = (post: string): addPostActionType => ({type: ADD_POST, post})
export const setStatus = (status: string): setStatusActionType => ({type: SET_STATUS, status})
export const updateStatus = (status: string): updateStatusActionType => ({type: UPDATE_STATUS, status})
export const setUserProfile = (profile: ProfileType): setUserProfileActionType => ({type: SET_USER_PROFILE, profile})
export const toggleLikesCount = (userId: string,postId:string): toggleLikesCountType => ({type: TOGGLE_LIKES_COUNT, userId,postId})

type ThunkType = ThunkAction<any, AppStateType, unknown, profileActionsTypes>

export const getStatusTC = (userId: string): ThunkType => (dispatch) => {
    profileAPI.getStatus(userId).then(res => {
        dispatch(setStatus(res))
    })
}
export const updateStatusTC = (status: string): ThunkType => (dispatch) => {
    profileAPI.updateStatus(status).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}
export const getUserProfileTC = (userId: string): ThunkType => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(res => {
            dispatch(setUserProfile(res.data))
        })
}

let initialState: InitialStateProfileType = {
    status: '',
    posts: [
        {_id: v1(), message: 'Hi', date: '21.01.21', likes: ['adfds', 'sdf', 'df', 'sdasdf', 'df']},
        {_id: v1(), message: 'Hello', date: '21.01.21', likes: ['adfds', 'sdf']},
        {_id: v1(), message: 'dksfjsdklf', date: '21.01.21', likes: ['adfds', 'sdf', 'df']},
        {_id: v1(), message: 'Hisafdgg', date: '21.01.21', likes: ['adfds', 'sdf', 'df', 'dfsdfs', 'dfs']},

    ],
    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null,
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: null,
        userId: 2,
        photos: {
            small: null,
            large: null,
        }
    }
}

export const profileReducer = (state = initialState, action: profileActionsTypes): InitialStateProfileType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {_id: v1(), message: action.post, date: '21.01.21', likes: []}],
            }
        case SET_USER_PROFILE:
            return {...state, profile: {...action.profile}}
        case SET_STATUS:
            return {...state, status: action.status}
        case UPDATE_STATUS:
            return {...state, status: action.status}
        case TOGGLE_LIKES_COUNT:
            let post = state.posts.find(p => p._id === action.postId)
            if(post?.likes.find(id => id === action.userId)){
                return {...state, posts: state.posts.map(p => p._id === action.postId ? {...p,likes:p.likes.filter(i => i !== action.userId)}: p)}
            }
            return {...state, posts: state.posts.map(p => p._id === action.postId ? {...p,likes:[...p.likes, action.userId]}: p)}
        default:
            return state
    }
}