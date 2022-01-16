import Posts from "./Posts";
import {addPostCB, changePostCB} from "../../state/profileReducer";
import {AppStateType} from "../../state/reduxStore";
import {connect} from "react-redux";

const mStP = (state:AppStateType)=>({
    posts:state.profilePage.posts,
    newMessage:state.profilePage.newMessage
})

const PostsContainer = connect(mStP, {addPostCB,changePostCB})(Posts)
export default PostsContainer;