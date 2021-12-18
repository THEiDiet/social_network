const SEND_MESSAGE_M = 'SEND_MESSAGE_M'
const CHANGE_MESSAGE_M = 'CHANGE_MESSAGE_M'

export const onChangeMessageAC = (text:string) => ({type: CHANGE_MESSAGE_M, text})
export const sendMessageAC = () => ({type:SEND_MESSAGE_M})

let initialState = {
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
}

export const dialogsReducer = (state:any = initialState, action:any) => {
    switch (action.type) {
        case CHANGE_MESSAGE_M:
            state.newText = action.text
            break
        case SEND_MESSAGE_M:
            state.dialogs.push({id:5,message:state.newText})
            state.newText = ''
            break
        default:
            return state
    }

}