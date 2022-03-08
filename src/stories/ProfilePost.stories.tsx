import {ComponentMeta, ComponentStory} from "@storybook/react";
import {MemoryRouter} from "react-router-dom";
import {useArgs} from "@storybook/client-api";
import React from "react";
import ProfilePost from "../components/module_components/ProfilePost";
import {ThemeProvider} from "@mui/material";
import {theme} from "../styles/themeMUI";

export default {
    title: 'Custom/ProfilePost',
    component: ProfilePost,
    argTypes: {
    },
} as ComponentMeta<typeof ProfilePost>;


export const ControlledPost:ComponentStory<typeof ProfilePost>  = ({...args}) => {
    const [{post},toggleLikes] = useArgs()
    console.log(post)
    const setLikeHandler = () => {
                setTimeout(()=>{
        },500)
    }
    return <ThemeProvider theme={theme}><ProfilePost post={post} toggleLikesCount={setLikeHandler} /></ThemeProvider>
}
ControlledPost.args = {
    post:{_id: 'dfs',
        message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ci',
        date:'21.01.21',
        likes:['2','sda','sa']},
    toggleLikesCount:()=>{}
};