import React, {useState} from 'react';
import {PostType} from "../state/profileReducer";
import {Grid, Paper, Typography} from "@mui/material";
import AvatarSmall from "./AvatarSmall";
import {ReactComponent as Like} from './../../assets/like.svg'
import s from './common.module.scss'

type propsType = {
    post: PostType
    toggleLikesCount:(userId:string,postId:string)=> void
    className?:string
}

const ProfilePost = ({post,toggleLikesCount, className}: propsType) => {
    // const [isLiked, setLike] = useState(false)
    //сделать возможность расшарить пост
    return (
        <Paper className={className ? className : ''} elevation={4} sx={{padding: '10px 10px 10px 15px', width: '400px'}}>
            <Grid container sx={{flexWrap: 'no-wrap', width: '400px'}}>
                <Grid item sx={{flex: '0 1 auto', mr: '15px'}}><AvatarSmall/></Grid>
                <Grid container direction={'column'} sx={{flex: '1 0 320px'}}>
                    <Grid item sx={{flex: '1 0 auto', mb: '20px'}}><Typography variant='body1' sx={{lineHeight: 1.3}}
                                                                               component={'div'}>{post.message}</Typography></Grid>
                    <Grid container sx={{justifyContent: 'space-between'}}>
                        <Grid item><Typography variant='body2' sx={{fontSize: '14px',color: '#b2b2b2'}}>{post.date}</Typography></Grid>
                        <Grid item sx={{display:'flex'}}>

                            <Like className={`${s.like} ${post.likes.some(l => l === '2') ? s.like_active : ''}`}
                                  onClick={() => toggleLikesCount('2', post._id)}/>
                            <Typography variant='body2' sx={{fontSize: '12px', color: '#b2b2b2', alignSelf:'flex-end'}}>
                                {post.likes.length}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default ProfilePost;