import React from "react";
import s from './messageItem.module.css'
import {DialogType} from "../../../components/state/state";

type MessagePropsType = {
    dialogs: Array<DialogType>
}

const MessageItem:React.FC<MessagePropsType> = (props) => {
    return (
        <div>
            { props.dialogs.map(d => {
                return (
                    <div key={d.id} className={s.message}>{d.message}</div>
                )
            })}
        </div>

    )
}


export default MessageItem