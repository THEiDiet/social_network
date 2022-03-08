import React from "react";
import s from "./posts.module.scss";
import {Post} from "./Post/Post";
import {PostType} from "../../state/profileReducer";
import NewMessageForm, {newMessageFormValuesType} from "../../Forms/NewMessageForm";
import ProfilePost from "../../module_components/ProfilePost";

export type PostsPresentType = {
    posts: PostType[]
    addPostCB: (post:string)=>void
    toggleLikesCount:(userId:string,postId:string)=> void
}

const Posts:React.FC<PostsPresentType> = React.memo(({posts,addPostCB,toggleLikesCount}) => {

    const addPost = (values:newMessageFormValuesType) => {
        addPostCB(values.message)
    }
    return (
        <div className={s.posts}>
            <NewMessageForm onSendMessage={addPost}/>
            {posts.map(post => {
                return (
                    <ProfilePost key={post._id} post={post} toggleLikesCount={toggleLikesCount} className={s.post}/>
                )
            })}
        </div>
    )
})
export default Posts;