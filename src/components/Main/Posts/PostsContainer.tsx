import Posts from "./Posts";
import {addPostCB, PostType, toggleLikesCount} from "../../state/profileReducer";
import {AppStateType} from "../../state/reduxStore";
import {connect} from "react-redux";
type mapStateType = {
    posts:PostType[]
}
type mapDispatchType = {
    addPostCB:(post:string)=> void
    toggleLikesCount:(userId:string,postId:string)=> void
}
type ownPropsType = {}
const mStP = (state:AppStateType)=>({
    posts:state.profilePage.posts,
})

const PostsContainer = connect<mapStateType,mapDispatchType,ownPropsType,AppStateType>(mStP, {addPostCB,toggleLikesCount})(Posts)
export default PostsContainer;