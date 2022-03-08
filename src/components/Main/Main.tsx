import React from "react";
import s from "./main.module.css";
import ProfileInfo from "./Profile/ProfileInfo";
import {ProfileType} from "../state/profileReducer";
import PostsContainer from "./Posts/PostsContainer";
import {InitialStateAuthType} from "../state/authReducer";
import ProfileBackGround from "../module_components/ProfileBackGround";
import {Container} from "@mui/material";


export type PostsContainerPropsType = {
    profile: ProfileType
    auth: InitialStateAuthType
    userId: string | undefined
    status: string
    updateStatus: (text: string) => void
}

const Main: React.FC<PostsContainerPropsType> = ({profile, auth, status, userId, updateStatus, ...props}) => {

    return (
        <main className={s.main}>
            <ProfileBackGround status={status} className={s.sticky}/>
            <Container className={s.container} maxWidth={'xl'} sx={{display:'flex',flexDirection:'row'}}>
                <ProfileInfo profile={profile} auth={auth} userId={userId} status={status} updateStatus={updateStatus}/>
                <PostsContainer/>
            </Container>
        </main>
    )
}
export default Main;