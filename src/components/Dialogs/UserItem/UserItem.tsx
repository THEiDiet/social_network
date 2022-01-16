import React from "react";
import s from './userItem.module.css'
import {NavLink} from "react-router-dom";
import { UserType } from "../../../components/state/dialogsReducer";

type UserPropsType = {
    users: UserType[]
}

const UserItem:React.FC<UserPropsType> = ({users}) => {
    return (
            <div>
                {
                    users.map(u => {
                        return (
                            <div key={u._id} className={s.user}><NavLink to={`/dialogs/${u._id}`}>{u.userName}</NavLink></div>
                        )
                    })
                }
            </div>
    )
}

export default UserItem