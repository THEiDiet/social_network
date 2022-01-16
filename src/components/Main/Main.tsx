import React from "react";
import s from "./main.module.css";
import ProfileInfo from "./Profile/ProfileInfo";
import { ProfileType} from "../state/profileReducer";
import PostsContainer from "./Posts/PostsContainer";
import {InitialStateAuthType} from "../state/authReducer";


export type PostsContainerPropsType = {
    profile: ProfileType
    auth:InitialStateAuthType
}

const Main: React.FC<PostsContainerPropsType> = ({profile,auth,...props}) => {

    return (
        <main className={s.main}>
            <img className={s.bg_img}
                 src="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
                 alt="bg"/>
            <ProfileInfo profile={profile} auth={auth}/>
            <PostsContainer/>
        </main>
    )
}
export default Main;