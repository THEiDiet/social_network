import React from "react";
import s from "./header.module.css"

const Header = () => {
    return (
        <header className={"header"}>
            <img className={s.logo} src="https://e7.pngegg.com/pngimages/278/30/png-clipart-apple-logo-svg-company-logo.png" alt=""/>
        </header>
    )
}
export default Header