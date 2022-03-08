import React, {useEffect} from "react";
import {
    ProfileType,
    getUserProfileTC, getStatusTC, updateStatusTC
} from "../state/profileReducer";
import Main from "./Main";
import {connect} from "react-redux";
import {AppStateType} from "../state/reduxStore";
import {useParams} from "react-router-dom";
import {InitialStateAuthType} from "../state/authReducer";
import {getAuthAll} from "../state/authSelect";
import {getProfile, getStatus} from "../state/profileSelect";
import {compose} from "redux";
import WithSuspense from "../hoc/withSuspense";

type mapStateType = {
    profile: ProfileType
    auth:InitialStateAuthType
    status:string
}
type mapDispatchType = {
    getUserProfileTC: (userId:string)=> void
    getStatusTC:(userId:string)=>void
    updateStatusTC:(newStatus:string)=>void
}
type OwnPropsType = {}
export type MainContainerPropsType = mapStateType & mapDispatchType & OwnPropsType

const MainContainer = ({profile,getUserProfileTC,auth,status,getStatusTC,updateStatusTC}:MainContainerPropsType) => {
    let {userId} = useParams()
    useEffect(()=>{
        userId && getUserProfileTC(userId)
        userId && getStatusTC(userId)
    },[userId])
    return <Main profile={profile} auth={auth} userId={userId} status={status} updateStatus={updateStatusTC}/>
}

const mStP = (state:AppStateType) => ({
    profile: getProfile(state),
    auth: getAuthAll(state),
    status: getStatus(state)
})
export default compose(
    connect<mapStateType,mapDispatchType,OwnPropsType,AppStateType>(mStP, {getUserProfileTC,getStatusTC,updateStatusTC}),
)(MainContainer)
// export default  connect<mapStateType,mapDispatchType,OwnPropsType,AppStateType>(mStP, {getUserProfileTC,getStatusTC,updateStatusTC})(MainContainer)
