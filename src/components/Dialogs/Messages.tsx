import React, {ChangeEventHandler} from "react"
import s from './dialogs.module.css'
import MessageItem from "./MessageItem/MessageItem";
import UserItem from "./UserItem/UserItem";
import {DialogType, UserType} from "../state/dialogsReducer";


export type MessagesPropsType = {
    dialogs: DialogType[]
    users: UserType[]
    text:string
    sendMessageAC: ()=>void
    onChangeMessageAC: (text:string)=>void
}

const Messages:React.FC<MessagesPropsType> = ({dialogs,users,text,onChangeMessageAC,sendMessageAC}) => {
    console.log(dialogs)
    debugger
    const onChangeMessage:ChangeEventHandler<HTMLTextAreaElement> = (e):void => {
        onChangeMessageAC(e.currentTarget.value)
    }
    const sendMessage =() => {
        sendMessageAC()
    }
    return (
        <div className={s.dialogs_grid_wrapper}>
            <div className={s.users_wrapper}>
                <UserItem users={users}/>
            </div>
            <div className={s.messages_wrapper}>
                <MessageItem dialogs={dialogs}/>
                <textarea value={text} onChange={onChangeMessage}/>
                <button onClick={sendMessage}>send</button>
            </div>
        </div>
    )
}

export default Messages