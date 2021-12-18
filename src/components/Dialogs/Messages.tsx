import React, {ChangeEventHandler} from "react"
import s from './dialogs.module.css'
import MessageItem from "./MessageItem/MessageItem";
import UserItem from "./UserItem/UserItem";
import {DialogType, UserType} from "../../components/state/state";
import {onChangeMessageAC, sendMessageAC} from "../state/dialogsReducer";


type MessagesPropsType = {
    dialogs: Array<DialogType>
    users: Array<UserType>
    dispatch:(action:any) => void
    text:string
}

const Messages:React.FC<MessagesPropsType> = ({dialogs,users,dispatch,text}) => {
    const onChangeMessage:ChangeEventHandler<HTMLTextAreaElement> = (e):void => {
        dispatch(onChangeMessageAC(e.currentTarget.value))
    }
    const sendMessage =() => {
        dispatch(sendMessageAC())
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