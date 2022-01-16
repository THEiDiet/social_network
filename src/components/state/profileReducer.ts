import {v1} from "uuid";
import {profileAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";

const ADD_POST = 'ADD_POST'
const CHANGE_POST = 'CHANGE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

type changePostActionType = {
    text:string
    type: typeof CHANGE_POST
}
type addPostActionType = {
    type: typeof ADD_POST
}
export type setUserProfileActionType= {
    type: typeof SET_USER_PROFILE
    profile:ProfileType
}

export type PostType = {
    _id:string
    message:string
}
export type InitialStateProfileType = {
    posts:PostType[]
    newMessage:string
    profile: ProfileType
}
export type PhotoType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    aboutMe:string | null
    contacts: {
        facebook:string | null
        website:string | null
        vk:string | null
        twitter:string | null
        instagram:string | null
        youtube:string | null
        github:string | null
        mainLink:string | null
    }
    lookingForAJob:boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId:number | null
    photos?: PhotoType
}

export type profileActionsTypes = addPostActionType | changePostActionType | setUserProfileActionType

export const changePostCB = (text:string):changePostActionType => ({type: CHANGE_POST, text })
export const addPostCB = ():addPostActionType => ({type: ADD_POST})
export const setUserProfile = (profile:ProfileType):setUserProfileActionType => ({type:SET_USER_PROFILE,profile})
type ThunkType = ThunkAction<any, AppStateType, unknown,profileActionsTypes>
export const getUserProfileTC = (userId:string):ThunkType => (dispatch) => {
        profileAPI.getProfile(userId)
            .then(res => {
                dispatch(setUserProfile(res.data))
            })
}

let initialState:InitialStateProfileType = {
    posts: [
        {_id:v1(), message:'Hi'},
        {_id:v1(), message:'Hello'},
        {_id:v1(), message:'Heyo'},
        {_id:v1(), message:'Hohoho'}
    ],
        newMessage:'hi',
    profile:{
        aboutMe:null,
        contacts: {
            facebook:null,
            website:null,
            vk:null,
            twitter:null,
            instagram:null,
            youtube:null,
            github:null,
            mainLink:null,
        },
        lookingForAJob:false,
        lookingForAJobDescription: null,
        fullName:  null,
        userId:2,
        photos: {
            small:null,
            large:null,
        }
    }
}

export const profileReducer = (state = initialState, action:profileActionsTypes):InitialStateProfileType => {
    switch (action.type) {
        case CHANGE_POST:
            return {...state, newMessage:action.text}
        case ADD_POST:
            return {...state,
                posts: [...state.posts, {_id:v1(), message: state.newMessage}],
                newMessage: ''
            }
        case SET_USER_PROFILE:
            return {...state, profile: {...action.profile}}
        default:
            return state
    }
}