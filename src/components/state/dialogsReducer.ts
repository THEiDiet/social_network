import {v1} from "uuid";

const SEND_MESSAGE_M = 'SEND_MESSAGE_M'
const CHANGE_MESSAGE_M = 'CHANGE_MESSAGE_M'

export type dialogsActionsType = onChangeMessageActionType | sendMessageActionType

type onChangeMessageActionType = {
    type: typeof CHANGE_MESSAGE_M
    text:string
}
type sendMessageActionType = {
    type:typeof SEND_MESSAGE_M
}
export const onChangeMessageAC = (text:string):onChangeMessageActionType => ({type: CHANGE_MESSAGE_M, text})
export const sendMessageAC = ():sendMessageActionType => ({type:SEND_MESSAGE_M})

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
    newText: string
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
    ],
        newText:'ohoho'
}

export const dialogsReducer = (state = initialState, action:dialogsActionsType):InitialStateDialogsType => {
    switch (action.type) {
        case CHANGE_MESSAGE_M:
            return {...state,newText:action.text}
        case SEND_MESSAGE_M:
            return {...state,
                dialogs:[...state.dialogs,{_id:v1(),message:state.newText}],
                newText: ''
            }
        default:
            return state
    }
}