import React from "react";
import s from "./posts.module.css";
import {Post} from "./Post/Post";
import {PostsPropsType} from "../Main";
import {addPostAC, changePostAC} from "../../state/profileReducer";



const Posts:React.FC<PostsPropsType> = (props) => {

    const myRef:React.LegacyRef<HTMLTextAreaElement> = React.createRef()

    const addPostCB = () => {
        if (myRef?.current?.value){
            props.dispatch(addPostAC())
            myRef.current.value = ''
        } else {
            alert('Ты ничего не ввел, что отправить хочешь?')
        }
    }

    const changePostCB = () => {
        if (myRef?.current?.value){
            props.dispatch(changePostAC(myRef.current.value))
        }
    }

    return (
        <div className={s.posts}>
            <textarea className={s.textarea} ref={myRef} value={props.message} onChange={changePostCB}/>
            <button className={s.button} onClick={addPostCB} >Send</button>
            {props.posts.map(post => {
                return (
                    <Post key={post.id} message={post.message} id={post.id}/>
                )
            })}
        </div>
    )
}
export default Posts;