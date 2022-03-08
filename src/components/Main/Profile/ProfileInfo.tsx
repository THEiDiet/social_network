import s from "./profileInfo.module.css";
import React, {ChangeEvent, useEffect, useState} from "react";
import {ProfileType} from "../../state/profileReducer";
import {InitialStateAuthType} from "../../state/authReducer";
import {profileAPI} from "../../api/api";
import userPhoto from './../../../assets/user.png'
import EditableSpan from "./EditableSpan";
import UserInfo from "../../module_components/UserInfo";
import ProfileBackGround from "../../module_components/ProfileBackGround";

type PropsType = {
    profile: ProfileType
    status: string
    auth: InitialStateAuthType
    userId: string | undefined

    updateStatus:(text:string)=>void
}

const ProfileInfo = ({profile, auth, userId, status,updateStatus}: PropsType) => {
    let buttonClass = s.hiddenBtn

    if (userId && +userId === auth.id) {
        buttonClass = s.changeUserInfoBtn
    }

    let [currentStatus, setStatus] = useState<string>(status)
    useEffect(() => {
        setStatus(status)
    }, [status])
    const onChangeStatusHandler = (text:string) => {
        setStatus(text)
    }
    const setNewStatus = () => {
        updateStatus(currentStatus)
    }

    return (
        <div className={s.aboutMe}>

            <UserInfo profile={profile} />

            {/*<img className={s.aboutMe__ava}*/}
            {/*     src={profile?.photos?.small || userPhoto}*/}
            {/*     alt=""/>*/}
            {/*<div className={s.aboutMe__desc}>*/}
            {/*    <h2 className={s.aboutMe__title}>{profile.fullName}</h2>*/}
            {/*    <h2 className={s.aboutMe__title}>{profile.aboutMe}</h2>*/}
            {/*    {*/}
            {/*        userId && (+userId === auth.id)*/}
            {/*            ? <EditableSpan onChange={onChangeStatusHandler} value={currentStatus}/>*/}
            {/*            : <h4>{status}</h4>*/}
            {/*    }*/}
            {/*    <button className={`${buttonClass}`} onClick={setNewStatus}>Change status</button>*/}
            {/*    <div className={s.aboutMe__text}>{profile.lookingForAJobDescription}</div>*/}
            {/*</div>*/}
        </div>
    )
}
export default ProfileInfo