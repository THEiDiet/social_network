import React from 'react'
import {FilterType, UserType} from "../state/usersReducer";
import s from './users.module.css'

import avatarDefault from './../../assets/user.png'
import {NavLink} from "react-router-dom";
import {User} from "./User";
import {UserCard} from "../module_components/UserCard";
import SearchUsersForm from "../Forms/SearchUsersForm";
import {Paginator} from "../module_components/Paginator";

type UsersPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isDisabled: number[]
    filter: FilterType

    setCurrentPage: (page: number) => void
    followUserThunkCreator: (userId: number) => void
    unFollowUserThunkCreator: (userId: number) => void
    onFilterChanges: (filter: FilterType) => void
}

export const Users = React.memo((props: UsersPropsType) => {
              const onFollow = (userId: number) => {
            props.followUserThunkCreator(userId)
        }
        const onUnFollow = (userId: number) => {
            props.unFollowUserThunkCreator(userId)
        }

        return (
            <div className={s.users}>
                <SearchUsersForm onFilterChanges={props.onFilterChanges}/>
                <Paginator setCurrentPage={props.setCurrentPage} page={props.currentPage} totalCount={props.totalUsersCount}/>
                <div className={s.usersFlex}>
                    {props.users.map(u => <div key={u.id} className={s.userItem}>
                        <UserCard user={u} isDisabled={props.isDisabled} onUnFollow={onUnFollow} onFollow={onFollow}/>
                    </div>)}
                </div>
            </div>
        )
    }
)
