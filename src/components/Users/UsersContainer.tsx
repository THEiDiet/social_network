import React from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../state/reduxStore";
import {followUserThunkCreator, getUsersTC, setCurrentPage,
        setIsFetching, setTotalUsersCount, unFollowUserThunkCreator, UserType
} from "../state/usersReducer";
import {Users} from "./Users";
import {Loader} from "../assets/Loader";
type mapStateType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    isDisabled: number[]
}
type mapDispatchType = {
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (page: number) => void
    setIsFetching: (fetching: boolean) => void
    followUserThunkCreator: (userId: number) => void
    unFollowUserThunkCreator: (userId: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
}
type ownPropsType = {

}
type UsersPropsCType = mapStateType & mapDispatchType & ownPropsType

class UsersContainer extends React.Component<UsersPropsCType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    setCurrentPage = (p: number) => {
        this.props.getUsersTC(p, this.props.pageSize)
    }
    render = () => {
        return this.props.isFetching ? <Loader/>
            : <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                setCurrentPage={this.setCurrentPage}
                pageSize={this.props.pageSize}
                isDisabled={this.props.isDisabled}
                followUserThunkCreator={this.props.followUserThunkCreator}
                unFollowUserThunkCreator={this.props.unFollowUserThunkCreator}
            />
    }
}

const mStP = (state: AppStateType) => ({
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isDisabled: state.usersPage.isDisabled
})

export default connect<mapStateType,mapDispatchType,ownPropsType,AppStateType>(mStP, {
    setTotalUsersCount,
    setCurrentPage,
    setIsFetching,
    followUserThunkCreator,
    unFollowUserThunkCreator,
    getUsersTC
})(UsersContainer)

