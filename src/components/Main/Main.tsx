import React from "react";
import s from "./main.module.css";
import ProfileInfo from "./Profile/ProfileInfo";
import Posts from "./Posts/Posts";
import {PostItemType} from "../../components/state/state";

export type PostsPropsType = {
    posts: Array<PostItemType>
    message: string
    dispatch: (action: any) => void
}

const Main:React.FC<PostsPropsType> = (props) => {
    return (
        <main className={s.main}>
            <img className={s.bg_img}
                 src="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
                 alt="bg"/>
            <ProfileInfo/>
            <Posts posts={props.posts} message={props.message} dispatch={props.dispatch}/>
        </main>
    )
}
export default Main;