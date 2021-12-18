import React from "react";
import {NavLink} from "react-router-dom";
import s from './navgation.module.css'
const Navigation =() => {

    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink  to='/' className={({isActive})=> `${s.normal} ${isActive ? s.active :''}`}>Home</NavLink></li>
                <li><NavLink to='/dialogs' className={({isActive})=> `${s.normal} ${isActive ? s.active :''}`} >Messages</NavLink></li>
                <li><NavLink to='/people'>Friends</NavLink></li>
                <li><NavLink to='/setting'>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation