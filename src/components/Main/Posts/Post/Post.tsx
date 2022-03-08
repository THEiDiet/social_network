import React from "react";
import {PostType} from "../../../state/profileReducer";
import {Box, Paper, Typography} from "@mui/material";

type propsType = {
    post: PostType
}
export const Post:React.FC<propsType> = ({post}) => {
    return (
        <Paper elevation={8} sx={{padding:'10px',width:'100%'}}>
            <div>avatar</div>
            <Typography>{post.message}</Typography>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <Typography>{post.date}</Typography>
                <Typography>{post.likes}</Typography>
            </Box>
        </Paper>
    )
}