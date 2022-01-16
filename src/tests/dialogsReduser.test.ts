import {
    dialogsReducer,
    InitialStateDialogsType,
    onChangeMessageAC,
    sendMessageAC
} from "../components/state/dialogsReducer";
import {v1} from "uuid";

let initialState:InitialStateDialogsType

beforeEach(()=> {
    initialState = {
        users : [
            {_id:v1(),userName:'Alex'},
            {_id:v1(),userName:'Sasha'},
            {_id:v1(),userName:'Alexa'}
        ],
        dialogs: [
            {_id:v1(),message:'some text'},
        ],
        newText:'ohoho'
    }
})

test('reducer should be working :)', ()=> {
    let actionOnChange = onChangeMessageAC('new text here')
    let newState = dialogsReducer(initialState,actionOnChange)
    expect(newState.newText).toBe('new text here')
})

test('length of dialogs should be incremented', ()=> {
    let actionOnSend = sendMessageAC()
    let newState = dialogsReducer(initialState,actionOnSend)
    expect(newState.dialogs.length).toBe(2)
    expect(newState.dialogs[1].message).toBe('ohoho')
})

export default 1