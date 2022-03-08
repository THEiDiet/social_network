import React from "react"
import s from './dialogs.module.css'
import MessageItem from "./MessageItem/MessageItem";
import UserItem from "./UserItem/UserItem";
import {DialogType, UserType} from "../state/dialogsReducer";
import NewMessageForm, {newMessageFormValuesType} from "../Forms/NewMessageForm";


export type MessagesPropsType = {
    dialogs: DialogType[]
    users: UserType[]
    sendMessageAC: (message:string)=>void
}

const Messages:React.FC<MessagesPropsType> = ({dialogs,users,sendMessageAC}) => {

    const sendMessage =(values:newMessageFormValuesType) => {
        sendMessageAC(values.message)
    }
    return (
        <div className={s.dialogs_grid_wrapper}>
            <div className={s.users_wrapper}>
                <UserItem users={users}/>
            </div>
            <div className={s.messages_wrapper}>
                <MessageItem dialogs={dialogs}/>
                <NewMessageForm onSendMessage={sendMessage}/>
            </div>
        </div>
    )
}

export default Messages