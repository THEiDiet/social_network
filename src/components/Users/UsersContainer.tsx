import React from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../state/reduxStore";
import {
    FilterType, followUserThunkCreator, getUsersTC, setCurrentPage,
    setIsFetching, setTotalUsersCount, unFollowUserThunkCreator, UserType
} from "../state/usersReducer";
import {Users} from "./Users";
import {Loader} from "../assets/Loader";
import { compose } from 'redux';
import {
    getCurrentPage,
    getFilter,
    getIsDisabled,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersArray
} from "../state/usersSelect";
type mapStateType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    isDisabled: number[]
    filter: FilterType
}
type mapDispatchType = {
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (page: number) => void
    setIsFetching: (fetching: boolean) => void
    followUserThunkCreator: (userId: number) => void
    unFollowUserThunkCreator: (userId: number) => void
    getUsersTC: (currentPage: number, pageSize: number,filter:FilterType) => void
}
type ownPropsType = {}
type UsersPropsCType = mapStateType & mapDispatchType & ownPropsType

class UsersContainer extends React.Component<UsersPropsCType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize,this.props.filter)
    }

    setCurrentPage = (p: number) => {
        this.props.getUsersTC(p, this.props.pageSize,this.props.filter)
    }
    onFilterChanges = (filter:FilterType)=> {
        this.props.getUsersTC(1,  this.props.pageSize,filter)
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
                onFilterChanges={this.onFilterChanges}
                filter={this.props.filter}
            />
    }
}

const mStP = (state: AppStateType) => ({
    users: getUsersArray(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isDisabled: getIsDisabled(state),
    filter: getFilter(state)
})
export default compose<React.ComponentType>(connect<mapStateType,mapDispatchType,ownPropsType,AppStateType>(mStP, {
    setTotalUsersCount,
    setCurrentPage,
    setIsFetching,
    followUserThunkCreator,
    unFollowUserThunkCreator,
    getUsersTC
}))(UsersContainer)

