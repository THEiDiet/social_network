import React from "react";
import s from "./posts.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../state/profileReducer";

export type PostsPresentType = {
    posts: PostType[]
    newMessage: string
    addPostCB: ()=>void
    changePostCB: (post:string)=>void
}

const Posts:React.FC<PostsPresentType> = ({newMessage,posts,changePostCB,addPostCB}) => {

    const myRef:React.LegacyRef<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
        addPostCB()
    }

    const changePost = () => {
        if (myRef?.current?.value){
            changePostCB(myRef.current.value)
        }
    }

    return (
        <div className={s.posts}>
            <textarea className={s.textarea} ref={myRef} value={newMessage} onChange={changePost}/>
            <button className={s.button} onClick={addPost} >Send</button>
            {posts.map(post => {
                return (
                    <Post _id={post._id} message={post.message}/>
                )
            })}
        </div>
    )
}
export default Posts;