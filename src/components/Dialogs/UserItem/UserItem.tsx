import React from "react";
import s from './userItem.module.css'
import {NavLink} from "react-router-dom";
import { UserType} from "../../../components/state/state";

type UserPropsType = {
    users: Array<UserType>
}

const UserItem:React.FC<UserPropsType> = (props) => {
    return (
            <div>
                {
                    props.users.map(u => {
                        return (
                            <div className={s.user}><NavLink to={`/dialogs/${u.id}`}>{u.userName}</NavLink></div>
                        )
                    })
                }
            </div>
    )
}

export default UserItem