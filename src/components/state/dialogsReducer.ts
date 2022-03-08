import {v1} from "uuid";

const SEND_MESSAGE_M = 'SEND_MESSAGE_M'

export type dialogsActionsType =  sendMessageActionType

type sendMessageActionType = {
    type:typeof SEND_MESSAGE_M
    message:string
}
export const sendMessageAC = (message:string):sendMessageActionType => ({type:SEND_MESSAGE_M,message})

export type UserType = {
    _id:string
    userName: string
}
export type DialogType = {
    _id: string
    message: string
}
export type InitialStateDialogsType = {
    users: UserType[]
    dialogs:DialogType[]
}
let initialState:InitialStateDialogsType = {
    users : [
        {_id:v1(),userName:'Alex'},
        {_id:v1(),userName:'Sasha'},
        {_id:v1(),userName:'Alexa'}
    ],
        dialogs: [
        {_id:v1(),message:'some text'},
        {_id:v1(),message:'text'},
        {_id:v1(),message:'some '}
    ]
}

export const dialogsReducer = (state = initialState, action:dialogsActionsType):InitialStateDialogsType => {
    switch (action.type) {
        case SEND_MESSAGE_M:
            return {...state,
                dialogs:[...state.dialogs,{_id:v1(),message:action.message}],

            }
        default:
            return state
    }
}