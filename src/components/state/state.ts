import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";


export type DialogType = {
    id: number
    message: string
}

export type UserType = {
    id:number
    userName:string
}
export type PostItemType = {
    message: string
    id: number
}
export type StateType = {
    dialogsPage: {users:Array<UserType>, dialogs: Array<DialogType>,newText:string}
    mainPage: {posts:Array<PostItemType>, newMessage: string}
}
export type StoreType  = {
    _state:StateType
    _rerender: (state:StateType) => void
    subscriber:(render:any) => void
    getState:() => StateType
    dispatch:(action:any) => void
}
const store:StoreType = {
    _state:{
        dialogsPage: {
            users : [
                {id:1,userName:'Alex'},
                {id:2,userName:'Sasha'},
                {id:3,userName:'Alexa'}
            ],
            dialogs: [
                {id:1,message:'some text'},
                {id:2,message:'text'},
                {id:3,message:'some '}
            ],
            newText:'ohoho'
        },
        mainPage: {
            posts: [
                {id:1, message:'Hi'},
                {id:2, message:'Hello'},
                {id:3, message:'Heyo'},
                {id:4, message:'Hohoho'}
            ],
            newMessage:'hi'
        }
    },
    _rerender (state:StateType) {
        console.log('some')
    },
    getState(){
        return this._state
    },
    subscriber (render:any) {
        this._rerender = render
    },
    dispatch (action:any) {
        this._state.mainPage = profileReducer(this._state.mainPage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._rerender(this._state)
    }
}

export default store
