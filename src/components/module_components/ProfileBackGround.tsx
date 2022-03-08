import React from 'react';
import bg from './../../assets/bg.jpg'
import {Typography} from "@mui/material";

const backGroundStyles = {
    background:`url(${bg}) center top/cover no-repeat`,
    width:'100%',
    height:'300px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}
type propsType = {
    status:string | null
    className?:string
}
const ProfileBackGround = ({status,className}:propsType) => {
    return (
        <div style={backGroundStyles} className={className || ''}>
            <Typography sx={{}} variant='h3'>{status}</Typography>
        </div>
    );
};

export default ProfileBackGround;