import React from 'react'
import { UserType} from "../state/usersReducer";
import s from './users.module.css'

import avatarDefault from './../../assets/user.png'
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isDisabled: number[]

    setCurrentPage: (page: number) => void
    followUserThunkCreator: (userId: number) => void
    unFollowUserThunkCreator: (userId: number) => void
}

export const Users = (props: UsersPropsType) => {
    const pages: number[] = []
    // const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    for (let i = 1; i <= 20; i++) {
        pages.push(i)
    }
    const onFollow = (userId: number) => {
        props.followUserThunkCreator(userId)
    }
    const onUnFollow = (userId: number) => {
        props.unFollowUserThunkCreator(userId)
    }
    return (
        <>
        {pages.map(p => <span key={p} className={`${s.pageNumber} ${props.currentPage === p ? s.activePage : ''} `}
                                  onClick={() => props.setCurrentPage(p)}>{p}
                </span>)}
            {props.users.map(u => <div key={u.id} className={s.userItem}>
                <div>
                    <NavLink to={`/${u.id}`}>
                        <img className={s.avatar} src={u.photos.small ? u.photos.small : avatarDefault} alt={u.name}/>
                    </NavLink>
                    <div>{u.name}</div>
                </div>
                <div className={s.status}>{u.status}</div>
                <div className={s.buttons}>
                    {u.followed
                        ? <button disabled={props.isDisabled.some(s => s === u.id)}
                                  onClick={() => onUnFollow(u.id)}>unfollow</button>
                        : <button disabled={props.isDisabled.some(s => s === u.id)}
                                  onClick={() => onFollow(u.id)}>Follow</button>
                    }
                </div>
            </div>)}
        </>
    )
}

