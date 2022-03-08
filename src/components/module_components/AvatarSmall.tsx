import React from 'react';
import ava from './../../assets/user.png'
import s from './common.module.scss'

type propsType = {
    image?:string
}
const AvatarSmall = ({image}:propsType) => {
    return  <img className={s.avatar} src={ image || ava} alt="avatar"/>
};

export default AvatarSmall;