import React from 'react'
import {follow, setCurrentPage, setUsers, unFollow, UserType} from "../state/usersReducer";
import s from './users.module.css'
import axios from "axios";

import avatarDefault from './../../assets/user.png'


type UsersPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number

    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: UserType[]) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (page: number) => void
}

export class Users extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setTotalUsersCount(res.data.totalCount)
                this.props.setUsers(res.data.items)
            })
    }

    setCurrentPage = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(res => {
                debugger
                this.props.setUsers(res.data.items)
            })
    }
    render = () => {
        const pages = []
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        for (let i = 1; i <= 5; i++) {
            pages.push(i)
        }
        console.log(this.props.currentPage)
        console.log(this.props.users)
        return (
            <div>
                {pages.map(p => <span className={this.props.currentPage === p ? s.activePage : ''}
                                      onClick={() => this.setCurrentPage(p)}>{p}
                </span>)}
                {this.props.users.map(u => <div key={u.id} className={s.userItem}>
                    <div><img className={s.avatar} src={u.photos.small ? u.photos.small : avatarDefault} alt={u.name}/>
                        <div>{u.name}</div>
                    </div>
                    <div className={s.status}>{u.status}</div>
                    <div className={s.buttons}>
                        {u.followed
                            ? <button onClick={() => unFollow(u.id)}>unfollow</button>
                            : <button onClick={() => follow(u.id)}>Follow</button>
                        }
                    </div>
                </div>)}
            </div>
        )
    }
}