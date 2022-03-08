import React from "react";
import {NavLink} from "react-router-dom";
import s from './navgation.module.scss'
import {WithRedirect} from "../hoc/WithAuthRedirect";

type NavigationType = {
    className?:string
}

const Navigation = ({className}:NavigationType) => {
    const finalClassName = `${s.nav} ${className ? className : ''}`
    return (
            <ul className={finalClassName}>
                    <li><NavLink to='/'
                                 className={({isActive}) => `${s.link} ${isActive ? s.link_active : ''}`}>Home</NavLink>
                    </li>
                    <li><NavLink to='/dialogs'
                                 className={({isActive}) => `${s.link} ${isActive ? s.link_active : ''}`}>Messages</NavLink>
                    </li>
                    <li><NavLink to='/users'
                                 className={({isActive}) => `${s.link} ${isActive ? s.link_active : ''}`}>Friends</NavLink>
                    </li>
                    <li><NavLink to='/setting'
                                 className={({isActive}) => `${s.link} ${isActive ? s.link_active : ''}`}>Settings</NavLink>
                    </li>
            </ul>
    )
}

export default Navigation