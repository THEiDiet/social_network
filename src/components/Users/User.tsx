import React from 'react'
import {UserType} from "../state/usersReducer";
import s from './users.module.css'

import avatarDefault from './../../assets/user.png'
import {NavLink} from "react-router-dom";
import {MyButton} from "../module_components/Button";

type UserPropsType = {
    user: UserType
    isDisabled: number[]

    onUnFollow: (userId: number) => void
    onFollow: (userId: number) => void
}

export const User = ({user, isDisabled, onFollow, onUnFollow}: UserPropsType) => {

    return (
        <>
            <div>
                <NavLink to={`/${user.id}`}>
                    <img className={s.avatar} src={user.photos.large ? user.photos.large : avatarDefault}
                         alt={user.name}/>
                </NavLink>
                <div>{user.name}</div>
            </div>
            <div className={s.status}>{user.status}</div>
            <div className={s.buttons}>

                {user.followed
                    // ? <MyButton className={s.button} callback={() => onUnFollow(user.id)} value={'unfollow'}/>
                    // <button className={s.button} disabled={isDisabled.some(s => s === user.id)}
                    //           onClick={() => onUnFollow(user.id)}>unfollow</button>
                    // :<MyButton className={s.button} callback={() => onFollow(user.id)} value={'follow'}/>

                }
            </div>
        </>
    )
}

