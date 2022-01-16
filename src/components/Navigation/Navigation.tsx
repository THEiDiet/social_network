import React from "react";
import {NavLink} from "react-router-dom";
import s from './navgation.module.css'

type NavigationType = {
    className:string
}

const Navigation = ({className}:NavigationType) => {

    return (
            <nav className={className}>
                <ul>
                    <li><NavLink to='/'
                                 className={({isActive}) => `${s.normal} ${isActive ? s.active : ''}`}>Home</NavLink>
                    </li>
                    <li><NavLink to='/dialogs'
                                 className={({isActive}) => `${s.normal} ${isActive ? s.active : ''}`}>Messages</NavLink>
                    </li>
                    <li><NavLink to='/users'
                                 className={({isActive}) => `${s.normal} ${isActive ? s.active : ''}`}>Friends</NavLink>
                    </li>
                    <li><NavLink to='/setting'
                                 className={({isActive}) => `${s.normal} ${isActive ? s.active : ''}`}>Settings</NavLink>
                    </li>
                </ul>
            </nav>
    )
}

export default Navigation