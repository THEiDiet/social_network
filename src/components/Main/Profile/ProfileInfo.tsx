import s from "./profileInfo.module.css";
import React, {ChangeEvent, useEffect, useState} from "react";
import { ProfileType} from "../../state/profileReducer";
import {useParams} from "react-router-dom";
import {InitialStateAuthType} from "../../state/authReducer";
import {profileAPI} from "../../api/api";
import userPhoto from './../../../assets/user.png'

type PropsType = {
    profile:ProfileType
    auth:InitialStateAuthType
}

const ProfileInfo = ({profile,auth}:PropsType) => {
    let buttonClass = s.hiddenBtn
    let {userId} = useParams()
    if(userId && +userId === auth.id){
        buttonClass = s.changeUserInfoBtn
    }
    const onClickHandler = () => {
        console.log('working')
        profileAPI.updateProfile({
            aboutMe:'some text',
            contacts: {
                facebook:null,
                website:null,
                vk:null,
                twitter:null,
                instagram:null,
                youtube:null,
                github:null,
                mainLink:null,
            },
            lookingForAJob:true,
            lookingForAJobDescription: 'something about it',
            fullName: 'Hellow Kitti',
            userId:(userId && +userId) || null,

        }).then(res => console.log(res))
    }
//удалить потом
    let [image,setImage] = useState<any>(null)
    const onSetPhoto = (e:ChangeEvent<HTMLInputElement>) => {
        e.target.files && setImage(e.target.files[0])
    }

    const onClickPhotoHandler = () => {
        const formdata = new FormData()
        image && formdata.append('image', image)
        profileAPI.updatePhoto(formdata)
    }

    let [status,setStatus] = useState<any>('alala')
    useEffect(()=>{
        userId && profileAPI.getStatus(+userId).then(res => setStatus(res))
    },[])
    const onClickChangeStatus = () => {
        profileAPI.setStatus('new status').then(res => console.log(res))
    }
    return (
        <div className={s.aboutMe}>
            <img className={s.aboutMe__ava}
                 src={profile?.photos?.small || userPhoto }
                 alt=""/>
            <div className={s.aboutMe__desc}>
                <h2 className={s.aboutMe__title}>{profile.fullName}</h2>
                <h2 className={s.aboutMe__title}>{profile.aboutMe}</h2>
                <h2 className={s.aboutMe__title}>{status}</h2>
                <div className={s.aboutMe__text}>{profile.lookingForAJobDescription}</div>
                <input type="file" id={'file'} onChange={(e)=> onSetPhoto(e)}/>
                <button onClick={onClickPhotoHandler}>Change avatar</button>
                <button onClick={onClickHandler} className={buttonClass}>change info</button>
                <button onClick={onClickChangeStatus} className={buttonClass}>change status</button>
            </div>
        </div>
    )
}
export default ProfileInfo