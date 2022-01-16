import React, {useEffect} from "react";
import {
    ProfileType,
    getUserProfileTC
} from "../state/profileReducer";
import Main from "./Main";
import {connect} from "react-redux";
import {AppStateType} from "../state/reduxStore";
import {useParams} from "react-router-dom";
import {InitialStateAuthType} from "../state/authReducer";

type mapStateType = {
    profile: ProfileType
    auth:InitialStateAuthType
}
type mapDispatchType = {
    getUserProfileTC: (userId:string)=> void
}
type OwnPropsType = {}
export type MainContainerPropsType = mapStateType & mapDispatchType & OwnPropsType

const MainContainer = ({profile,getUserProfileTC,auth}:MainContainerPropsType) => {
    let {userId} = useParams()
    useEffect(()=>{
        userId && getUserProfileTC(userId)
    },[userId])
    return <Main profile={profile} auth={auth}/>
}

const mStP = (state:AppStateType) => ({
    profile: state.profilePage.profile,
    auth: state.auth
})

export default  connect<mapStateType,mapDispatchType,OwnPropsType,AppStateType>(mStP, {getUserProfileTC})(MainContainer)
