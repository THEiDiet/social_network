import React from "react";
import {Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {UserType} from "../state/usersReducer";
import avatarDefault from './../../assets/user.png'
import {MyButton} from "./Button";
import s from "../Users/users.module.css";
type MyCardType = {
    user:UserType
    isDisabled: number[]

    onUnFollow: (userId: number) => void
    onFollow: (userId: number) => void
}
export const UserCard = ({user,onUnFollow,onFollow,isDisabled}:MyCardType) => {
    return <Card sx={{ width: 250, background:'#eee' }}>
        <NavLink to={`/${user.id}`}>
        <CardMedia
            component="img"
            height="250"
            image={user.photos.small || avatarDefault}
            alt={user.name}
        />
        </NavLink>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {user.status || 'Статус юного разработчика'}
            </Typography>
        </CardContent>
        <CardActions>
            {user.followed
                ? <MyButton className={s.button} disabled={isDisabled.some(s => s === user.id)} callback={() => onUnFollow(user.id)} value={'unfollow'}/>
                : <MyButton className={s.button} disabled={isDisabled.some(s => s === user.id)} callback={() => onFollow(user.id)} value={'follow'}/>
            }
        </CardActions>
    </Card>
}