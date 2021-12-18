import React from "react";
import s from "./header.module.css"
import logo from './../../assets/logo.png'

const Header = () => {
    return (
        <header className={"header"}>
            <img className={s.logo} src={logo} alt=""/>
        </header>
    )
}
export default Header