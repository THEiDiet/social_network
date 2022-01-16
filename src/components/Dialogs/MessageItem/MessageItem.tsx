import React from "react";
import s from './messageItem.module.css'
import {DialogType} from "../../state/dialogsReducer";

type MessagePropsType = {
    dialogs: DialogType[]
}

const MessageItem:React.FC<MessagePropsType> = ({dialogs}) => {
    return (
        <div>
            { dialogs.map(d => {
                return (
                    <div key={d._id} className={s.message}>{d.message}</div>
                )
            })}
        </div>

    )
}


export default MessageItem