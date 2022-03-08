import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import avatarDefault from "../../assets/user.png";
import {ProfileType} from "../state/profileReducer";
import {Link} from "react-router-dom";

type userInfoType = {
    profile: ProfileType
}

const UserInfo = ({profile}:userInfoType) => {
    console.log(profile)
    // {
    //         aboutMe: null,
    //         contacts: {
    //             facebook: null,
    //             website: null,
    //             vk: null,
    //             twitter: null,
    //             instagram: null,
    //             youtube: null,
    //             github: null,
    //             mainLink: null,
    //         },
    //         lookingForAJob: false,
    //         lookingForAJobDescription: null,
    //         fullName: null,
    //         userId: 2,
    //         photos: {
    //             small: null,
    //             large: null,
    //         }
    const keys = Object.keys(profile.contacts)
    // @ts-ignore
    const arr = keys.filter(k => profile.contacts[k] !== null).map(c=> <div key={c}><a  href={profile.contacts[c]}>{c}</a></div> )
    return (
        <Card sx={{ width: 250, background:'#496e7c',position:'relative' }} raised>
                <CardMedia
                    component="img"
                    height="230"

                    image={profile.photos?.large || avatarDefault}
                    alt=''
                    sx={{borderRadius:'50%', padding:'10px',width:'230px'}}
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {profile.fullName}
                </Typography>
                {profile.aboutMe && <Typography variant="body2" color="text.secondary">{profile.aboutMe}</Typography>}
                {profile.lookingForAJob && <Typography variant="body1" color="text.secondary">Ищу работу</Typography>}
                {profile.lookingForAJobDescription && <Typography variant="body2" color="text.secondary">{profile.lookingForAJobDescription}</Typography>}
                {<div>{arr}</div>}
            </CardContent>
        </Card>
    );
};

export default UserInfo;